import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.totalQuantity++;
        },
    },
});

const { actions, reducer } = cartSlice;
export const { addItemToCart } = actions;
export default reducer;
