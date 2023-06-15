import { Module } from '@nestjs/common';
import { VetService } from './vet.service';
import { VetController } from './vet.controller';
import { Vet } from '../entityes/Vet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vet])],
  providers: [VetService],
  controllers: [VetController],
})
export class VetModule {}
