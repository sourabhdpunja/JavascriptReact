/**
 * Created by Sourabh Punja on 2/25/2018.
 */
export default function ({ dispatch }) {
    return next => action => {
    // If action does not have a payload
    // or, the payload does not have a .then property
    // we dont care about it, send it on
    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    //Make Sure the action's promise resolves
    action.payload
        .then(function(response) {
            //create a new action with old type, but
            //replace the promise with response data
            const newAction = { ...action, payload: response };
            dispatch(newAction);
            });
    };
}
