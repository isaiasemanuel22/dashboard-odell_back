import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Filament } from '../../../commons/models/Filament.entity';
import { FilamentService } from '../../../filament/service/filament/filament.service';
import { CreateFilamentDto } from 'src/commons/models/interfaces/createFilamentDTO';

@Controller('filament')
export class FilamentController {
  constructor(
    private readonly filamentService: FilamentService) {}

  // Obtener todos los filamentos
  @Get()
  async findAll(): Promise<Filament[]> {
    let filaments = await this.filamentService.findAll();
    return filaments
  }

  // Obtener un filamento por su ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Filament> {
    return this.filamentService.findOne(id);
  }

  // Crear un nuevo filamento
  @Post()
  async create(@Body() createFilamentDto: CreateFilamentDto): Promise<Filament> {
    return this.filamentService.create(createFilamentDto);
  }

  // Actualizar un filamento existente
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFilamentDto: CreateFilamentDto,
  ): Promise<Filament> {

    console.log(id);
    return this.filamentService.update(id, updateFilamentDto);
  }

  // Eliminar un filamento
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.filamentService.remove(id);
  }
}