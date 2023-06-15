import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { Clinic } from '../entityes/Clinic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Clinic])],
  providers: [ClinicService],
  controllers: [ClinicController]
})
export class ClinicModule {}
