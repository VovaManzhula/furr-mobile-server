import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  facebookId: string;

  @Column({ nullable: true })
  googleId: string;

  @Column({ type: 'enum', enum: ['GOOGLE', 'FACEBOOK', 'EMAIL'], default: 'EMAIL' })
  method: string;

  @Column('timestamp')
  created_at: Date;

  @Column({ nullable: true })
  recoveryToken: string;
}
