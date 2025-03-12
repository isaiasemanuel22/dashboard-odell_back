import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { ConfigGeneralModule } from './config/config.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixedExpenseModule } from './fixedExpense/fixedExpense.module';
import { entities } from './commons/models';
@Module({
  controllers:[AppController],
  imports: [
    ProductsModule,
    FixedExpenseModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: (process.env.DB_TYPE ?? 'mysql') as 'mysql',
        host: process.env.DB_HOST,
        port: (process.env.DB_TYPE ?? 3306) as number,
        username:process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        url:process.env.JAWSDB_URL,
        entities: entities,
        synchronize: false,
        logging: true,
        migrations: [__dirname + '/database/migrations/*.ts'],
        migrationsRun: true, //
      }),

    }),
    ConfigModule.forRoot({
      envFilePath:`.env.${process.env.NODE_ENV}` // Asegúrate de que las variables estén disponibles globalmente
    }),
    ConfigGeneralModule,

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
