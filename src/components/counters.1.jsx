import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
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
    render(){
        return (
            <div>
                <button 
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {/* We can pass values to an object by using HTML properties*/ }
                {/*In the object itself, we can access this values from this.props object */}
                {this.state.counters.map(counter =>                     
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncrement}
                        counter={counter}>
                        {/* The element below will be considered a children of Counter */}
                        <h4>Hello</h4>
                    </Counter>
                )}
            </div>
        )
    }
}

export default Counters;