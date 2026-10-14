import { ContactMessage } from '../models/ContactMessage.js';
import { getDBStatus } from '../config/db.js';

// In-memory persistence fallback when MongoDB is not connected
const inMemoryContactStore = [];

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const validationErrors = [];

    // Sanitize & validate fields
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedSubject = typeof subject === 'string' ? subject.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName || trimmedName.length < 2) {
      validationErrors.push('Name must be at least 2 characters long.');
    } else if (trimmedName.length > 100) {
      validationErrors.push('Name cannot exceed 100 characters.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      validationErrors.push('Please provide a valid email address.');
    }

    if (!trimmedSubject || trimmedSubject.length < 3) {
      validationErrors.push('Subject must be at least 3 characters long.');
    } else if (trimmedSubject.length > 150) {
      validationErrors.push('Subject cannot exceed 150 characters.');
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      validationErrors.push('Message must be at least 10 characters long.');
    } else if (trimmedMessage.length > 2000) {
      validationErrors.push('Message cannot exceed 2000 characters.');
    }

    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please review the form inputs.',
        errors: validationErrors
      });
    }

    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
    const userAgent = req.headers['user-agent'] || 'Unknown';

    const dbStatus = getDBStatus();
    let savedRecord = null;

    if (dbStatus.connected) {
      // Save directly to MongoDB
      const newContact = new ContactMessage({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        ipAddress: clientIp,
        userAgent
      });
      savedRecord = await newContact.save();
    } else {
      // In-Memory store fallback
      savedRecord = {
        _id: 'mem_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        ipAddress: clientIp,
        userAgent,
        createdAt: new Date().toISOString()
      };
      inMemoryContactStore.push(savedRecord);
    }

    console.log(`[Contact] New inquiry received from ${trimmedName} <${trimmedEmail}>: "${trimmedSubject}" (Storage: ${dbStatus.type})`);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received successfully.',
      referenceId: savedRecord._id,
      timestamp: savedRecord.createdAt,
      storageType: dbStatus.type
    });
  } catch (error) {
    console.error('[Contact Error]', error);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred while processing your message. Please try emailing directly via sandeshsalavi3@gmail.com.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const getContactSubmissions = async (req, res) => {
  try {
    const dbStatus = getDBStatus();
    if (dbStatus.connected) {
      const messages = await ContactMessage.find().sort({ createdAt: -1 }).limit(50);
      return res.json({ success: true, count: messages.length, messages, storage: 'MongoDB' });
    } else {
      return res.json({ success: true, count: inMemoryContactStore.length, messages: inMemoryContactStore, storage: 'In-Memory Store' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
