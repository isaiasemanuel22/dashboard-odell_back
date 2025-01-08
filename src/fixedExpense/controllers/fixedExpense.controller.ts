import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FixedExpenseService } from '../services/fixedExpense.service';
import { FixedExpense } from '../models/fixedExpense.entity';


@Controller('fixed-expenses')
export class FixedExpenseController {
  constructor(private readonly fixedExpenseService: FixedExpenseService) {}

  @Post()
  create(@Body() fixedExpense: FixedExpense) {
    return this.fixedExpenseService.create(fixedExpense);
  }

  @Get()
  findAll() {
    return this.fixedExpenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fixedExpenseService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() fixedExpense: FixedExpense) {
    return this.fixedExpenseService.update(id, fixedExpense);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fixedExpenseService.remove(id);
  }
}