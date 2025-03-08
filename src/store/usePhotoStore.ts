import { create } from "zustand"

interface State {
  selectedBreed: string
  currentPage: number
  photoInfo: {
    id: string
    url: string
    width: number
    height: number
  }[]
}

interface Actions {
  actions: {
    setPhoto: (photo: State["photoInfo"]) => void
    setBreed: (breed: State["selectedBreed"]) => void
    setCurrent: (current: State["currentPage"]) => void
  }
}

const initialState: State = {
  selectedBreed: "",
  currentPage: 1,
  photoInfo: [] as { id: string; url: string; width: number; height: number }[],
}

export const usePhotoStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    setPhoto: (photo: State["photoInfo"]) => {
      set({ photoInfo: photo })
    },
    setBreed: (breed: string) => {
      set({ selectedBreed: breed })
    },
    setCurrent: (currents: State["currentPage"]) => {
      set({ currentPage: currents })
    },
  },
}))
