import React , {Component} from 'react';
import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';

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
            <CounterOutput  value={this.state.counter} />
            <CounterControl label="Increment" clicked={()=>(this.counterController("Increment"))}/>
            <CounterControl label="Decrement" clicked={()=>(this.counterController("Decrement"))}/>
            <CounterControl label="Add 5" clicked={()=>(this.counterController("Add5"))}/>
            <CounterControl label="substract 5" clicked={()=>(this.counterController("Substract5"))}/>
        </main>)
    }
}
export default Counter;