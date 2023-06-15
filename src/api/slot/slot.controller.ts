import { Controller,Get  } from '@nestjs/common';
import { SlotService } from './slot.service';
import { Slot } from '../entityes/Slot.entity';

@Controller('slot')
export class SlotController {
    constructor(private SlotService: SlotService) {}

    @Get()
    findAll(): Promise<Slot[]> {
      return this.SlotService.findAll();
    }
  
}
