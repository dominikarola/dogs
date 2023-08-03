import { IsString } from "class-validator";

export class EditDogDto{
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