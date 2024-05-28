import { configureStore } from "@reduxjs/toolkit";
import cartButtonSlice from "../cart/cartButton_slice";

const store = configureStore({
    reducer: { cartButtonSlice },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
