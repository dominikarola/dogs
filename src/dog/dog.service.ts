import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from './dog.entity';
import { Like, MoreThanOrEqual, Repository } from 'typeorm';
import { SearchDogDto } from './dtos/search-dog.dto';

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
        minimumLifespan: number, maximumLifespan: number, minimumWeight: number, maximumWeight: number, minimumHeight: number, maximumHeight: number, color: string, origin: string, photoUrl: string)
    {
        const newDog = this.repo.create({breed, description, 
            personality, minimumLifespan, maximumLifespan, minimumWeight, maximumWeight, minimumHeight, maximumHeight, color, origin, photoUrl});
        return this.repo.save(newDog);
    }
    
    async delete(id: number)
    {
       const dog = await this.repo.findOne({where: {id: id}});
       this.repo.remove(dog);

    }
    async edit(id: number, breed: string, description: string, personality: string, 
        minimumLifespan: number, maximumLifespan: number, minimumWeight: number, maximumWeight: number, minimumHeight: number, maximumHeight: number, color: string, origin: string, photoUrl: string){
        
        const dog = await this.repo.findOne({where: {id: id}});
        
        dog.breed = breed;
        dog.description = description;
        dog.personality = personality;
        dog.minimumLifespan = minimumLifespan;
        dog.maximumLifespan = maximumLifespan;
        dog.minimumWeight = minimumWeight;
        dog.maximumWeight = maximumWeight;
        dog.minimumHeight = minimumHeight;
        dog.maximumHeight = maximumHeight;
        dog.color = color;
        dog.origin = origin;
        dog.photoUrl = photoUrl;

        return this.repo.save(dog);
    }

    async search(query: SearchDogDto): Promise<Dog[]>{
        const where: any = {};

        if(query.breed){
            where.breed = query.breed;
        }

        if(query.description){
            where.description = Like(`%${query.description}%`);
        }

        if(query.personality){
            where.personality = Like(`%${query.personality}%`);
        }

        if(query.lifespan){ 
            where.minimumLifespan = MoreThanOrEqual(query.lifespan);
        }

        if(query.weight){ 
            where.minimumWeight = MoreThanOrEqual(query.weight);
        }

        if(query.height){ 
            where.minimumHeight = MoreThanOrEqual(query.height);
        }

        if(query.color){
            where.color = Like(`%${query.color}%`);
        }

        if(query.origin){
            where.origin = Like(`%${query.origin}%`);
        }

        return this.repo.find({ where });
    }
}

