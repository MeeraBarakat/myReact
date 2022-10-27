import React, { Component } from 'react';
import Counter from './counter';

const Counters = (props) => {
    return (     
        <div>
            <button className='badge badge-primary m-2' onClick={props.onReset}>Reset</button>
       {props.counters.map(counter=><Counter key={counter.id} onInc={props.onInc} onDelete={props.onDelete} counter={counter} />)}
    </div>);
}

 
export default Counters;