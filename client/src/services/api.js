import { portfolioData } from '../data/portfolioData';

const API_BASE = '/api';

/**
 * Fetch portfolio data from Express server with graceful fallback to local data
 */
export async function getPortfolioData() {
  try {
    const res = await fetch(`${API_BASE}/portfolio/data`, {
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.success && json.data) {
      return { data: json.data, isLive: true };
    }
  } catch (err) {
    console.info('[Client API] Backend unreachable or running standalone; using local portfolioData.');
  }
  return { data: portfolioData, isLive: false };
}

/**
 * Send contact inquiry to Express backend
 */
export async function sendContactMessage(formData) {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const json = await res.json();
    return {
      ok: res.ok,
      status: res.status,
      data: json
    };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      data: {
        success: false,
        message: 'Could not connect to the backend server. You can also send an email directly using the button below.',
        error: err.message
      }
    };
  }
}

/**
 * Check if resume.pdf is uploaded and available
 */
export async function checkResumeStatus() {
  try {
    const res = await fetch(`${API_BASE}/portfolio/resume-status`);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    // ignore
  }
  return { isAvailable: false, downloadUrl: null };
}
