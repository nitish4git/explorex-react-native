import { configureStore } from "@reduxjs/toolkit";
import tripReducer from './tripSlice';
import historyReducer from './historySlice'

const store = configureStore({
    reducer:{
        trip : tripReducer,
        history : historyReducer,
    }
})
export default store;