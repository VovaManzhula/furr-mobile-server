import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pet } from "./Pet.entity";
import { Vet } from "./Vet.entity";
import { Clinic } from "./Clinic.entity";

@Entity("record")
export class Record {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    diagnosis: string;

    @Column()
    treatment: string;

    @Column({ type: "text" })
    note: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @ManyToOne(() => Pet, pet => pet.id)
    petId: Pet;

    @ManyToOne(() => Vet, vet => vet.id)
    vetId: Vet;

    @ManyToOne(() => Clinic, clinic => clinic.id)
    clinicId: Clinic;
}
