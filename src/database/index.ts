import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/Category';
import { Specification } from '../modules/cars/entities/Specification';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'banco',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'rentx',
  synchronize: true,
  logging: false,
  entities: [Category, Specification],
  migrations: ['src/database/migrations/*.ts'],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
