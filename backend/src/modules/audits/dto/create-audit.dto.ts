import {
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateAuditDto {
  @IsString()
  kitchenId!: string;

  @IsNumber()
  hygieneScore!: number;

  @IsString()
  notes!: string;
}