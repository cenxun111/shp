import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    word:[],
    userWords:[],
    userWord:[]
};

export const wordSlice = createSlice({
    name:"words",
    initialState,
    reducers:{
        createWord:(state,action) => {
            state.word = action.payload;
        },
        updateSuccess:(state) => {
            state.updated = true;
        },
        updateStart:(state) => {
            state.updated = false;
        },
        deleteSuccess:(state) => {
            state.deleted = true;
        },
        deleteWord:(state,action) => {
            state.userWords = action.payload.data;
        },
        getUserWords:(state,action) =>{
            state.userWords = action.payload.data;
        },
        wordError:(state,action) =>{
            state.error = action.payload;
        },
        getSingleWord:(state,action) =>{
            state.userWord = action.payload.data;
        }
    }
})


export const {createWord,getUserWords,wordError,deleteWord,updateStart,updateSuccess,getSingleWord,deleteSuccess} = wordSlice.actions

export default wordSlice.reducer