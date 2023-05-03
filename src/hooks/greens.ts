import api from "../config/api";
import { ProductType } from "../config/types";

export const getGreens = async (): Promise<ProductType[]> => {
  return await api.get("/products/list").then(response => response.data)
}