import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type postType = {
    title: string,
    body: string
}


const initialState: postType = {
    title: 'Post 1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        addBody: (state, action: PayloadAction<string>) => {
            state.body = action.payload
        }
    }
})

export const { addTitle, addBody } = postSlice.actions
export default postSlice.reducer

