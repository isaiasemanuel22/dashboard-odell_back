import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from '../services/products.orm.service';

import { Product } from '../../commons/models/Product.entity';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService:ProductsService){}

    @Post()
    create(@Body() product: Product) {
      return this.productService.create(product);
    }
  
    @Get()
    findAll() {
      return this.productService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() product: Product) {
      return this.productService.update(id, product);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.productService.remove(id);
    }
  
    @Get(':id/calculate-price')
    calculatePrice(@Param('id') id: string) {
      return this.productService.calculateSellingPrice(id);
    }

}
