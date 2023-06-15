import { Test, TestingModule } from '@nestjs/testing';
import { PetClinicsController } from './pet-clinics.controller';

describe('PetClinicsController', () => {
  let controller: PetClinicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetClinicsController],
    }).compile();

    controller = module.get<PetClinicsController>(PetClinicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
