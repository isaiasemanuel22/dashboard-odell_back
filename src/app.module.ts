import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot(),
  ]
})
export class AppModule{
  constructor(private readonly data:DataSource){
    console.log("hola");
  }
}