export const SET_FILTER = 'SET_FILTER';

export function setFilter(dispatch, country, name) {
    dispatch({
        type: SET_FILTER,
        payload: {
            country,
            name
        }
    });
}
