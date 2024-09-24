import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
    name : 'trip' , 
    initialState:{
        trips : [ ],
    },
    reducers:{
        addTrip:(state , action) =>{
            state.trips.push(action.payload)
        }
    }

})
export const {addTrip} = tripSlice.actions;
export default tripSlice.reducer;