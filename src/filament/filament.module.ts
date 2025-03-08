import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandFilament } from 'src/commons/models/BrandFilament.entity';
import { TypeMaterialService } from './service/type-material/type-material.service';
import { BrandFilamentService } from './service/brand-filament/brand-filament.service';
import { BrandFilamentController } from './controller/brand-filament/brand-filament.controller';
import { TypeMaterialController } from './controller/type-material/type-material.controller';
import { TypeMaterial } from 'src/commons/models/TypeMaterial.entity';
import { Color } from 'src/commons/models/Color.entity';
import { Filament } from 'src/commons/models/Filament.entity';
import { ColorService } from './service/color/color.service';
import { ColorController } from './controller/color/color.controller';
import { StockFilament } from 'src/commons/models/StockFilament.entity';
import { FilamentService } from './service/filament/filament.service';
import { FilamentController } from './controller/filament/filament.controller';

@Module({
  imports:[TypeOrmModule.forFeature([BrandFilament,TypeMaterial,Color, Filament , StockFilament])],
  controllers: [FilamentController, BrandFilamentController, TypeMaterialController, ColorController],
  providers: [FilamentService, TypeMaterialService, BrandFilamentService , ColorService],
  exports:[FilamentService, TypeMaterialService, BrandFilamentService , ColorService]
})
export class FilamentModule {}
