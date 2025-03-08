import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BrandFilament } from 'src/commons/models/BrandFilament.entity';
import { BrandFilamentService } from 'src/filament/service/brand-filament/brand-filament.service';

@Controller('brand-filament')
export class BrandFilamentController {
  constructor(private readonly brandFilamentService: BrandFilamentService) {}

  @Get()
  findAll(): Promise<BrandFilament[]> {
    return this.brandFilamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BrandFilament> {
    return this.brandFilamentService.findOne(id);
  }

  @Post()
  create(@Body() brandFilament: Partial<BrandFilament>): Promise<BrandFilament> {
    return this.brandFilamentService.create(brandFilament);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<BrandFilament>): Promise<BrandFilament> {
    return this.brandFilamentService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.brandFilamentService.remove(id);
  }
}