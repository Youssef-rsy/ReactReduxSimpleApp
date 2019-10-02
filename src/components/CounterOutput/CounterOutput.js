import React from 'react';

const counterOutput =(props)=>{

    const style ={
        padding:10,
        margin:'auto',
        fontWeight:'bold',
        color:'red'
    }

    return (
        <div style={style}>
            {props.value}
        </div>
    )
}
   

export default counterOutput;