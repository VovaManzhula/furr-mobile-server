import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vet } from '../entityes/Vet.entity';

@Injectable()
export class VetService {
  constructor(
    @InjectRepository(Vet)
    private vetRepository: Repository<Vet>,
  ) {}

  findAll(): Promise<Vet[]> {
    return this.vetRepository.find();
  }
}
