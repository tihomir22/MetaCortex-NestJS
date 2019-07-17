import { Test, TestingModule } from '@nestjs/testing';
import { RealTimeDataController } from './real-time-data.controller';

describe('RealTimeData Controller', () => {
  let controller: RealTimeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealTimeDataController],
    }).compile();

    controller = module.get<RealTimeDataController>(RealTimeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
