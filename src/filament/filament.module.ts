import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandFilament } from '../commons/models/BrandFilament.entity';
import { TypeMaterialService } from './service/type-material/type-material.service';
import { BrandFilamentService } from './service/brand-filament/brand-filament.service';
import { BrandFilamentController } from './controller/brand-filament/brand-filament.controller';
import { TypeMaterialController } from './controller/type-material/type-material.controller';
import { TypeMaterial } from '../commons/models/TypeMaterial.entity';
import { Color } from '../commons/models/Color.entity';
import { Filament } from '../commons/models/Filament.entity';
import { ColorService } from './service/color/color.service';
import { ColorController } from './controller/color/color.controller';
import { StockFilament } from '../commons/models/StockFilament.entity';
import { FilamentService } from './service/filament/filament.service';
import { FilamentController } from './controller/filament/filament.controller';

@Module({
  imports:[TypeOrmModule.forFeature([BrandFilament,TypeMaterial,Color, Filament , StockFilament])],
  controllers: [FilamentController, BrandFilamentController, TypeMaterialController, ColorController],
  providers: [FilamentService, TypeMaterialService, BrandFilamentService , ColorService],
  exports:[FilamentService, TypeMaterialService, BrandFilamentService , ColorService]
})
export class FilamentModule {}
