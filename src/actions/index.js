import * as API from '../api'

export const SUPERHEROS_LOAD = () => {

    return (dispatch) => {
        dispatch(SUPERHEROS_FETCHING());
        API.getSuperHeros().then((data) => {
            console.log(data)
            dispatch(SUPERHEROS_LOADED(data))
        }).catch((err) => {
            console.log("errr", err)
        })
    }
}


export const SUPERHEROS_FETCHING = () => {
    return {
        type: 'SUPERHEROS_FETCHING'
    }
}

export const SUPERHEROS_LOADED = (payload) => {
    return {
        type: 'SUPERHEROS_LOADED',
        payload: payload
    }
}