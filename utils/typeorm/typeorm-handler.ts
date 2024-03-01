import { DataSource } from 'typeorm';
import { DATABASE_CREDENTIALS } from '../env-constants';

export const dataSource: DataSource = new DataSource({
  name: 'reach',
  type: 'mysql',
  host: DATABASE_CREDENTIALS.HOST,
  port: Number(DATABASE_CREDENTIALS.PORT),
  username: DATABASE_CREDENTIALS.USERNAME,
  password: DATABASE_CREDENTIALS.PASSWORD,
  database: DATABASE_CREDENTIALS.NAME,
});

export const initialiseDbConnections = async (): Promise<void> => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.error('Error connecting Db', err);
    throw err;
  }
};

export const connectToDatabase = async (): Promise<DataSource> => {
  const dataSourceToInitialise = dataSource;
  try {
    const isInitialized = await dataSourceToInitialise.isInitialized;
    if (!isInitialized) {
      await dataSourceToInitialise.initialize();
    }
    return dataSourceToInitialise;
  } catch (err) {
    console.error('Error during Data Source initialization', err);
    throw err;
  }
};

export const dataQuery = async <T>(query: string, parameters: T[]) => {
  const connection = await connectToDatabase();
  let result;
  try {
    const queryRunner = await connection.createQueryRunner();
    await queryRunner.connect();
    result = await queryRunner.manager.query(query, parameters);
    await queryRunner.release();
  } catch (err) {
    console.error('Error in data query', err);
    throw err;
  }
  return result;
};
