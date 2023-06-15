import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { Appointment } from './api/entityes/appointment.entity';
import { Pet } from './api/entityes/Pet.entity';
import { Vet } from './api/entityes/Vet.entity';
import { Auth } from './api/entityes/Auth.entity';
import { Clinic } from './api/entityes/Clinic.entity';
import { PetClinics } from './api/entityes/PetClinic.entity';
import { PetOwners } from './api/entityes/PetOwners.entity';
import { PetProfile } from './api/entityes/PetProfile.entity';
import { Profile } from './api/entityes/Profile.entity';
import { Record } from './api/entityes/Record.entity';
import { Review } from './api/entityes/Review.entity';
import { Slot } from './api/entityes/Slot.entity';
import { User } from './api/entityes/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'morty',
      password: '123123123',
      database: 'furr',
      entities: [
        Appointment,
        Pet,
        Vet,
        Auth,
        Clinic,
        PetClinics,
        PetOwners,
        PetProfile,
        Profile,
        Record,
        Review,
        Slot,
        User,
      ],
      synchronize: false,
      dropSchema: false,
    }),
    TypeOrmModule.forFeature([
      Appointment,
      Pet,
      Vet,
      Auth,
      Clinic,
      PetClinics,
      PetOwners,
      PetProfile,
      Profile,
      Record,
      Review,
      Slot,
      User,
    ]),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
