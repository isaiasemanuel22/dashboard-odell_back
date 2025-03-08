import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeMaterial } from '../../../commons/models/TypeMaterial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeMaterialService {
  constructor(
    @InjectRepository(TypeMaterial)
    private readonly typeMaterialRepository: Repository<TypeMaterial>,
  ) {}

  findAll(): Promise<TypeMaterial[]> {
    return this.typeMaterialRepository.find({ relations: ['bills', 'colors', 'brandFilament', 'filament'] });
  }

  findAllNames():Promise<TypeMaterial[]>{
    return this.typeMaterialRepository.find({select:['id','name']});
  }

  findOne(id: string): Promise<TypeMaterial> {
    return this.typeMaterialRepository.findOne({ where: { id }, relations: ['bills', 'colors', 'brandFilament', 'filament'] });
  }

  create(typeMaterial: Partial<TypeMaterial>): Promise<TypeMaterial> {
    const newMaterial = this.typeMaterialRepository.create(typeMaterial);
    return this.typeMaterialRepository.save(newMaterial);
  }

  async update(id: string, updateData: Partial<TypeMaterial>): Promise<TypeMaterial> {
    await this.typeMaterialRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.typeMaterialRepository.delete(id);
  }
}