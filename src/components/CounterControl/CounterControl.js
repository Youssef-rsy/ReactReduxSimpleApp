import React from 'react';

const counterContol =(props)=>{

    const style = {
        padding: 20 ,
        display: 'inline',
        margin:'auto',
        justifyContent: 'center'
       
    }
    const buttonStyle ={
        margin:5,
        backgroundColor:'#a6666a',
        color:'white',
        borderRadius: 10,
        padding:10
    }
    return (
        <div style={style}>
                <button style={buttonStyle} onClick={props.clicked}>{props.label}</button>
        </div>
    )
}
   

export default counterContol;