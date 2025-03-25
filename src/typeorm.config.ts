
import { DataSource } from 'typeorm';
import { entities } from './commons/models';
export const AppDataSource = new DataSource({
    type: (process.env.DB_TYPE ?? 'mysql') as 'mysql',
    host: process.env.DB_HOST,
    port: (process.env.DB_TYPE ?? 3306) as number,
    username:process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    url:process.env.JAWSDB_URL,
    entities: entities,
    synchronize: true,
    logging: true,
    migrations: ['./database/migrations/*.ts'],
    migrationsRun: true, //
});