import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './dog.entity';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
    imports: [TypeOrmModule.forFeature([Dog])],
    controllers: [DogController],
    providers: [DogService]
})
export class DogModule {}
