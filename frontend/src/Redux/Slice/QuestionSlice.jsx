import { createSlice } from "@reduxjs/toolkit";

const  QuestionSlice = createSlice({
    name : 'QuestionSlice',
    initialState : [],
    reducers : {
        Additems : (state, action) => {
            state.push(action.payload);
        },
    }
})


export const {Additems} = QuestionSlice.actions;

export default QuestionSlice.reducer;