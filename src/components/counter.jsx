import React, { Component } from 'react';

const Counter = (props) => {
    return ( <div>
        <span className='badge badge-primary m-2'>{props.counter.value}</span>
        <button  className='btn btn-secondary btn-sm' onClick={()=>props.onInc(props.counter)}>Increment</button>
        <button  className='btn btn-danger btn-sm m-2' onClick={()=>props.onDelete(props.counter.id)}>Delete</button>
    </div> );
}
 
export default Counter;
