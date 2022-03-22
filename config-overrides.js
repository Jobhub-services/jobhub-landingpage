const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@': path.resolve(__dirname, 'src'),
            //react: path.resolve('../staak-frontend/node_modules/react'),
        },
    }
    return config;
};