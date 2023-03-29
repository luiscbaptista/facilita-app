import { create } from 'zustand'
import { ProductType } from '../config/types'

type cartState = {
  products: ProductType[],
  addProduct: (product: ProductType) => void
  removeProduct: (product: ProductType) => void
}

export const useCartStore = create<cartState>((set) => ({
  products: [
    {
      id: String(Math.random()),
      name: "Laranja",
      category: "Fruita",
      description: "p/kg",
      img_url: "",
      price: 150,
      amount: 5,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Tomate",
      category: "Vegetal",
      description: "p/kg",
      img_url: "",
      price: 150,
      amount: 4,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Couve",
      category: "Verdura",
      description: "p/kg",
      img_url: "",
      price: 150,
      amount: 1,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
  ],
  
  addProduct: (product) => {
    set(state => ({
      products: [...state.products, product]
    }))
  },

  removeProduct: (product) => {
    set(state => ({
        products: state.products.filter(item => item.id !== product.id)
    }))
  },
  
  clearCart: () => {
    set(state => ({
      products: []
    }))
  }
}))