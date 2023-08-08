import {createSlice} from "@reduxjs/toolkit"

export const CartSlice = createSlice({
    name:"cart",
    initialState: [],

    reducers:{
           add : (state, action)=> {
            state.push(action.payload)
           },
        remove : (state, action) =>{
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;

//  reducer function ke andar jo bhi input parameter send kr rhe hai(ex-add) usko excess - payload ke dwara krte hai 












