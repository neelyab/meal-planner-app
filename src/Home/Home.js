import React, {Component} from 'react';
import './Home.css'
import config from '../config'
import TokenService from '../services/token-service'
import { Link} from 'react-router-dom'

class Home extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('running')
        this.setState({
            // show loading icon until response
            error: null,
            loading: true
        });
        const credentials = { 
                username: 'demo', 
                password: 'Demo123!'
            };
            // post login credentials
        fetch(`${config.API_ENDPOINT}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(res => {
            // username.value = ''
            // password.value = ''
            // saved authToken and go to home page
            TokenService.saveAuthToken(res.authToken);
            this.props.history.push('/meal-planner')
        })
        .catch(res => {
            this.setState({
                error: res.error,
                loading: false
            });
        })
    }
    render(){
        // conditionally render button depending on whether user is logged in or not
        const token = TokenService.hasAuthToken();
        return(
            <div className="welcome-page">
                <div className="meal-planner-app">
                <h1>Meal Planner App</h1>
                <p>The meal planner app makes it easy for two people with different diets to plan meals together.</p>
                {token ? <Link to='/meal-planner' ><button>Get Started</button></Link> : <button onClick={this.handleSubmit}>Demo</button>}
                </div>
            </div>
        )
    }
}
export default Home;