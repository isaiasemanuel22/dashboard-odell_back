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

    let filaments = await this.filamentRepository.find({relations:['brandFilament','typeMaterial','color']});
    return filaments
  }


  async findOne(id: string): Promise<Filament> {
    return this.filamentRepository.findOne({ where: { id } , relations:['brandFilament','typeMaterial','color'] });
  }


  async create(createFilamentDto: CreateFilamentDto): Promise<Filament> {

    const brand = await this.brandService.findOne(createFilamentDto.brandFilament)
    const typeMaterial = await this.typeMaterialService.findOneOnly(createFilamentDto.typeMaterial);
    const color = await this.colorService.findOne(createFilamentDto.color);
    const filamentSave:Filament={
      price: createFilamentDto.price,
      kgMaterial: createFilamentDto.kgMaterial,
      brandFilament: brand,
      typeMaterial: typeMaterial,
      color: color,
      stock: createFilamentDto.stock,
      id:undefined
    } 
  
    const filament = this.filamentRepository.create(filamentSave);
    const filamentSaved = await this.filamentRepository.save(filament);
    this.typeMaterialService.calcAveragePriceTypeMaterial(typeMaterial.id);

    return filamentSaved;
  }


  async update(id: string, updateFilamentDto: CreateFilamentDto): Promise<Filament> {
    const brand = await this.brandService.findOne(updateFilamentDto.brandFilament)
    const typeMaterial = await this.typeMaterialService.findOneOnly(updateFilamentDto.typeMaterial);
    const color = await this.colorService.findOne(updateFilamentDto.color);
    const filamentSave:Filament={
      price: updateFilamentDto.price,
      kgMaterial: updateFilamentDto.kgMaterial,
      brandFilament: brand,
      typeMaterial: typeMaterial,
      color: color,
      stock: updateFilamentDto.stock,
      id:id
    } 
    await this.filamentRepository.update(id, filamentSave); 
   const filamentSaved =  await this.findOne(filamentSave.id);
   this.typeMaterialService.calcAveragePriceTypeMaterial(typeMaterial.id);
    return filamentSaved;
  }


  async remove(id: string): Promise<void> {
    const filament = await this.filamentRepository.findOne({where:{id} , relations:['typeMaterial']})
    await this.filamentRepository.delete(id);
    return await this.typeMaterialService.calcAveragePriceTypeMaterial(filament.typeMaterial.id);
  }
}
