import {
    SET_FILTER
} from '../actions/filterActions';

const initialState = {
    country: "",
    name: ""
};

export function filter(state = initialState, action) {
    switch (action.type) {
        case SET_FILTER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
