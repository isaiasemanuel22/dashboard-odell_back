import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplement } from 'src/commons/models/Supplement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplementsOrmService {

    constructor(
        @InjectRepository(Supplement)
        private readonly supplementRepository: Repository<Supplement>,
      ) {}
    
      // Crear un suplemento
      async create(supplementData: Partial<Supplement>): Promise<Supplement> {
        const supplement = this.supplementRepository.create(supplementData);
        return this.supplementRepository.save(supplement);
      }
    
      // Obtener todos los suplementos
      async findAll(): Promise<Supplement[]> {
        return this.supplementRepository.find();
      }
    
      // Obtener un suplemento por su ID
      async findOne(id: string): Promise<Supplement> {
        return this.supplementRepository.findOneBy({id});
      }
    
      // Actualizar un suplemento
      async update(id: string, supplementData: Partial<Supplement>): Promise<Supplement> {
        const supplement = await this.supplementRepository.findOneBy({id});
        if (!supplement) {
          throw new Error('Suplemento no encontrado');
        }
    
        Object.assign(supplement, supplementData);
        return this.supplementRepository.save(supplement);
      }
    
      // Eliminar un suplemento
      async remove(id: string): Promise<void> {
        await this.supplementRepository.delete(id);
      }
}
