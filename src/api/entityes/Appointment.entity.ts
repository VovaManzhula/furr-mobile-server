import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pet } from './Pet.entity';
import { Vet } from './Vet.entity';

@Entity('appointment')
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['COMPLETED', 'CANCELED', 'PENDING'], default: 'PENDING' })
  status: string;

  @Column('timestamp')
  created_at: Date;

  @ManyToOne(() => Pet)
  pet: Pet;

  @ManyToOne(() => Vet)
  vet: Vet;

  @Column()
  duration: number;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;
}
