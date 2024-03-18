import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { create } from 'zustand'

type State = {
  currentUser: (FirebaseAuthTypes.User & { verified: boolean }) | null
}

type Action = {
  updateCurrentUser: (currentUser: State['currentUser']) => void
}

export const useAuthStore = create<State & Action>((set) => ({
  currentUser: null,
  updateCurrentUser: (currentUser) => set(() => ({ currentUser })),
}))
