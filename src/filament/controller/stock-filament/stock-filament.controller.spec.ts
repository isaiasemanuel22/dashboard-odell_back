import { Test, TestingModule } from '@nestjs/testing';
import { StockFilamentController } from './stock-filament.controller';

describe('StockFilamentController', () => {
  let controller: StockFilamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockFilamentController],
    }).compile();

    controller = module.get<StockFilamentController>(StockFilamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
