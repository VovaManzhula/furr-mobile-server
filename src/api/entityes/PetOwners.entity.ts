import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User.entity";
import { Pet } from "./Pet.entity";

@Entity("pet_owners")
export class PetOwners {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => User, user => user.id)
    userId: User;

    @ManyToOne(() => Pet, pet => pet.id)
    petId: Pet;
}
