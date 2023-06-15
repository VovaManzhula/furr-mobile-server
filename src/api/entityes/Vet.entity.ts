import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Auth } from './Auth.entity';
import { Clinic } from './Clinic.entity';

@Entity('vet')
export class Vet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  associations: string;

  @Column()
  speciality: string;

  @Column()
  location: string;

  @Column()
  experience_from: Date;

  @Column({ default: 0 })
  is_fired: number;

  @Column('timestamp')
  created_at: Date;

  @OneToOne(() => Auth)
  @JoinColumn({ name: 'auth_id' })
  auth: Auth;

  @ManyToOne(() => Clinic)
  clinic: Clinic;

  @Column({ default: '0' })
  rate: string;
  @Column({ name: 'slots' })
  slots: number;
}
