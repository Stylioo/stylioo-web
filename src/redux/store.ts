import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import postReduser from './features/postSlice'
import authSlice from './features/authSlice'
import cartSlice from './features/cartSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        post: postReduser,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector