import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource, DataSourceOptions, LoggerOptions } from 'typeorm';

const dotenv_path = path.resolve(process.cwd(), `.env`);
dotenv.config({ path: dotenv_path });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: process.env.TYPEORM_LOGGING as LoggerOptions,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [],
  synchronize: true,
  migrations: [process.env.TYPEORM_MIGRATIONS_DIR],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
