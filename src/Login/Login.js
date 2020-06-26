import React, {Component} from 'react';

class Login extends Component {
    render(){
        return(
            <form className ="login">
              <label htmlFor="email">Email</label>
              <input type="text" name="email"></input>
              <label htmlFor="password" name="password">Password</label>
              <input type="text" name="password"></input>
              <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;