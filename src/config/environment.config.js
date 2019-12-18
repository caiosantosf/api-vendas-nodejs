const {
  NODE_ENV = 'development',
  DEBUG = true,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_NAME,
  DB_PASSWORD,
  JWT_EXPIRES_IN = '24h',
  JWT_SECRET = 'stubJWT',
  PORT = 3000
} = process.env;

export default {
  ENV: NODE_ENV,
  DEBUG: JSON.parse(DEBUG),
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_NAME,
  DB_PASSWORD,
  JWT_EXPIRES_IN,
  JWT_SECRET,
  PORT
}
