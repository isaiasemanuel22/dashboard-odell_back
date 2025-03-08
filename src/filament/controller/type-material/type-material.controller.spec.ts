import { Test, TestingModule } from '@nestjs/testing';
import { TypeMaterialController } from './type-material.controller';

describe('TypeMaterialController', () => {
  let controller: TypeMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeMaterialController],
    }).compile();

    controller = module.get<TypeMaterialController>(TypeMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
