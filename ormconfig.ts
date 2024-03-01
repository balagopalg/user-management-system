import { DataSource } from 'typeorm';
import { DATABASE_CREDENTIALS } from './utils/env-constants';
import 'dotenv/config';

export const dataSource: DataSource = new DataSource({
  name: 'user-management-system',
  type: 'mysql',
  host: DATABASE_CREDENTIALS.HOST,
  port: Number(DATABASE_CREDENTIALS.PORT),
  username: DATABASE_CREDENTIALS.USERNAME,
  password: DATABASE_CREDENTIALS.PASSWORD,
  database: DATABASE_CREDENTIALS.NAME,
  migrationsTableName: 'migration_table',
  migrations: ['migrations/*.ts'],
  entities: ['models/*.ts'],
});
