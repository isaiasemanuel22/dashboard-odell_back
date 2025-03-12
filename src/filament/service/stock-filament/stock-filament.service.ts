import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from 'src/commons/models/Color.entity';
import { Filament } from 'src/commons/models/Filament.entity';
import { StockFilament } from 'src/commons/models/StockFilament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilamentStockService {
    constructor(
      @InjectRepository(StockFilament)
      private readonly filamentStockRepository: Repository<StockFilament>,
      @InjectRepository(Filament)
      private readonly filamentRepository: Repository<Filament>,
      @InjectRepository(Color)
      private readonly colorRepository: Repository<Color>,
    ) {}
  
    async create(data: StockFilament): Promise<StockFilament> {
      const filament = await this.filamentRepository.findOne({ where: { id: data.id } });
      const color = await this.colorRepository.findOne({ where: { id: data.id } });
      
      if (!filament || !color) {
        throw new Error('Filament or Color not found');
      }
  
      const filamentStock = this.filamentStockRepository.create({
        filament,
        color,
        cant: data.cant,
      });
      return this.filamentStockRepository.save(filamentStock);
    }
  
    async findAll(): Promise<StockFilament[]> {
      return this.filamentStockRepository.find({ relations: ['filament', 'color'] });
    }
  
    async findOne(id: string): Promise<StockFilament> {
      return this.filamentStockRepository.findOne({ where: { id }, relations: ['filament', 'color'] });
    }

    async createWithObjs(data: StockFilament): Promise<StockFilament> {
        const filamentStock = this.filamentStockRepository.create(data);
        return this.filamentStockRepository.save(filamentStock);
      }
  }