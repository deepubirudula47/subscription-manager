import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ISubscription } from './types'

interface State {
  items: ISubscription[]
}

const initialState: State = { items: [] }

const slice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    setAll(state, action: PayloadAction<ISubscription[]>) {
      state.items = action.payload
    },
    add(state, action: PayloadAction<ISubscription>) {
      state.items.push(action.payload)
    },
    remove(state, action: PayloadAction<string>) {
      state.items = state.items.filter((s) => s.id !== action.payload)
    },
  },
})

export const { setAll, add, remove } = slice.actions
export default slice.reducer
