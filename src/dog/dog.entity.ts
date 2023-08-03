import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dog{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    breed: string;

    @Column()
    description: string;

    @Column()
    personality: string;

    @Column()
    lifespan: string;
    
    @Column()
    weight: string;

    @Column()
    color: string;

    @Column({ nullable: true }) // Dodajemy opcję `nullable: true` dla kolumny `photoUrl`
    photoUrl: string | null;
}