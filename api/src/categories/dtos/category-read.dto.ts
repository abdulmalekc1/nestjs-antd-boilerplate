import { Exclude, Expose } from 'class-transformer';
import { CategoryType } from '../enums';

@Exclude()
export class CategoryRead {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  type: CategoryType;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
