/**
 * Created by Edge on 6/3/2017.
 */
import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';



export default function* startForman() {
    yield fork(watchSearchMedia);
}