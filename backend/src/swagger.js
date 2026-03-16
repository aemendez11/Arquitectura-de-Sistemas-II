const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Checklist API',
      version: '1.0.0',
      description: 'REST API for managing tasks',
    },
    servers: [
      {
        url: process.env.BACKEND_URL || 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

module.exports = swaggerJsdoc(options);