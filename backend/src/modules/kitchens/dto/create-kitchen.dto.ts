import {
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateKitchenDto {
  @IsString()
  restaurantId!: string;

  @IsOptional()
  hygieneScore?: number;

  @IsOptional()
  trustScore?: number;
}