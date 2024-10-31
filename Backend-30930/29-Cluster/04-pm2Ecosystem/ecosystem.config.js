/**
 * https://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = {
  apps: [
    {
      script: 'dist/index.js',
      watch: true,
      name: 'BokitaTheBiggest',
      autorestart: true,
      instances: 'max',
      // instances: 3,
    },
  ],
};
