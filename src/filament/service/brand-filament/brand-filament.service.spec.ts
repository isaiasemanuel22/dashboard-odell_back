import { Test, TestingModule } from '@nestjs/testing';
import { BrandFilamentService } from './brand-filament.service';

describe('BrandFilamentService', () => {
  let service: BrandFilamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandFilamentService],
    }).compile();

    service = module.get<BrandFilamentService>(BrandFilamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
