import { create } from 'zustand'
import { ProductType } from '../config/types'
import Laranja from '../assets/laranja.webp'
import { toast } from 'react-toastify'

type cartState = {
  cart: ProductType[],
  addProduct: (product: ProductType) => void
  removeProduct: (product: ProductType) => void
  setCart: (products: ProductType[]) => void
  clearCart: () => void
}

export const useCartStore = create<cartState>((set) => ({
  cart:[],
  
  addProduct: (product) => {
    set((state) => {
      const item = state.cart.find((p) => p.id == product.id)

      if(!item){
        toast.success("Produto adicionado")
        return ({
          cart: [...state.cart, {...product, amount: product.amount == 0 ? 1 : product.amount, total: product.amount * product.price}]
        })
      }

      toast.info("Produto já anteriormente adicionado")
      return ({
        cart: [...state.cart]
      })
    })
  },

  removeProduct: (product) => {
    set(state => ({
        cart: state.cart.filter(item => item !== product)
    }))
  },

  setCart: (products: ProductType[]) => {
    set(state => ({cart: products}))
  },
  
  clearCart: () => {
    set(state => ({
      cart: []
    }))
  }
}))