import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { PetProfile } from './PetProfile.entity';

@Entity('pet')
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  is_archived: number;

  @Column('timestamp')
  created_at: Date;

  @OneToOne(() => PetProfile)
  @JoinColumn()
  profile: PetProfile;
}
