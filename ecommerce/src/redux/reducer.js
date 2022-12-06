import { GET_PRODUCTS } from "./action";

export const Reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state;
    }
};

