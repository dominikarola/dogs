import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dtos/create-dog.dto';
import { EditDogDto } from './dtos/edit-dog.dto';
import { Dog } from './dog.entity';
import { SearchDogDto } from './dtos/search-dog.dto';

@Controller('dog')
export class DogController {
    constructor(private dogService: DogService){
    }

    // localhost:3000/dog
    @Get()
    getDogs(){ //Getdogs
        return this.dogService.getAll();
    }

    //localhost:3000/dog/1
    @Get('/:id')
    getDogById(@Param('id') id: string){
        return this.dogService.getById(+id);
    }

    @Post()
    addDog(@Body() body: CreateDogDto){
        return this.dogService.addDog(body.breed, body.description, 
            body.personality, body.minimumLifespan, body.maximumLifespan, body.minimumWeight, body.maximumWeight, body.minimumHeight, body.maximumHeight, body.color, body.origin, body.photoUrl);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteDog(@Param('id') id: string){
        return this.dogService.delete(+id);
    }

    @Patch('/:id')
    editDog(@Body() body: EditDogDto, @Param('id') id: string){
        return this.dogService.edit(+id, body.breed, body.description,
            body.personality, body.minimumLifespan, body.maximumLifespan, body.miniummWeight, body.maximumWeight, body.minimumHeight, body.maximumHeight, body.color, body.origin, body.photoUrl);
    }   
    
    @Get('search/filter')
    searchDog(@Query() query: SearchDogDto){
        return this.dogService.search(query);
    }   
}

