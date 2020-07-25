import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import TokenService from '../services/token-service'

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggler: false
        }
    }
    handleClick = () => {
        this.setState({
            // toggles checkbox for hamburger menu on mobile view
            toggler: !this.state.toggler
        })
    }
    logOut = () => {
        TokenService.clearAuthToken();
    }
    render(){
        const token = TokenService.hasAuthToken();
        return(
            <>
            <nav className="menu-wrap">
                <input type="checkbox" className="toggler" checked={this.state.toggler} onChange = {this.handleClick}></input>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                                        
                            <ul>
                                {!token ? <>
                                    <li onClick={this.handleClick}  ><Link to='/'>Home</Link></li>
                                    <li onClick={this.handleClick}  ><Link to='/signup'>Sign Up</Link></li>
                                    <li onClick={this.handleClick} ><Link to='/login'>Log In</Link></li>
                                    <li onClick={this.handleClick} ><Link to='/about'>About</Link></li>
                                </>
                                :
                                <>
                                <li onClick={this.handleClick} ><Link to='/'>Home</Link></li>
                                <li onClick={this.handleClick} ><Link to='/about'>About</Link></li>
                                <li onClick={this.handleClick} ><Link to='/meal-planner'>Meal Planner</Link></li>
                                <li onClick={this.handleClick} ><Link to='/saved-meals'>Saved Plans</Link></li>
                                <li onClick={this.handleClick} ><Link to='/login' onClick={this.logOut}>Logout</Link></li>
                                </>
                                
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}

export default Nav;