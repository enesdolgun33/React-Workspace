import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0,

}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                // Daha önceden eklendiyse
                const extractedProducts = state.products.filter((product) => product.id != action.payload.id);

                findProduct.count += action.payload.count;

                state.products = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.products);
            } else {
                // daha önceden eklenmediyse
                if (action.payload.count != 0) {
                    state.products = [...state.products, action.payload];
                    writeFromBasketToStorage(state.products);
                }
            }
        },

        deleteBasket: (state, action) => {
            state.products = [...state.products.filter((product) => product.id !== action.payload)];
            writeFromBasketToStorage(state.products);
        },

        decreaseCount: (state, action) => {
            const product = state.products.find((e) => e.id === action.payload);
            if (product) {
                product.count -= 1;
                if (product.count <= 0) {
                    state.products = state.products.filter((e) => e.id !== action.payload);
                }
                writeFromBasketToStorage(state.products);
            }
        },

        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },

        calculateBasket: (state) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        }
    },
})

export const { addToBasket, deleteBasket, decreaseCount, setDrawer, calculateBasket } = basketSlice.actions

export default basketSlice.reducer