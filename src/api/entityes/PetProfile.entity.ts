import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}

@Entity()
export class PetProfile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    species: string;

    @Column()
    breed: string;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: Gender,
    })
    gender: Gender;

    @Column({ type: 'timestamp' })
    birthday: Date;

    @Column()
    avatar: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @Column('text')
    notes: string;
}
