import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from './dog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DogService {
    constructor(
        @InjectRepository(Dog) private repo: Repository<Dog>){}
    getAll(){
        return this.repo.find();
    }
    getById(id: number)
    {
        return this.repo.findOne({where: {id: id}});
    }

    addDog(breed: string, description: string, personality: string, 
        lifespan: string, weight: string, color: string, photoUrl: string)
    {
        const newDog = this.repo.create({breed, description, 
            personality,lifespan, weight, color, photoUrl});
        return this.repo.save(newDog);
    }
    
    async delete(id: number)
    {
       const dog = await this.repo.findOne({where: {id: id}});
       this.repo.remove(dog);

    }
    async edit(id: number, breed: string, description: string, personality: string, 
        lifespan: string, weight: string, color: string, photoUrl: string ){
        const dog = await this.repo.findOne({where: {id: id}});
        dog.breed = breed;
        dog.description = description;
        dog.personality = personality;
        dog.lifespan = lifespan;
        dog.weight = weight;
        dog.color = color;
        dog.photoUrl = photoUrl;

        return this.repo.save(dog);
    }
}

