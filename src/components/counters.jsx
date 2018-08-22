/*  Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2s */
import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{    
    render(){
        /* Object deconstruction */
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {/* We can pass values to an object by using HTML properties*/ }
                {/*In the object itself, we can access this values from this.props object */}
                {counters.map(counter =>                     
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
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