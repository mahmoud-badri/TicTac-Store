import { createSlice } from "@reduxjs/toolkit";

// Move the function outside the createSlice
const getLocalCartData = () => {
    let LocalCartData = localStorage.getItem("theCart");
    if (LocalCartData === null || LocalCartData === "null" || LocalCartData === undefined) {
        return [];
    } else {
        return JSON.parse(LocalCartData);
    }
};

export const cartSlice = createSlice({
    initialState: getLocalCartData(),
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
            }
        },
        deleteFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id);
        },
        clear: (state, action) => {
            return [];
        },
    },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
