import { Bill } from './src/commons/models/Bill.entity';
import { Color } from './src/commons/models/Color.entity';
import { Product } from './src/commons/models/Product.entity';
import { ProductInfo } from './src/commons/models/ProductsInfo.entity';
import { TypeMaterial } from './src/commons/models/TypeMaterial.entity';
import { FixedExpense } from './src/fixedExpense/models/fixedExpense.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [FixedExpense,Bill,Color,Product,ProductInfo,TypeMaterial],
    synchronize: false,
    logging: true, // Habilita los logs
    migrations: ['./src/migrations/*.ts'],

    
});