import { create } from "zustand";
import { UserType } from "../config/types";

type navigationState = {
  user: UserType
  isAuth: boolean,
  mode: boolean,
  setMode: (mode: boolean) => void,
  setAuth: (user: UserType, auth: boolean) => void
}

export const useAuth = create<navigationState>((set) => ({
  user: {data: {token: '', user: {email: '', name: '', password: '', sobrenome: '', id: '', contacto: 0}}},
  isAuth: false,
  setAuth: (user: UserType, auth: boolean) => {
    set((state) => ({isAuth: auth, user: user}))
  },
  mode: true,
  setMode: (mode: boolean) => {
    set(state => ({mode: mode}))
  }
}))