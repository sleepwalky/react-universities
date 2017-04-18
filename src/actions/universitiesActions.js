import { getUniversities } from '../api';
export const LOAD_LIST = 'LOAD_LIST';

export function loadList(dispatch) {
    dispatch({
        type: LOAD_LIST,
        payload: getUniversities()
    });
}
