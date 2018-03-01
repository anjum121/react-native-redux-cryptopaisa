import axios from 'axios';
import {apiBaseURL} from './../utils/Constants';

import { 
    FETCH_COIN_DATA_FAIL,
    FETCHING_COIN_DATE,
    FETCH_COIN_DATA_SUCCESS
} from './../utils//ActionTypes'

export default function FetchCoinData(){
    return dispatch => {
        dispatch({type : FETCHING_COIN_DATE})
        let url = `${apiBaseURL}/v1/ticker/?limit=10`
        return axios.get(url)
            .then(res => {
                dispatch({type : FETCH_COIN_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type : FETCH_COIN_DATA_FAIL, payload: err.data})
            })
    }
}