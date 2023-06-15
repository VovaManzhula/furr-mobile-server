import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Pet } from "./Pet.entity";
import { Clinic } from "./Clinic.entity";

@Entity("pet_clinics")
export class PetClinics {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Clinic, clinic => clinic.id)
    clinicId: Clinic;

    @ManyToOne(() => Pet, pet => pet.id)
    petId: Pet;
}
