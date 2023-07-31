import 'reflect-metadata';

import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'banco' || 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'banco',
  synchronize: true,
  logging: false,
  entities: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
