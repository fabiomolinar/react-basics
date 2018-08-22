/*  Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2s
    Changing data with parent:
        Delete the state from the child object and use this.props instead.
        Then, to communicate with the parent, use references to functions 
        on the parent instead, using this.props to send the reference */
    import React, { Component } from 'react';

    class Counter extends Component{
        render(){
            return (
                <div>
                    {/* Showing how to use children */}
                    {this.props.children}
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.props.counter.value}</span>
                    {/* For events, instead of calling the function, we just pass the reference to it. */}
                    <button onClick={this.props.onIncrement.bind(this,this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={this.props.onDelete.bind(this,this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                </div>
            )            
        }
    
        getBadgeClasses() {
            let classes = "badge m-2 ";
            classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
            return classes;
        }
    }
    
    export default Counter;