import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("profile")
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ type: "text", nullable: true })
    about: string;

    @Column({ type: "text" })
    avatar: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;
}
