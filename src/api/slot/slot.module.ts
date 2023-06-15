import { Module } from '@nestjs/common';
import { SlotService } from './slot.service';
import { SlotController } from './slot.controller';
import { Slot } from '../entityes/Slot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Slot])],
  providers: [SlotService],
  controllers: [SlotController]
})
export class SlotModule {}
