import { Type } from 'class-transformer';
import { PaginatedResponse } from '../../common/dtos/paginated-response.dto';
import { Category } from '../entities/category.entity';
import { CategoryRead } from './category-read.dto';

export class ListCategoryResponse extends PaginatedResponse<Category> {
  @Type(() => CategoryRead)
  data?: Category[];
}
