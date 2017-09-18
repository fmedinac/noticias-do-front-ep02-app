import {
    ADD_PRODUCT,
    SET_PRODUCT_LIST,
    TOGGLE_INVOICE,
} from '../actions';

const defaultState = {
    cart: [],
    isInvoiceOpen: false,
    productListData: [],
};

function reducer(state = defaultState, action) {
    console.log('action', action);
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.sku,
                ],
            }
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productListData: action.data.products,
            }
        case TOGGLE_INVOICE:
            return {
                ...state,
                isInvoiceOpen: !state.isInvoiceOpen,
            }
        default:
            return {
                ...state,
            };
    }
}

export default reducer;
