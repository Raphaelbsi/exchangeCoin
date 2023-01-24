import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/Users';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'app',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: []
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.log('Error during Data Source initialization', err);
  });

export { AppDataSource };
