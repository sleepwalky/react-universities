import {
    LOAD_LIST
} from '../actions/universitiesActions';

export function universities(state = [], action) {
    switch (action.type) {
        case LOAD_LIST:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}
