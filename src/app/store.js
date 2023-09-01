import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { userDataApi } from '../api/ApiSlice'

export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userDataApi.middleware)
})