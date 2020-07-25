import React, {Component} from 'react';
import './Home.css'
import tokenService from '../services/token-service'
import { Link} from 'react-router-dom'

class Home extends Component {
    render(){
        // conditionally render button depending on whether user is logged in or not
        const token = tokenService.hasAuthToken();
        return(
            <div className="welcome-page">
                <div className="meal-planner-app">
                <h1>Meal Planner App</h1>
                <p>The meal planner app makes it easy for two people with different diets to plan meals together.</p>
                {token ? <Link to='/meal-planner' ><button>Get Started</button></Link> : <Link to='/signup' ><button>Sign Up</button></Link>}
                </div>
            </div>
        )
    }
}
export default Home;