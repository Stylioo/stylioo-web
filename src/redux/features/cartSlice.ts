import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type serviceType = {
    id: string,
    name: string,
    category: string,
    description?: string,
    price: number,
    duration: string,
    status: string,
    createdAt: string,
    updatedAt: string,
}

type beauticianType = {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    // availabilities?: { [date: string]: [{ startTime: string, endTime: string }] },
}

type cartType = {
    services: serviceType[],
    totalPrice: number,
    date: string,
    startTime: string,
    beautician?: beauticianType,
}

const initialState = {
    services: [],
    totalPrice: 0,
    date: "",
    startTime: "",
    beautician: {
        id: '',
        first_name: '',
        last_name: '',
        email: ''
    },
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: cartType, action: PayloadAction<serviceType>) => {
            state.services.push(action.payload)
            state.totalPrice += action.payload.price
        },
        removeFromCart: (state: cartType, action: PayloadAction<serviceType>) => {
            state.services = state.services.filter(service => service.id !== action.payload.id)
            state.totalPrice -= action.payload.price
        },
        emptyCart: (state: cartType) => {
            state.services = []
            state.totalPrice = 0
        },
        addBeautician: (state: cartType, action: PayloadAction<beauticianType>) => {
            state.beautician = action.payload
        },
        removeBeautician: (state: cartType) => {
            state.beautician = undefined
        },
        setDate: (state: cartType, action: PayloadAction<string>) => {
            state.date = action.payload
        },

        setStartTime: (state: cartType, action: PayloadAction<string>) => {
            state.startTime = action.payload
        },

        // setEndTime: (state: cartType, action: PayloadAction<string>) => {
        //     state.startTme = action.payload
        // },


    }
})

export const { addToCart, removeFromCart, emptyCart, addBeautician, removeBeautician, setDate, setStartTime } = cartSlice.actions
export default cartSlice.reducer