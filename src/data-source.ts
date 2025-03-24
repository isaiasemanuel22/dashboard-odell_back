
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: 'root',
    database: process.env.DB_NAME,
    entities: [__dirname +'/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true, // Habilita los logs
    migrations: [__dirname + '/database/migrations/*.ts'],
});