import { Test, TestingModule } from '@nestjs/testing';
import { SupplementsOrmService } from './supplements.orm.service';

describe('SupplementsOrmService', () => {
  let service: SupplementsOrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplementsOrmService],
    }).compile();

    service = module.get<SupplementsOrmService>(SupplementsOrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
