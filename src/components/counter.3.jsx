/*  Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2s
    Looking at events */
    import React, { Component } from 'react';

    class Counter extends Component{
        state = {
            value: this.props.counter.value
        }
        /* event handlers do not get the 'this' reference to the object.
           This is fixed by binding the object to the function. 
           The best place to do this is often the object constructor. */
        handleIncrement(){
            /*  If we just change the state like this:
                this.state.count++;
                the UI won't be updated. To change the state and update the UI
                we  need to use the function setState() on the object.
                The setState() is as asynchronous call to render() */
            this.setState({value: this.state.value + 1});
        }
        handleProduct(product){
            /* handle product here */
            console.log(product);
        }
        product = {/**
            * an object we want to pass to the handle
            */
            id: "my product"
        }
        constructor(props){
            super(props);
            /* Binding the object to the event handler */
            this.handleIncrement = this.handleIncrement.bind(this);
        }
        render(){
            return (
                <div>
                    {/* Showing how to use children */}
                    {this.props.children}
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.state.value}</span>
                    {/* For events, instead of calling the function, we just pass the reference to it. */}
                    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={this.props.onDelete.bind(this,this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                    {/* To pass an argument to our function, since we can only pass a function reference,
                        we need to use bind function to call our function with arguments */}
                    <button onClick={this.handleProduct.bind(this,this.product)} className="btn btn-secondary btn-sm">Pass object</button>
                </div>
            )            
        }
    
        getBadgeClasses() {
            let classes = "badge m-2 ";
            classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
            return classes;
        }
    }
    
    export default Counter;