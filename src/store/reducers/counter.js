import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utiliti";

const initialeState = {
    counter: 0
};

const counterReducer = (state=initialeState , action) => {

    switch(action.type){
        case actionTypes.INCREMENT:
            return updateObject(state,{counter:state.counter + 1});
        case actionTypes.DECREMENT :  
            return updateObject(state,{counter:state.counter - 1});
        case actionTypes.ADD: 
            return updateObject(state,{counter:state.counter + action.value});
        case actionTypes.SUB :
             return updateObject(state,{counter:state.counter - action.value});;
    }

    return state
}

export default counterReducer;