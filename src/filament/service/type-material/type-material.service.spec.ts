import { Test, TestingModule } from '@nestjs/testing';
import { TypeMaterialService } from './type-material.service';

describe('TypeMaterialService', () => {
  let service: TypeMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeMaterialService],
    }).compile();

    service = module.get<TypeMaterialService>(TypeMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
