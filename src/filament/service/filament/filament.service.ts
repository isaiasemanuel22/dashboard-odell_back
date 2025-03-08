import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Filament } from 'src/commons/models/Filament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilamentService {
  constructor(
    @InjectRepository(Filament)
    private readonly filamentRepository: Repository<Filament>,
  ) {}


  async findAll(): Promise<Filament[]> {
    return this.filamentRepository.find();
  }


  async findOne(id: string): Promise<Filament> {
    return this.filamentRepository.findOne({ where: { id } });
  }


  async create(createFilamentDto: Filament): Promise<Filament> {
    const filament = this.filamentRepository.create(createFilamentDto);
    return this.filamentRepository.save(filament);
  }


  async update(id: string, updateFilamentDto: Filament): Promise<Filament> {
    await this.filamentRepository.update(id, updateFilamentDto);
    return this.findOne(id);
  }


  async remove(id: string): Promise<void> {
    await this.filamentRepository.delete(id);
  }
}
