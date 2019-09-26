import {all, call, takeLatest, put, select} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import {selectCurrentUser} from '../user/user.selector'

import CartActionTypes from './cart.types';
import {clearCart, setCartFromDB} from './cart.actions';
import {selectCartItems} from './cart.selectors';

import {getUserCartRef} from '../../firebase/firebase.utils';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}


export function* getUserCartFromDB({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromDB(cartSnapshot.data().cartItems));
}

export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getUserCartFromDB);
}


export function* updateCartInDB() {
    
    // first check if user is authenticated
    const user = yield select(selectCurrentUser);
    if( user ){
        try {
            const cartRef = yield getUserCartRef(user.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({cartItems});
        } catch(error){
            console.log(error);
        }
    }
}

export function* onCartUpdate() {
    yield takeLatest([
        CartActionTypes.ADD_ITEM,
        CartActionTypes.REMOVE_ITEM,
        CartActionTypes.CLEAR_CART
    ], updateCartInDB);
}


export function* cartSagas() {
    yield(all([
        call(onSignOutSuccess),
        call(onUserSignIn),
        call(onCartUpdate)
    ]));
}