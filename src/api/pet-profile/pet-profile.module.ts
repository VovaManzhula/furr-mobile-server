import { Module } from '@nestjs/common';
import { PetProfileService } from './pet-profile.service';
import { PetProfileController } from './pet-profile.controller';

@Module({
  providers: [PetProfileService],
  controllers: [PetProfileController]
})
export class PetProfileModule {}
