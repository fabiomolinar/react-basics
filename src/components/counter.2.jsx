/*  Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2s
    Conditional rendering */
import React, { Component } from 'react';

class Counter extends Component{
    state = {
        count: 1,
        tags: ['tag1', 'tag2', 'tag3']
    }
    /* Conditional logic is ran inside a function that returns the desired object */
    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags.</p>
        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        )
    }
    render(){
        return (
            <div>
                {this.renderTags()}
            </div>
        )            
    }
}

export default Counter;