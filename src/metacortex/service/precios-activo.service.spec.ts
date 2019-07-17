import { Test, TestingModule } from '@nestjs/testing';
import { PreciosActivoService } from './precios-activo.service';

describe('PreciosActivoService', () => {
  let service: PreciosActivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreciosActivoService],
    }).compile();

    service = module.get<PreciosActivoService>(PreciosActivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
