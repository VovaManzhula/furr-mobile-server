import { Module } from '@nestjs/common';
import { PetClinicsService } from './pet-clinics.service';
import { PetClinicsController } from './pet-clinics.controller';

@Module({
  providers: [PetClinicsService],
  controllers: [PetClinicsController]
})
export class PetClinicsModule {}
