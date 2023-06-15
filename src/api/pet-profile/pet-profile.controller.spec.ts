import { Test, TestingModule } from '@nestjs/testing';
import { PetProfileController } from './pet-profile.controller';

describe('PetProfileController', () => {
  let controller: PetProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetProfileController],
    }).compile();

    controller = module.get<PetProfileController>(PetProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
