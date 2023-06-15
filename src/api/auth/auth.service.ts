import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../entityes/Auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  async create(authData: Partial<Auth>): Promise<Auth> {
    const auth = this.authRepository.create(authData);
    return this.authRepository.save(auth);
  }

  async findAll(): Promise<Auth[]> {
    return this.authRepository.find();
  }

  async findOne(id: number): Promise<Auth | undefined> {
    return this.authRepository.findOneBy({id});
  }

  async update(id: number, authData: Partial<Auth>): Promise<Auth | undefined> {
    await this.authRepository.update(id, authData);
    return this.authRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    await this.authRepository.delete(id);
  }
}
