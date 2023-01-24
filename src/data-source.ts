import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/Users';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'root',
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
