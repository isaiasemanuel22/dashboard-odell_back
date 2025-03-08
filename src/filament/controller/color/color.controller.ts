import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Color } from 'src/commons/models/Color.entity';
import { ColorService } from 'src/filament/service/color/color.service';


@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  findAll(): Promise<Color[]> {
    return this.colorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Color> {
    return this.colorService.findOne(id);
  }

  @Post()
  create(@Body() color: Partial<Color>): Promise<Color> {
    return this.colorService.create(color);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Color>): Promise<Color> {
    return this.colorService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.colorService.remove(id);
  }
}