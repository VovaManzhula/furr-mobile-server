import { Test, TestingModule } from '@nestjs/testing';
import { PetClinicsService } from './pet-clinics.service';

describe('PetClinicsService', () => {
  let service: PetClinicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetClinicsService],
    }).compile();

    service = module.get<PetClinicsService>(PetClinicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
