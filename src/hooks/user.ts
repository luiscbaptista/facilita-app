import { api } from "../config/api";

export type userDataType = {
  email: string,
  senha: string,
}

export type createUserDataType = {
  nome: string,
  sobrenome: string,
  email: string,
  contacto: string,
  data_nasc: string,
  senha: string
}

/*export const getUser = async (userData: userDataType) => {
  const user = await api.get("/user").then()
  return user.data
}

export const postUser = async (createUserData: createUserDataType) => {
  const newUser = await api.get("/user/")
  return newUser.data
}*/