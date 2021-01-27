const PROXY_CONFIG = {
    '/api': {
        'target': process.env.WEB_API_URL || 'https://localhost:44343/api',
        'secure': false
    }
};

module.exports = PROXY_CONFIG;
