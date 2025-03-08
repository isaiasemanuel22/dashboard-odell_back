import { Test, TestingModule } from '@nestjs/testing';
import { BrandFilamentController } from './brand-filament.controller';

describe('BrandFilamentController', () => {
  let controller: BrandFilamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandFilamentController],
    }).compile();

    controller = module.get<BrandFilamentController>(BrandFilamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
