import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/meal-planner'>Meal Planner</Link></li>
                    <li><Link to='/saved-meals'>Saved Meal Plans</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;