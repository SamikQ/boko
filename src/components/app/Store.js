import { configureStore } from "@reduxjs/toolkit";
import cartButtonSlice from "../cart/cartButton_slice";
import cartSlice from "../cart/cart_slice";
import megaMenuSlice from "../mega-menu/megaMenu_slice";
import newArrivalsSlice from "../new-arrivals/newArrivals_slice";

const store = configureStore({
    reducer: { cartButtonSlice, cartSlice, megaMenuSlice, newArrivalsSlice },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
