import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Config } from '../../commons/models/config.entity';

@Injectable()
export class ConfigService {

  constructor(
    @InjectRepository(Config)
    private readonly configRepository: Repository<Config>,
  ) {}

  async findAll(): Promise<Config[]> {
    return await this.configRepository.find();
  }

  async findOne(id: string): Promise<Config> {
    return await this.configRepository.findOne({ where: { id } });
  }

  async create(configData: Partial<Config>): Promise<Config> {
    const config = this.configRepository.create(configData);
    return await this.configRepository.save(config);
  }

  async update(id: string, configData: Partial<Config>): Promise<Config> {
    await this.configRepository.update(id, configData);
    return this.findOne(id);
  }

  async findAllTypes(): Promise<string[]> {
    const types = await this.configRepository
      .createQueryBuilder('config')
      .select('DISTINCT config.type', 'type') // Selecciona solo los valores únicos de "type"
      .getRawMany();

    return types.map((t) => t.type);
  }
}
