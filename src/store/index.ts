import { create } from 'zustand'

type State = {
  isAddUSerOpen: boolean
  isUserExistOpen: boolean
}

type Action = {
  updateAddUserDialog: (isAddUSerOpen: State['isAddUSerOpen']) => void
  updateUserExistDialog: (isAddUSerOpen: State['isAddUSerOpen']) => void
}

export const useUIStore = create<State & Action>((set) => ({
  isAddUSerOpen: false,
  isUserExistOpen: false,
  updateAddUserDialog: (isAddUSerOpen) => set(() => ({ isAddUSerOpen: isAddUSerOpen })),
  updateUserExistDialog: (isUserExistOpen) => set(() => ({ isUserExistOpen: isUserExistOpen })),
}))
