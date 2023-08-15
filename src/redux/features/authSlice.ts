import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type userType = {
    uid: string,
    email: string,
    first_name: string,
    last_name: string,
}

const initialState = localStorage.getItem('STYLIOO_WEB_SITE_1_0_CURRENT_USER') ?
    JSON.parse(localStorage.getItem('STYLIOO_WEB_SITE_1_0_CURRENT_USER') as string) :
    {
        uid: '',
        email: '',
        first_name: '',
        last_name: '',
    }

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userType>) => {
            state.uid = action.payload.uid
            state.email = action.payload.email
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            localStorage.setItem('STYLIOO_WEB_SITE_1_0_CURRENT_USER', JSON.stringify(action.payload))
        },

        removeUser: (state) => {
            state.uid = ''
            state.email = ''
            state.first_name = ''
            state.last_name = ''
            localStorage.removeItem('STYLIOO_WEB_SITE_1_0_CURRENT_USER')
        }


    }
})

export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer