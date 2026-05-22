import { IsString } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  name!: string;

  @IsString()
  location!: string;

  @IsString()
  cuisine!: string;
}