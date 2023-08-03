import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dtos/create-dog.dto';
import { EditDogDto } from './dtos/edit-dog.dto';
import { Dog } from './dog.entity';

@Controller('dog')
export class DogController {
    constructor(private dogService: DogService){
    }

    //localhost:3000/dog
    @Get()
    getPhones(){
        return this.dogService.getAll();
    }

    //localhost:3000/dog/1
    @Get('/:id')
    getPhone(@Param('id') id: string){
        return this.dogService.getById(+id);
    }

    @Post()
    addUser(@Body() body: CreateDogDto){
        return this.dogService.addDog(body.breed, body.description, 
            body.personality, body.lifespan, body.weight, body.color, body.photoUrl);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteDog(@Param('id') id: string){
        return this.dogService.delete(+id);
    }

    @Patch('/:id')
    editDog(@Body() body: EditDogDto, @Param('id') id: string){
        return this.dogService.edit(+id, body.breed, body.description,
            body.personality, body.lifespan, body.weight, body.color, body.photoUrl);
    }   
    
}

