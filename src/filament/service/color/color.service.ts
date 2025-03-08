import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from '../../../commons/models/Color.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}

  findAll(): Promise<Color[]> {
    return this.colorRepository.find();
  }

  findOne(id: string): Promise<Color> {
    return this.colorRepository.findOne({ where: { id } });
  }

  create(color: Partial<Color>): Promise<Color> {
    const newColor = this.colorRepository.create(color);
    return this.colorRepository.save(newColor);
  }

  async update(id: string, updateData: Partial<Color>): Promise<Color> {
    await this.colorRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.colorRepository.delete(id);
  }
}