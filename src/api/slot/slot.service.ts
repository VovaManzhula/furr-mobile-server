import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Slot } from '../entityes/Slot.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SlotService {
    constructor(
        @InjectRepository(Slot)
        private SlotRepository: Repository<Slot>,
      ) {}
    
      findAll(): Promise<Slot[]> {
        return this.SlotRepository.find();
      }
}
