import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDBStatus } from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedDataPath = path.join(__dirname, '../data/seedData.json');

let cachedPortfolioData = null;

const loadPortfolioData = () => {
  try {
    const raw = fs.readFileSync(seedDataPath, 'utf8');
    cachedPortfolioData = JSON.parse(raw);
    return cachedPortfolioData;
  } catch (err) {
    console.error('[Portfolio] Error reading seedData.json:', err.message);
    return null;
  }
};

export const getPortfolioData = (req, res) => {
  const data = cachedPortfolioData || loadPortfolioData();
  if (!data) {
    return res.status(500).json({ success: false, message: 'Could not load portfolio data' });
  }

  // Check if real resume.pdf exists in client/public
  const publicResumePath = path.join(__dirname, '../../../client/public/resume.pdf');
  const hasResume = fs.existsSync(publicResumePath);

  const enrichedData = {
    ...data,
    profile: {
      ...data.profile,
      resume: {
        ...data.profile.resume,
        isAvailable: hasResume,
        filePath: hasResume ? '/resume.pdf' : null
      }
    },
    meta: {
      serverTime: new Date().toISOString(),
      database: getDBStatus()
    }
  };

  return res.json({ success: true, data: enrichedData });
};

export const getHealthStatus = (req, res) => {
  res.json({
    status: 'ok',
    service: 'Sandesh Salavi Portfolio MERN Backend',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: getDBStatus()
  });
};

export const getResumeStatus = (req, res) => {
  const publicResumePath = path.join(__dirname, '../../../client/public/resume.pdf');
  const hasResume = fs.existsSync(publicResumePath);
  res.json({
    isAvailable: hasResume,
    downloadUrl: hasResume ? '/resume.pdf' : null,
    message: hasResume
      ? 'Resume is verified and available for download.'
      : 'Resume placeholder: Please upload your resume.pdf into the client/public directory.'
  });
};
