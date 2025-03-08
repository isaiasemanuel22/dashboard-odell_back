import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { FixedExpenseModule } from './fixedExpense/fixedExpense.module';;
import { BillModule } from './bills/bill.module';
import { ConfigGeneralModule } from './config/config.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ProductsModule,
    FixedExpenseModule,
    BillModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: (process.env.DB_TYPE ?? 'mysql') as 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME,
        entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: false,
      }),

    }),
    ConfigModule.forRoot({
      isGlobal: true, // Asegúrate de que las variables estén disponibles globalmente
    }),
    ConfigGeneralModule,
  ],
})
export class AppModule {
  constructor() {}
}
