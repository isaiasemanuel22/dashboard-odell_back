import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Filament } from '../../../commons/models/Filament.entity';
import { Repository } from 'typeorm';
import { CreateFilamentDto } from 'src/commons/models/interfaces/createFilamentDTO';
import { BrandFilamentService } from '../brand-filament/brand-filament.service';
import { ColorService } from '../color/color.service';
import { TypeMaterialService } from '../type-material/type-material.service';
import { FilamentStockService } from '../stock-filament/stock-filament.service';

@Injectable()
export class FilamentService {
  constructor(
    @InjectRepository(Filament)
    private readonly filamentRepository: Repository<Filament>,
    private readonly brandService:BrandFilamentService,
    private readonly colorService:ColorService,
    private readonly typeMaterialService:TypeMaterialService,
    private readonly stockService:FilamentStockService
  ) {}


  async findAll(): Promise<Filament[]> {
    return this.filamentRepository.find();
  }


  async findOne(id: string): Promise<Filament> {
    return this.filamentRepository.findOne({ where: { id } });
  }


  async create(createFilamentDto: CreateFilamentDto): Promise<Filament> {

    const brand = await this.brandService.findOne(createFilamentDto.brandFilament)
    const typeMaterial = await this.typeMaterialService.findOneOnly(createFilamentDto.typeMaterial);
    const color = await this.colorService.findOne(createFilamentDto.color);
    const filamentSave={
      price: createFilamentDto.price,
      kgMaterial: createFilamentDto.kgMaterial,
      brandFilament: brand,
      typeMaterial: typeMaterial,
    } 
    
    const filament = this.filamentRepository.create(filamentSave);
    const filamentSaved = await this.filamentRepository.save(filament);
    console.log(filamentSaved);
    const stock={
      filament: filamentSaved,
      color: color,
      cant: createFilamentDto.cant,
      id:undefined
    } 

    this.stockService.createWithObjs(stock)

    return filamentSaved;
  }


  async update(id: string, updateFilamentDto: Filament): Promise<Filament> {
    await this.filamentRepository.update(id, updateFilamentDto);
    return this.findOne(id);
  }


  async remove(id: string): Promise<void> {
    await this.filamentRepository.delete(id);
  }
}
