import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { ConfigGeneralModule } from './config/config.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixedExpenseModule } from './fixedExpense/fixedExpense.module';
import { Product } from './commons/models/Product.entity';
import { ProductInfo } from './commons/models/ProductsInfo.entity';
import { Bill } from './commons/models/Bill.entity';
import { TypeMaterial } from './commons/models/TypeMaterial.entity';
import { BrandFilament } from './commons/models/BrandFilament.entity';
import { Color } from './commons/models/Color.entity';
import { Filament } from './commons/models/Filament.entity';
import { StockFilament } from './commons/models/StockFilament.entity';
import { FixedExpense } from './commons/models/fixedExpense.entity';
import { Config } from './commons/models/config.entity';
@Module({
  controllers:[AppController],
  imports: [
    ProductsModule,
    FixedExpenseModule,
    ConfigGeneralModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: (process.env.DB_TYPE ?? 'mysql') as 'mysql',
        host: process.env.DB_HOST,
        port: (process.env.DB_TYPE ?? 3306) as number,
        username:process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        url:process.env.JAWSDB_URL,
        entities: [Bill,
        BrandFilament,
        Color,
        Filament,
        Product,
        ProductInfo,
        StockFilament,
        TypeMaterial,
        FixedExpense,
        Config],
        synchronize: false,
        logging: true,
        migrations: [__dirname + '/database/migrations/*.ts'],
        migrationsRun: true, //
      }),

    }),
    ConfigModule.forRoot({
      envFilePath:`.env.${process.env.NODE_ENV}` // Asegúrate de que las variables estén disponibles globalmente
    }),
  ],
  providers:[
    AppService
  ]
})
export class AppModule {
  constructor() {
    console.log(process.env)
  }
}
