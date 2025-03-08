import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

import { CreateBillDTO } from '../../commons/models/interfaces/Bill.dto';
import { BillService } from '../service/bills.service';

@Controller('bills')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post()
  create(@Body() createBillDto: CreateBillDTO) {
    return this.billService.create(createBillDto);
  }

  @Get()
  findAll() {
    return this.billService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBillDto: CreateBillDTO ) {
    return this.billService.update(id, updateBillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billService.remove(id);
  }
}