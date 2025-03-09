import { userDto } from "@constants/userDto"
import { create } from "zustand"

interface State {
  user: userDto | undefined
}

interface Actions {
  actions: {
    setUser: (user: userDto | undefined) => void
  }
}

const initialState: State = {
  user: undefined,
}

export const useUserStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    setUser: (user: userDto | undefined) => set({ user }),
  },
}))
