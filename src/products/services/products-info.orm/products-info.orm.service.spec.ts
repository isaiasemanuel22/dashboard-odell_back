import { Test, TestingModule } from '@nestjs/testing';
import { ProductsInfoOrmService } from './products-info.orm.service';

describe('ProductsInfoOrmService', () => {
  let service: ProductsInfoOrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsInfoOrmService],
    }).compile();

    service = module.get<ProductsInfoOrmService>(ProductsInfoOrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
