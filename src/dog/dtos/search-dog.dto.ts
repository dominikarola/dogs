import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchDogDto{
    @IsOptional()
    @IsString()
    breed? : string;

    @IsOptional()
    @IsString()
    description? : string;

    @IsOptional()
    @IsString()
    personality? : string;

    @IsOptional()
    @IsNumber()
    lifespan? : number;

    @IsOptional()
    @IsNumber()
    weight? : number;

    @IsOptional()
    @IsNumber()
    height? : number;

    @IsOptional()
    @IsString()
    color? : string;
    
    @IsOptional()
    @IsString()
    origin? : string;
}