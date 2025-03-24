import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Config } from '../../commons/models/config.entity';
import { ConfigService } from '../service/config.service';

@Controller('config')
export class ConfigController {
    constructor(private readonly configService: ConfigService) {}

  @Get()
  async findAll(): Promise<Config[]> {
    console.log('-----------------llego---------------------------------');
    return this.configService.findAll();
  }

    
  @Get('types')
  async getTypes(): Promise<string[]> {
    return this.configService.findAllTypes();
  }


  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Config> {
    return this.configService.findOne(id);
  }

  @Post()
  async create(@Body() configData: Partial<Config>): Promise<Config> {
    console.log(configData)
    return this.configService.create(configData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() configData: Partial<Config>,
  ): Promise<Config> {
    return this.configService.update(id, configData);
  }




}
