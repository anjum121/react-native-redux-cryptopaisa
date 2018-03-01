
const initialState ={
    isFetching : null,
    data : [],
    hasError : false,
    errorMessage : null
}

import { 
    FETCH_COIN_DATA_FAIL,
    FETCHING_COIN_DATE,
    FETCH_COIN_DATA_SUCCESS
} from './../utils//ActionTypes'


export default function(state = initialState , action){
    switch(action.type){

        case FETCHING_COIN_DATE:
            return Object.assign({}, state,{
                isFetching : true,
                data: [],
                hasError: false,
                errorMessage:null
            });

        case FETCH_COIN_DATA_SUCCESS:
            return Object.assign({}, state,{
                isFetching : false,
                data: action.payload,
                hasError: false,
                errorMessage:null
            });   
            
      case FETCH_COIN_DATA_FAIL:
            return Object.assign({}, state,{
                isFetching : false,
                data: action.payload,
                hasError: true,
                errorMessage:action.err
            });       

        default:
            return state;    

    }
}