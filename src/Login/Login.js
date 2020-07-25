import React, {Component} from 'react';
import './Login.css'
import TokenService from '../services/token-service'
import config from '../config'
import loader from '../img/ajax-loader.gif'

class Login extends Component {
    state= {
        error: null,
        loading: false
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            // show loading icon until response
            error: null,
            loading: true
        });
        const { username, password } = e.target;
        const credentials = { 
                username: username.value, 
                password: password.value
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
            username.value = ''
            password.value = ''
            // saved authToken and go to home page
            TokenService.saveAuthToken(res.authToken);
            this.props.history.push('/');
        })
        .catch(res => {
            this.setState({
                error: res.error,
                loading: false
            });
        })
    }
    render(){
        return(
          <div className="signup-login">
              <div className="form-container">
                <form className="login" onSubmit={this.handleSubmit}>
                    <h2>Log In</h2>
                    <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required></input>
                    <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required></input>
                    {this.state.error && <p className="error-message">{this.state.error}</p>}
                    <button type="submit">Submit</button>
                    {this.state.loading && <img src={loader} alt="loading icon" className="loader"/>}
                </form>
                </div>
            </div>
        )
    }
}

export default Login;