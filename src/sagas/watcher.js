/**
 * Created by Edge on 6/3/2017.
 */
import { takeLatest } from 'redux-saga/effects';
import { searchMediaSaga } from './mediaSaga';
import * as types from '../constants/actionTypes';


export default function* watchSearchMedia() {
    yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}