/*  Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2s
    Stateless functional component example */
import React, {Component} from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">NavBar</a>
            <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
        </nav>
    );
};

export default NavBar;