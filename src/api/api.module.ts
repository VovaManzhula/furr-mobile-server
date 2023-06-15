import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VetService } from './vet/vet.service';
import { VetController } from './vet/vet.controller';
import { Vet } from './entityes/Vet.entity';
import { UserModule } from './user/user.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { ClinicModule } from './clinic/clinic.module';
import { PetModule } from './pet/pet.module';
import { PetClinicsModule } from './pet-clinics/pet-clinics.module';
import { PetOwnersModule } from './pet-owners/pet-owners.module';
import { PetProfileModule } from './pet-profile/pet-profile.module';
import { ProfileModule } from './profile/profile.module';
import { RecordModule } from './record/record.module';
import { ReviewModule } from './review/review.module';
import { SlotModule } from './slot/slot.module';
import { VetModule } from './vet/vet.module';

@Module({
  imports: [
    UserModule,
    AppointmentModule,
    AuthModule,
    ClinicModule,
    PetModule,
    PetClinicsModule,
    PetOwnersModule,
    PetProfileModule,
    ProfileModule,
    RecordModule,
    ReviewModule,
    SlotModule,
    VetModule,
  ],
})
export class ApiModule {}
