import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Auth } from "./Auth.entity";
import { Profile } from "./Profile.entity";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @OneToOne(() => Auth)
    @JoinColumn()
    auth: Auth;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
}
