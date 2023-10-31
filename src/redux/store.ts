import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import authSlice from './features/authSlice'
import cartSlice from './features/cartSlice'
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore'

const persistConfig = {
    key: "STYLIOO_WEB_1_0",
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authSlice,
    cart: cartSlice,
})

const presistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: presistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector