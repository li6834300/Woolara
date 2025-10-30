// Serverless function to proxy Ulule API and avoid CORS issues
// This can be deployed on Vercel, Netlify, or any serverless platform
//
// For Vercel: Place in /api/ directory
// For Netlify: Place in /netlify/functions/ directory

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Fetch from Ulule API
    const response = await fetch('https://api.ulule.com/v1/projects/219469');
    const data = await response.json();

    // Return the data
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching Ulule data:', error);
    res.status(500).json({ error: 'Failed to fetch campaign data' });
  }
};
