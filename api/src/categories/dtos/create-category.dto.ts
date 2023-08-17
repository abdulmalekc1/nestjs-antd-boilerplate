import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MinLength,
} from 'class-validator';
import { CategoryType } from '../enums';

export class CreateCategory {
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsOptional()
  description?: string | null;

  @IsUUID()
  userId?: string;

  @IsNotEmpty()
  @IsEnum(CategoryType)
  type: CategoryType;
}
