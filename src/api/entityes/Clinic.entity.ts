import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Auth } from "./Auth.entity";
import { Profile } from "./Profile.entity";

@Entity("clinic")
export class Clinic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location: string;

    @Column()
    license: string;

    @Column({ type: 'datetime' })
    registration: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @OneToOne(() => Auth)
    @JoinColumn()
    auth: Auth;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
}
