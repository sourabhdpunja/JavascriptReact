/**
 * Created by Sourabh Punja on 2/25/2018.
 */
import {
    FETCH_USERS
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type){
        case FETCH_USERS:
            // debugger;
            return [ ...state, ...action.payload.data ];
    }
    return state;
}