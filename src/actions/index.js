export const TOGGLE_INVOICE = 'TOGGLE_INVOICE';
export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_PRODUCT_LIST_ERROR = 'SET_PRODUCT_LIST_ERROR';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProduct(sku) {
    return {
        type: ADD_PRODUCT,
        sku,
    }
}

export function getProductList() {
    return {
        type: GET_PRODUCT_LIST,
    }
}

export function toggleInvoice() {
    return {
        type: TOGGLE_INVOICE,
    };
}
