import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import TokenService from '../services/token-service'

class Nav extends Component {
    logOut = () => {
        TokenService.clearAuthToken();
    }
    render(){
        const token = TokenService.hasAuthToken();
        return(
            <nav>
                <ul>
                    {!token ? <>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Log In</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </>
                    :
                    <>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/meal-planner'>Meal Planner</Link></li>
                    <li><Link to='/saved-meals'>Saved Plans</Link></li>
                    <li><Link to='/login' onClick={this.logOut}>Logout</Link></li>
                    </>
                    
                }
                </ul>
            </nav>
        )
    }
}

export default Nav;