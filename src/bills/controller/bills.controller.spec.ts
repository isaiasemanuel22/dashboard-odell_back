import { Test, TestingModule } from '@nestjs/testing';
import { BillController } from './bills.controller';

describe('BillController', () => {
  let controller: BillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillController],
    }).compile();

    controller = module.get<BillController>(BillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
