import { create } from "zustand";
import axios from "axios";
import { ProductType } from "../config/types";
import Laranja from '../assets/laranja.webp'

type ProductState = {
  products: ProductType[],
}

export const useProductStore = create<ProductState>((set) => ({
  products: [
    {
      id: String(Math.random()),
      name: "Laranja",
      category: "Fruta",
      img_url: Laranja,
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Tomate",
      category: "Vegetal",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD736czwaU-0tujBMSxpQXqzZh_Vpqq5RMaQ&usqp=CAU",
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Laranja",
      category: "Fruta",
      img_url: Laranja,
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Tomate",
      category: "Vegetal",
      img_url: "https://www.brasafrica.com/wp-content/uploads/2020/11/CENOURA-BRASILIA-IRECE.jpg",
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Laranja",
      category: "Fruta",
      img_url: Laranja,
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Tomate",
      category: "Vegetal",
      img_url: Laranja,
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
  ]/*axios({
    method: 'get',
    url: '',
    responseType: ''
  }).then((response) => response.data)*/,  
}))