import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
    state = { counters:[
        {id:1,value:0},
        {id:2,value:5},
        {id:3,value:4},
        {id:4,value:2}
    ] } 

    handleDelete=(cid)=>{
     const mycounters=this.state .counters.filter(c=>c.id !== cid);
     this.setState({counters:mycounters});
    }

    handleInc=(c)=>{
        const counter=[...this.state.counters];
        const index=counter.indexOf(c);
        counter[index]={...c};
        counter[index].value++;
        this.setState({counters:counter});
    }

    reset=()=>{
           this.setState({counters:this.state.counters.map(counter => {counter.value=0;return counter;})})
    }

    render() { 
        return (
            <React.Fragment>
        <NavBar counters={this.state.counters}/>
        <main className='Container'>
            <Counters counters={this.state.counters} onReset={this.reset} onInc={this.handleInc} onDelete={this.handleDelete} />
        </main>
        </React.Fragment>
        );
    }
}
 
export default App;