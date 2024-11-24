import {createSlice} from "@reduxjs/toolkit";

const cartData = createSlice({
    name: "cart",
    initialState : {
        cartItems :[]
    },
    reducers : {
        addItemsCart : (state,action) => {
            state.cartItems.push(action.payload);
        }
    }
});



export const  {addItemsCart} = cartData.actions;
export default cartData.reducer;