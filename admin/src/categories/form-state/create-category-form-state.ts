import { CreateCategory } from "../types";

/**
 *
 * Data representation used by create category form.
 *
 */
export interface CreateCategoryFormState extends CreateCategory {}

/**
 *
 * Convert from formState to api request
 *
 */
export const toApiRequest = (
  formState: CreateCategoryFormState
): CreateCategory => {
  const { ...restData } = formState;
  const request: CreateCategory = restData;
  return request;
};
