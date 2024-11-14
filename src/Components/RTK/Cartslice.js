import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem(state,action){
            if(state.find((item)=>item.id===action.payload.id)){
                return [...state];
            }else{
                return [...state,action.payload];
            }
        },
        removeItem(state,action){
            return state.filter((item)=>item.id !== action.payload.id);
        }
    }
})

const {addItem,removeItem} = cartSlice.actions;

export {addItem,removeItem};
export default cartSlice.reducer;