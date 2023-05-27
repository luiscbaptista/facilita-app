export type categoryType = {
  id: string,
  img: string,
  url: string,
  name: string
  route: string
}

export const categories = [
  {
    id: "1",
    img: "",
    url: "",
    name: "Todos",
    route: "/"
  },
  {
    id: "2",
    img: "",
    url: "",
    name: "Frutas",
    route: "/products/fruits"
  },
  {
    id: "3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD736czwaU-0tujBMSxpQXqzZh_Vpqq5RMaQ&usqp=CAU",
    url: "",
    name: "Vegetais",
    route: "/products/vegetables"
  },
  {
    id: "4",
    img: "",
    url: "",
    name: "Verduras",
    route: "/products/greens"
  }
]