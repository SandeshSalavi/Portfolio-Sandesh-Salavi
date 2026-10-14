import express from 'express';
import { getPortfolioData, getHealthStatus, getResumeStatus } from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/data', getPortfolioData);
router.get('/health', getHealthStatus);
router.get('/resume-status', getResumeStatus);

export default router;
