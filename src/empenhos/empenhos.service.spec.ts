import { Test, TestingModule } from '@nestjs/testing';
import { EmpenhosService } from './empenhos.service';

describe('EmpenhosService', () => {
  let service: EmpenhosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpenhosService],
    }).compile();

    service = module.get<EmpenhosService>(EmpenhosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
