import { api } from "../config/api";

export const getProducts = async () => {
  return await api.get("/products/list")
}

export const getProductsByCategory = async () => {
  console.log("Produtos pegados")
}