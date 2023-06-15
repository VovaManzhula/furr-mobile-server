import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Vet } from "./Vet.entity";

@Entity("slot")
export class Slot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 60 })
    duration: number;

    @Column({ type: "enum", enum: ["FREE", "RESERVED"], default: "FREE" })
    status: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @ManyToOne(() => Vet, vet => vet.id)
    vet: Vet;

    @Column({ type: 'datetime' })
    start_time: Date;

    @Column({ type: 'datetime' })
    end_time: Date;
}
