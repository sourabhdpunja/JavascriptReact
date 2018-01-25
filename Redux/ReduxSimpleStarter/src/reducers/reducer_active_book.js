/**
 * Created by Sourabh Punja on 1/25/2018.
 */

export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}
