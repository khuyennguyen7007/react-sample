// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
  baseApiURL: process.env.WEB_BASE_API_URL || 'http://localhost:4200/api',
  signalRURL: process.env.WEB_SIGNALR_URL || 'https://localhost:44343/streamhub'
};
