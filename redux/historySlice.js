import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name : 'history',
    initialState:{
        historyDetails :[],
    },
    reducers:{
        addHistory:(state , action)=>{
            state.historyDetails.push(action.payload)
        }, 
    }
})
export const {addHistory} = historySlice.actions;
export default historySlice.reducer;