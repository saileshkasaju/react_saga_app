/**
 * Created by Edge on 6/3/2017.
 */
import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';


const rootReducer = combineReducers({
    images,
    videos
});

export default rootReducer;