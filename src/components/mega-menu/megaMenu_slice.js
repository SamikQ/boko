import { createSlice } from "@reduxjs/toolkit";

const initialState = { megaMenuVisible: false };

const megaMenuSlice = createSlice({
    name: "MegaMenuSlice",
    initialState,
    reducers: {
        toogle: (state) => {
            state.megaMenuVisible = !state.megaMenuVisible;
        },
    },
});

const { reducer, actions } = megaMenuSlice;
export const { toogle } = actions;
export default reducer;
