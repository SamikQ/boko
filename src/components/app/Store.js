import { configureStore } from "@reduxjs/toolkit";
import cartButtonSlice from "../cart/cartButton_slice";
import cartSlice from "../cart/cart_slice";

const store = configureStore({
    reducer: { cartButtonSlice, cartSlice },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
