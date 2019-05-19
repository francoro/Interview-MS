const INITIAL_STATE = {
    items: [],
    isFetching: false
}



export default function SuperHerosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SUPERHEROS_FETCHING':
            return {
                ...state,
                isFetching: true
            };
        case 'SUPERHEROS_LOADED':
            return {
                ...state,
                items: action.payload,
                isFetching: false
            };
        default:
        case action.type:
            return state;

    }
}