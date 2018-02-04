/**
 * Created by Sourabh Punja on 1/31/2018.
 */
import { FETCH_POSTS,FETCH_POST } from '../actions/index';


const INITIAL_STATE ={ all: [], post: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // console.log(action.payload.data); // [ post1, post2 ]
            // { 4: post }
            return { ...state, all: action.payload.data };
        case FETCH_POST:
            return { ...state, post: action.payload.data };
        default:
            return state;
    }
}