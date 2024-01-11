import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload)
            }
            else {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        }
    }
});

// to add data in localStorage

// useEffect(() => {

// })


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;