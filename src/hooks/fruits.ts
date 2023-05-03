import api from "../config/api";
import { ProductType } from "../config/types";

export const getFruits = async (): Promise<ProductType[]> => {
  return await api.get("/products/list").then(response => response.data)
}