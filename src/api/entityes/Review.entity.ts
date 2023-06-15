import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Vet } from "./Vet.entity";
import { User } from "./User.entity";
@Entity("review")
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rate: number;

    @Column({ type: "text" })
    text: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @ManyToOne(() => Vet, vet => vet.id)
    vetId: Vet;

    @ManyToOne(() => User, user => user.id)
    userId: User;
}