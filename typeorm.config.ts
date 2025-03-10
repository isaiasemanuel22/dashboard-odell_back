
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string, 10),
    username: 'root',
    password: '',
    database: 'odell',
    entities: [__dirname +'/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true, // Habilita los logs
    migrations: [__dirname + '/database/migrations/*.ts'],
});