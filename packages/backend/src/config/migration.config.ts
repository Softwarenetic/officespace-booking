import { DataSource } from 'typeorm';
import * as path from 'path';
import TypeormConfig from './typeorm.config';

export default new DataSource({
  database: '',
  driver: undefined,
  location: '',
  region: '',
  resourceArn: '',
  secretArn: '',
  type: undefined,
  ...new TypeormConfig(),
  migrations: [path.join(__dirname, '/../database/migrations/*{.ts,.js}')],
  migrationsTableName: 'custom-name',
});
