import { Controller, Get } from '@nestjs/common';
import { VetService } from './vet.service';
import { Vet } from '../entityes/Vet.entity';

@Controller('vet')
export class VetController {
  constructor(private vetService: VetService) {}

  @Get()
  findAll(): Promise<Vet[]> {
    return this.vetService.findAll();
  }

 
}
