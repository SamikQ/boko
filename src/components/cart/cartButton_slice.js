import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };

const cartButtonSlice = createSlice({
    name: "cartButton",
    initialState,
    reducers: {
        toggle: (state) => {
            console.log(state);
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

const { actions, reducer } = cartButtonSlice;

export default reducer;
export const { toggle } = actions;
