import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StockFilament } from '../../../commons/models/StockFilament.entity';
import { FilamentStockService } from '../../../filament/service/stock-filament/stock-filament.service';


@Controller('filament-stock')
export class FilamentStockController {
  constructor(private readonly filamentStockService: FilamentStockService) {}

  @Post()
  async create(@Body() data: StockFilament): Promise<StockFilament> {
    return this.filamentStockService.create(data);
  }

  @Get()
  async findAll(): Promise<StockFilament[]> {
    return this.filamentStockService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockFilament> {
    return this.filamentStockService.findOne(id);
  }
}