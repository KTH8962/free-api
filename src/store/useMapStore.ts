import { create } from "zustand"

interface State {
  searchWord: string
  location: {
    lat: number
    lng: number
  }
}

interface Actions {
  actions: {
    setSearch: (word: string) => void
    setLocation: (addr: State["location"]) => void
  }
}

const initialState: State = {
  searchWord: "",
  location: {
    lat: 37.5035117792843,
    lng: 126.766038450927,
  },
}

export const useMapStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    setSearch: (word: string) => {
      set(() => ({ searchWord: word }))
    },
    setLocation: (addr: State["location"]) => {
      set({ location: addr })
    },
  },
}))
