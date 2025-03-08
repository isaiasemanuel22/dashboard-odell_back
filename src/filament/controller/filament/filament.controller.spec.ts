import { Test, TestingModule } from '@nestjs/testing';
import { FilamentController } from './filament.controller';

describe('FilamentController', () => {
  let controller: FilamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilamentController],
    }).compile();

    controller = module.get<FilamentController>(FilamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
