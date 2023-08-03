import { IsArray, IsString } from "class-validator";

export class CreateDogDto{
    @IsString()
    breed: string;
    @IsString()
    description: string;
    @IsString()
    personality: string;
    @IsString()
    lifespan: string;
    @IsString()
    weight: string;
    @IsString()
    color: string;
    @IsString()
    photoUrl: string;
}