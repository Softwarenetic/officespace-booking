import { DataSource } from 'typeorm';
import User from '../entity/User';
import Workplace from '../entity/Workplace';
import Office from '../entity/Office';
import Reservation from '../entity/Reservation';
import { CreateUser } from '../migration/CreateUser';
import { CreateOffice } from '../migration/CreateOffice';
import { CreateReservation } from '../migration/CreateReservation';
import { CreateWorkplace } from '../migration/CreateWorkplace';

require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [User, Workplace, Office, Reservation],
  subscribers: [],
  migrations: [CreateUser, CreateOffice, CreateReservation, CreateWorkplace],
});
