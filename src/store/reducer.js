import * as actionTypes from './actions';

const initialeState = {
    counter: 0,
    results: []
};

const reducer = (state=initialeState , action)=>{

    switch(action.type){
        case actionTypes.INCREMENT:
             return {
            ...state, //to distribute state attribute 
            counter : state.counter + 1
        };
        case actionTypes.DECREMENT : return {
            ...state,
            counter : state.counter - 1
        };
        case actionTypes.ADD: return {
            ...state,
            counter : state.counter + action.value
        };
        case actionTypes.SUB : return {
            ...state,
            counter : state.counter - action.value
        };
        case actionTypes.STORE_RESULT: return {
            ...state,
            results : state.results.concat({id:new Date() , value:state.counter})
        };
        case actionTypes.DELETE_RESULT : 
        
        
        /*  //1st way to immutat an array 
        const  : [...state.results];
        newArray.splice(action.resultId,1);
        return {
            ...state,
            results : newArray
        };*/
        //2nd way #best_way 
        const updatedArray = state.results.filter(result => result.id !== action.resultId);
        return {
            ...state,
            results : updatedArray
        };
    }

    return state
}

export default reducer;