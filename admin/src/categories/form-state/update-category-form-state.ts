import { Category, UpdateCategory } from "../types";

/**
 * Data representation used by update category form.
 */
export interface UpdateCategoryFormState
  extends Omit<UpdateCategory, "userId"> {}

/**
 * Convert category to formState
 */
export const toFormState = (category: Category): UpdateCategoryFormState => {
  const { ...restData } = category;
  const request: UpdateCategoryFormState = {
    ...restData,
  };
  return request;
};

/**
 * Convert formState to api request
 */
export const toApiRequest = (
  formState: UpdateCategoryFormState & { userId: string }
): UpdateCategory => {
  const { ...restData } = formState;
  const request: UpdateCategory = restData;
  return request;
};
