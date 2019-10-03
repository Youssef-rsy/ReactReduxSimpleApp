import React , {Component} from 'react';
import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';
import  {connect} from 'react-redux';
import * as actionTypes from './../store/actions';

class Counter extends Component{

    state ={
        counter:0
    }
    
    counterController =(action )=>{
            switch (action) {
                case "Increment":
                    this.setState({
                        counter:this.state.counter+1
                    })
                    break;
                case "Decrement":
                    this.setState({
                        counter:this.state.counter-1
                    })
                    break;
                case "Add5":
                    this.setState({
                        counter:this.state.counter+5
                    })
                    break;

                case "Substract5":
                    this.setState({
                        counter:this.state.counter-5
                    })
                    break;  
            
                default:
                    break;
            }
    }

    render(){
        return (
        <main>
            <CounterOutput  value={this.props.ctr} />
            <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
            <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
            <CounterControl label="Add 5" clicked={this.props.onIncrementWith5Counter}/>
            <CounterControl label="substract 5" clicked={this.props.onDecrementWith5Counter}/>
            <hr/>
            <button onClick={this.props.onStoreResult}>Store Result</button>
            <ul>
            {this.props.storedResults.map(strResult => (
                <li key ={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
            ))}
               
            </ul>
        </main>)
    }
}
// state correspond to the state managed by redux 'counter' 
const mapStateToProps = state => {
    return {
        ctr :state.counter,
        storedResults : state.results
    } 
}

// wich type of action do i want to dispatch to this componenet 
const mapDispatchToProps = dispatch => {
    return { 
        onIncrementCounter :()=>dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter :()=>dispatch({type:actionTypes.DECREMENT}),
        onIncrementWith5Counter :()=>dispatch({type:actionTypes.ADD,value:5}),
        onDecrementWith5Counter :()=>dispatch({type:actionTypes.SUB,value:5}),
        onStoreResult : () => dispatch({type:actionTypes.STORE_RESULT}),
        onDeleteResult : (id) => dispatch({type:actionTypes.DELETE_RESULT,resultId:id}),
    } 
}

//we passe the central state to the component as a props so this.state.counter will be equivalent to this.props.ctr
export default connect(mapStateToProps,mapDispatchToProps)(Counter);