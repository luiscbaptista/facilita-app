import { create } from 'zustand'
import { ProductType } from '../config/types'
import Laranja from '../assets/laranja.webp'
import { toast } from 'react-toastify'

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
      img_url: Laranja,
      price: 150,
      amount: 5,
      total: 750,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Tomate",
      category: "Vegetal",
      description: "p/kg",
      img_url: Laranja,
      price: 150,
      amount: 4,
      total: 600,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Couve",
      category: "Verdura",
      description: "p/kg",
      img_url: Laranja,
      price: 150,
      amount: 1,
      total: 150,
      inStock: 0,
      isAvailable: false
    },
  ],
  
  addProduct: (product) => {
    set((state) => {
      const item = state.products.find((p) => p.id == product.id)

      if(!item){
        toast.success("Produto adicionado")
        return ({
          products: [...state.products, {...product, amount: product.amount == 0 ? 1 : product.amount, total: product.amount * product.price}]
        })
      }

      toast.info("Produto já anteriormente adicionado")
      return ({
        products: [...state.products]
      })
    })
  },

  removeProduct: (product) => {
    set(state => ({
        products: state.products.filter(item => item !== product)
    }))
  },
  
  clearCart: () => {
    set(state => ({
      products: []
    }))
  }
}))