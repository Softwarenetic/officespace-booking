import * as process from 'process';

export default () => ({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  DB_HOST: process.env.DB_HOST || 'http://localhost',
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  ORIGIN: process.env.ORIGIN || 'http://localhost:4000',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE_TIME: parseInt(process.env.JWT_EXPIRE_TIME, 10) || 2592000000,
  BACKEND_PORT: parseInt(process.env.BACKEND_PORT, 10) || 4000,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
  AWS_REGION: process.env.AWS_REGION,
});
