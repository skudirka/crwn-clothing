import {takeLatest, call, put, all} from 'redux-saga/effects';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shot.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {

    try {
        /* Generator Pattern, while also handing control to Saga via call() and put() */
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call( convertCollectionsSnapshotToMap, snapshot );
        yield put( fetchCollectionsSuccess(collectionsMap) );

    } catch(error){
        yield put( fetchCollectionsFailure(error.message) );
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ]);
}