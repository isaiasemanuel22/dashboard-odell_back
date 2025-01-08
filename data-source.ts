import { Bill } from 'src/commons/models/Bill.entity';
import { Color } from 'src/commons/models/Color.entity';
import { Product } from 'src/commons/models/Product.entity';
import { ProductInfo } from 'src/commons/models/ProductsInfo.entity';
import { Supplement } from 'src/commons/models/Supplement.entity';
import { TypeMaterial } from 'src/commons/models/TypeMaterial.entity';
import { FixedExpense } from 'src/fixedExpense/models/fixedExpense.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Odell',
    entities: [FixedExpense,Bill,Color,Product,ProductInfo,Supplement,TypeMaterial],
    synchronize: false,
    logging: true, // Habilita los logs
    migrations: ['./src/migrations/*.ts'],

    
});