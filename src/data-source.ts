import { DataSource } from 'typeorm';
import { User } from './user/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'ep-flat-fog-adwk0pl3-pooler.c-2.us-east-1.aws.neon.tech',
  port: 5432,
  username: 'neondb_owner',
  password: 'npg_TCAcyIH3J6lm',
  database: 'am4',
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
