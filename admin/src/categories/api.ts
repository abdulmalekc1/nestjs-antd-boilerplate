import {
  CreateCategory,
  ListCategoryRequest,
  ListCategoryResponse,
  Category,
  UpdateCategory,
} from "./types";
import { GenericIDResponse } from "../shared/types";
import axios from "../axios-client/instance";

const categoriesApi = {
  async create(request: CreateCategory) {
    const { data } = await axios.post<GenericIDResponse>(
      "/admin/categories",
      request
    );
    return data;
  },

  async update(id: string, request: UpdateCategory) {
    const { data } = await axios.patch<void>(
      `/admin/categories/${id}`,
      request
    );
    return data;
  },

  async findOne(id: string) {
    const { data } = await axios.get<Category>(`/admin/categories/${id}`);
    return data;
  },

  async index(request: ListCategoryRequest) {
    const { data } = await axios.get<ListCategoryResponse>(
      "/admin/categories",
      {
        params: request,
      }
    );
    return data;
  },
};

export default categoriesApi;
