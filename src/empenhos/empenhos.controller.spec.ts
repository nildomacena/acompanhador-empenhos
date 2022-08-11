import { Test, TestingModule } from '@nestjs/testing';
import { EmpenhosController } from './empenhos.controller';

describe('EmpenhosController', () => {
  let controller: EmpenhosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpenhosController],
    }).compile();

    controller = module.get<EmpenhosController>(EmpenhosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
