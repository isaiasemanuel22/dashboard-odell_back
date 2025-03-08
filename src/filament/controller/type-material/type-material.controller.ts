import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TypeMaterial } from 'src/commons/models/TypeMaterial.entity';
import { TypeMaterialService } from 'src/filament/service/type-material/type-material.service';


@Controller('type-material')
export class TypeMaterialController {
  constructor(private readonly typeMaterialService: TypeMaterialService) {}

  @Get()
  findAll(): Promise<TypeMaterial[]> {
    return this.typeMaterialService.findAll();
  }

  @Get('names')
  findAllNames(): Promise<TypeMaterial[]> {
    return this.typeMaterialService.findAllNames();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TypeMaterial> {
    return this.typeMaterialService.findOne(id);
  }

  @Post()
  create(@Body() typeMaterial: Partial<TypeMaterial>): Promise<TypeMaterial> {
    return this.typeMaterialService.create(typeMaterial);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<TypeMaterial>): Promise<TypeMaterial> {
    return this.typeMaterialService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.typeMaterialService.remove(id);
  }
}