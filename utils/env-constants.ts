export const DATABASE_CREDENTIALS = {
  HOST: process.env.DATABASE_HOST || 'localhost',
  PASSWORD: process.env.DATABASE_PASSWORD || 'insert_password',
  USERNAME: process.env.DATABASE_USERNAME || 'root',
  NAME: process.env.DATABASE_NAME || 'user-management-system',
  PORT: process.env.DATABASE_PORT || 3306,
};
