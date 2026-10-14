import mongoose from 'mongoose';

let isMongoConnected = false;

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sandesh_portfolio';
  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000, // Quick timeout to prevent stalling if local mongod is not started
    });
    isMongoConnected = true;
    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}`);
  } catch (error) {
    isMongoConnected = false;
    console.warn(`[MongoDB] Notice: Could not connect to MongoDB (${error.message}).`);
    console.warn(`[MongoDB] Running with in-memory persistence fallback for contact inquiries. To connect to MongoDB, ensure MongoDB service is active or provide a MONGO_URI in server/.env.`);
  }
};

export const getDBStatus = () => ({
  connected: isMongoConnected,
  type: isMongoConnected ? 'MongoDB' : 'In-Memory Fallback Store',
  timestamp: new Date().toISOString()
});
