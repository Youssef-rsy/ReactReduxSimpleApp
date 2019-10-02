//import { createStore } from "redux"
const redux = require('redux');
const createStore = redux.createStore;
//sate
const initState = {
    counter:0
}
//reducer is the only thing that may update the state in the end 
const rootReducer = (state = initState , action)=>{
    switch(action.type){
        case 'INC_COUNTER': return {
            ...state,
            counter:state.counter+1
        };
        case 'ADD_COUNTER': return {
            ...state,
            counter:state.counter+action.value
        };
    }
    return state;
}
//action
//store   :   need to be initiliaez with reducer 
const store = createStore(rootReducer);
console.log(store.getState());

//subscribtion
store.subscribe(()=>{
    console.log('[subscription ] ',store.getState());
})

//dispatch action 
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER' , value:10});
console.log(store.getState());

