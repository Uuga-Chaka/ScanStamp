import { create } from 'zustand'

type UserData = { email: string; uid: string; validated: boolean }

type State = {
  currentUser: UserData | null
}

type Action = {
  updateCurrentUser: (currentUser: State['currentUser']) => void
}

export const useAuthStore = create<State & Action>((set) => ({
  currentUser: null,
  updateCurrentUser: (currentUser) => set(() => ({ currentUser })),
}))
