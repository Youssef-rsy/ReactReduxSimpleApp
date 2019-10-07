import * as actionTypes from './actionTypes';

/*  this method is used to simulate how to call action for Asynchronous Code  */
const  saveResults = result=> {
    return {
        type : actionTypes.STORE_RESULT,
        result : result
    } ;
}
export const stroreResult = (result)=>{
    //NB : the thunk provide getState as a second argument 
    //return ( dispatch , getState )=> {
    return dispatch => {
        setTimeout(()=>{
            // const oldCounter =  getState().ctr.counter,
            //console.log(oldCounter);
            dispatch(saveResults(result));
        },2000);
    };
};
/********************************************************************************/
export const deleteResult = (resultId)=>{
    return {
        type : actionTypes.DELETE_RESULT,
        resultId :  resultId
    } ;
};