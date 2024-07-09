import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewArrivals = createAsyncThunk(
    "newArrivals/getNewArrivals",
    async (_, thunkAPI) => {
        try {
            const res = await axios(
                "http://localhost:5000/products/newarrivals"
            );
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = { list: [], isLoading: false };

const newArrivalsSlice = createSlice({
    name: "newArrivals",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getNewArrivals.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getNewArrivals.fulfilled, (state, action) => {
                state.list = Array.isArray(action.payload)
                    ? action.payload
                    : [];
                state.isLoading = false;
            })
            .addCase(getNewArrivals.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default newArrivalsSlice.reducer;
