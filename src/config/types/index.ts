export type ProductType = {
  id: string,
  name: string,
  category: string,
  description: string,
  img_url: string,
  price: number,
  amount: number,
  total: number,
  inStock: number,
  isAvailable: boolean
}

export type UserType = {
  email: string,
  password: string
}