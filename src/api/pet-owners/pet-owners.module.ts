import { Module } from '@nestjs/common';
import { PetOwnersService } from './pet-owners.service';
import { PetOwnersController } from './pet-owners.controller';

@Module({
  providers: [PetOwnersService],
  controllers: [PetOwnersController]
})
export class PetOwnersModule {}
