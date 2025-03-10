import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Filament } from 'src/commons/models/Filament.entity';
import { FilamentService } from 'src/filament/service/filament/filament.service';

@Controller('filament')
export class FilamentController {
  constructor(private readonly filamentService: FilamentService) {}

  // Obtener todos los filamentos
  @Get()
  async findAll(): Promise<Filament[]> {
    return this.filamentService.findAll();
  }

  // Obtener un filamento por su ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Filament> {
    return this.filamentService.findOne(id);
  }

  // Crear un nuevo filamento
  @Post()
  async create(@Body() createFilamentDto: Filament): Promise<Filament> {
    return this.filamentService.create(createFilamentDto);
  }

  // Actualizar un filamento existente
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFilamentDto: Filament,
  ): Promise<Filament> {
    return this.filamentService.update(id, updateFilamentDto);
  }

  // Eliminar un filamento
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.filamentService.remove(id);
  }
}