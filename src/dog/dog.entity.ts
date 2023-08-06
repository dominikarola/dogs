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
    minimumLifespan: number;

    @Column()
    maximumLifespan: number;
    
    @Column()
    minimumWeight: number;

    @Column()
    maximumWeight: number;
    
    @Column()
    minimumHeight: number;

    @Column()
    maximumHeight: number;

    @Column()
    color: string;

    @Column()
    origin: string;

    @Column({ nullable: true }) // Dodajemy opcję `nullable: true` dla kolumny `photoUrl`
    photoUrl: string | null;
}