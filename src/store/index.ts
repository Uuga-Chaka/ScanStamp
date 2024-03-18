import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { create } from 'zustand'

// eslint-disable-next-line @typescript-eslint/no-explicit-any

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
