import { Module } from '@nestjs/common';
import { ConfigController } from './controller/config.controller';
import { ConfigService } from './service/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from '../commons/models/config.entity';
import { FilamentModule } from '../filament/filament.module';


@Module({
  imports: [TypeOrmModule.forFeature([Config]),FilamentModule],
  controllers: [ConfigController],
  providers: [ConfigService],
  exports:[ConfigService]
})
export class ConfigGeneralModule {}
