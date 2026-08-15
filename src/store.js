import { configureStore } from '@reduxjs/toolkit'
import clipReducer from './redux/clipSlice'

export const store = configureStore({
  reducer: {
    clip: clipReducer,
  },
})