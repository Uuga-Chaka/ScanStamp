import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { create } from 'zustand'

export type CustomClaims = { validated: boolean }
export type UserData = FirebaseAuthTypes.User & CustomClaims

type State = { currentUser: UserData | null }

type Action = {
  updateCurrentUser: (currentUser: State['currentUser']) => void
}

export const useAuthStore = create<State & Action>((set) => ({
  currentUser: null,
  updateCurrentUser: (currentUser) => set(() => ({ currentUser })),
}))
