/*  Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2s */
import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters'

class App extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  state = {
      counters: [
          {id: 1, value: 4},
          {id: 2, value: 3},
          {id: 3, value: 2},
          {id: 4, value: 1}
      ]
  }
  handleIncrement(counter){
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  }
  handleDelete(counterId){
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters: counters});
  }
  handleReset(){
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  }
  render() {
    return (
      <React.Fragment>
        {/* Wraping everything inside a React.Fragment because 
            because the return of render() has to return only one object */}
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters = {this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
