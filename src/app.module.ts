import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { ConfigGeneralModule } from './config/config.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixedExpenseModule } from './fixedExpense/fixedExpense.module';
@Module({
  controllers:[AppController],
  imports: [
    ProductsModule,
    FixedExpenseModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: (process.env.DB_TYPE ?? 'mysql') as 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '',
        database: 'odell',
      //  url:process.env.JAWSDB_URL,
        entities: [__dirname +'/**/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
        migrations: [__dirname + '/database/migrations/*.ts'],
        migrationsRun: true, //
      }),

    }),
    ConfigModule.forRoot({
      isGlobal: true,
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
    console.log(__dirname)
  }
}
