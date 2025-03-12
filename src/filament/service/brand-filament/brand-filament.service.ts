import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandFilament } from '../../../commons/models/BrandFilament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandFilamentService {
  constructor(
    @InjectRepository(BrandFilament)
    private readonly brandFilamentRepository: Repository<BrandFilament>,
  ) {}

  findAll(): Promise<BrandFilament[]> {
    return this.brandFilamentRepository.find();
  }

  findOne(id: string): Promise<BrandFilament> {
    return this.brandFilamentRepository.findOne({ where: { id } }).then((response)=> {
      return response;
    });
  }

  create(brandFilament: Partial<BrandFilament>): Promise<BrandFilament> {
    const newBrand = this.brandFilamentRepository.create(brandFilament);
    return this.brandFilamentRepository.save(newBrand);
  }

  async update(id: string, updateData: Partial<BrandFilament>): Promise<BrandFilament> {
    await this.brandFilamentRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.brandFilamentRepository.delete(id);
  }
}