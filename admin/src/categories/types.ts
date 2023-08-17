import { PaginatedRequest, SortOrder } from "../shared/types";
import { PaginatedResponse } from "../shared/types";
import { UserRead } from "../users/types";
import { CategoryType } from "./enums";

export interface Category {
  id: string;
  title: string;
  description: string | null;
  type: CategoryType;
  user: UserRead;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCategory {
  title: string;
  userId: string;
  description?: string | null;
  type: CategoryType;
}

export interface UpdateCategory extends CreateCategory {}

export enum ListCategorySortFields {
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

export interface ListCategoryRequest extends PaginatedRequest {
  id?: string;
  title?: string;
  type?: CategoryType;
  sortField: ListCategorySortFields;
  sortOrder: SortOrder;
}

export interface ListCategoryResponse extends PaginatedResponse<Category> {}
