import { IsNumber, IsString } from "class-validator";

export class EditDogDto{
    @IsString()
    breed: string;
    @IsString()
    description: string;
    @IsString()
    personality: string;
    @IsNumber()
    minimumLifespan: number;
    @IsNumber()
    maximumLifespan: number;
    @IsNumber()
    miniummWeight: number;
    @IsNumber()
    maximumWeight: number;
    @IsNumber()
    minimumHeight: number;
    @IsNumber()
    maximumHeight: number;
    @IsString()
    color: string;
    @IsString()
    origin: string;
    @IsString()
    photoUrl: string;
}