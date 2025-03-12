import { Test, TestingModule } from '@nestjs/testing';
import { StockFilamentService } from './stock-filament.service';

describe('StockFilamentService', () => {
  let service: StockFilamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockFilamentService],
    }).compile();

    service = module.get<StockFilamentService>(StockFilamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
