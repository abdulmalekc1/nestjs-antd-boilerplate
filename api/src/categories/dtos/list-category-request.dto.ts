import { IsEnum, IsOptional } from 'class-validator';
import { SortOrder } from '../../common/enums/sort-order.enum';
import { PaginationRequest } from '../../common/dtos/pagination-request.dto';
import { CategoryType } from '../enums';

export enum ListCategorySortFields {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export class ListCategoryRequest extends PaginationRequest {
  @IsOptional()
  id?: string;

  @IsOptional()
  title?: string;

  @IsOptional()
  @IsEnum(CategoryType)
  type?: CategoryType;

  @IsOptional()
  @IsEnum(ListCategorySortFields)
  sortField: ListCategorySortFields = ListCategorySortFields.CreatedAt;

  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder: SortOrder = SortOrder.Ascending;
}
