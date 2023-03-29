import { create } from "zustand";

type navigatioState = {
  isAuth: boolean,
  mode: boolean,
  setMode: (mode: boolean) => void,
  setAuth: (user: boolean) => void
}

export const useAuth = create<navigatioState>((set) => ({
  isAuth: false,
  setAuth: (user: boolean) => {
    set(state => ({isAuth: user}))
  },
  mode: true,
  setMode: (mode: boolean) => {
    set(state => ({mode: mode}))
  }
}))