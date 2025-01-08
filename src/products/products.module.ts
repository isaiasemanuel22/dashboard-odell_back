import { Module } from '@nestjs/common';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../commons/models/Product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.orm.service';
import { FixedExpenseModule } from 'src/fixedExpense/fixedExpense.module';
import { Supplement } from 'src/commons/models/Supplement.entity';
import { SupplementsOrmService } from './services/supplements.orm/supplements.orm.service';
import { ProductInfo } from 'src/commons/models/ProductsInfo.entity';
import { ProductsInfoOrmService } from './services/products-info.orm/products-info.orm.service';

@Module({
    imports:[
    TypeOrmModule.forFeature([Product,Supplement, ProductInfo])
    ,FixedExpenseModule],
    controllers:[ProductsController],
    providers: [ProductsService , SupplementsOrmService, ProductsInfoOrmService],
    exports:[TypeOrmModule ,ProductsService,ProductsInfoOrmService]
})
export class ProductsModule {}
