import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { ProductsOrmService } from '../services/products.orm.service';

import { Product } from '../../commons/models/Product.entity';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService:ProductsOrmService){}

    @Post()
    create(@Body() product: Product) {
      return this.productService.create(product);
    }
  
    @Get()
    findAll() {
      return this.productService.findAll();
    }

    @Get('supplements')
    findSupplement() {
      return this.productService.findAllSuplement().then((response)=> {
        return response;
      });
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.productService.remove(id);
    }



}
