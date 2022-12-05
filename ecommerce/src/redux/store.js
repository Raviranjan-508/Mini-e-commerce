import { legacy_createStore as createStore , applyMiddleware , compose } from "redux";
import thunk from "redux-thunk"

const initState = {
    products: [],
    cart: [],
    orders: [],
    currentProduct: {}
};

export const store = createStore(initState , reduce);