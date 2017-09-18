import { call, put, takeEvery } from 'redux-saga/effects';

import {
    GET_PRODUCT_LIST,
    SET_PRODUCT_LIST,
    SET_PRODUCT_LIST_ERROR,
} from '../actions';

import fetchAPI from '../api';

function* fetchProducts() {
    try {
        const data = yield call(fetchAPI);
        yield put({
            type: SET_PRODUCT_LIST,
            data
        });
    } catch(err) {
        yield put({
            type: SET_PRODUCT_LIST_ERROR,
            error: err,
        })
    }
}

function* mySaga() {
    console.log('mySaga');
    yield takeEvery(GET_PRODUCT_LIST, fetchProducts);
}

export default mySaga;