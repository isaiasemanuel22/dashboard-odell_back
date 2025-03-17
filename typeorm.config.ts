
import { DataSource } from 'typeorm';
import { entities } from './dist/commons/models';
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string, 10),
    username: 'root',
    password: '',
    database: 'odell',
    entities: entities,
    synchronize: false,
    logging: true,
    migrations: [__dirname + '/src/database/migrations/*.ts'],
    migrationsRun: true, //
});