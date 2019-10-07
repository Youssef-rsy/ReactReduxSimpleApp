import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utiliti";

const initialeState = {
    results: []
};

const deleteResult = (state , action) =>{
    const updatedArray = state.results.filter(result => result.id !== action.resultId);
    return updateObject(state, { results : updatedArray} );
}
const resultReducer = (state=initialeState , action)=>{

    switch(action.type){
        case actionTypes.STORE_RESULT: 
            return updateObject(state, { results : state.results.concat({id:new Date() , value:action.result})});
        case actionTypes.DELETE_RESULT : 
            return deleteResult(state,action) ;
    }

    return state
}

export default resultReducer;