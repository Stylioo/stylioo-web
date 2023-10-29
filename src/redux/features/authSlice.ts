import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type userType = {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
}

const initialState = {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userType>) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            // localStorage.setItem('STYLIOO_WEB_SITE_1_0_CURRENT_USER', JSON.stringify(action.payload))
        },

        removeUser: (state) => {
            state.id = ''
            state.email = ''
            state.first_name = ''
            state.last_name = ''
            // localStorage.removeItem('STYLIOO_WEB_SITE_1_0_CURRENT_USER')
        }


    }
})

export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer