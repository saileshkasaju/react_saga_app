/**
 * Created by Edge on 6/3/2017.
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';



const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer,
            applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;