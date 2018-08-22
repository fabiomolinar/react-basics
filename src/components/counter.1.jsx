/*  Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2s */
import React, { Component } from 'react';

class Counter extends Component{
    state = {
        count: 1,
        tags: ['tag1', 'tag2', 'tag3']
    }
    /* NOT A GOOD IDEA to use styles like this. Better to use classes and css*/
    styles = {
        fontSize: 12,
        fontWeight: 'bold' 
    }
    render(){
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.state.count}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        )            
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }
}

export default Counter;