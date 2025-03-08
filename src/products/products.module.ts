import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from '../../src/commons/models/Product.entity';
import { ProductInfo } from '../../src/commons/models/ProductsInfo.entity';

import { ProductsController } from './controllers/products.controller';
import { ProductsOrmService } from './services/products.orm.service';

import { ColorsService } from './services/colors/colors.service';
import { ProductsInfoOrmService } from './services/products-info.orm/products-info.orm.service';
import { BillModule } from '../../src/bills/bill.module';
import { FilamentModule } from '../../src/filament/filament.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product,ProductInfo]), BillModule,FilamentModule],
  providers: [ProductsOrmService, ProductsInfoOrmService, ColorsService],
  controllers: [ProductsController], // Agregar el controlador aquí
  exports: [ProductsOrmService,ProductsInfoOrmService, ColorsService],

})
export class ProductsModule {}
