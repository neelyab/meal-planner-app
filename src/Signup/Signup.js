import React, {Component} from 'react';
import './Signup.css'

class Signup extends Component {
    render(){
        return(
            <form className="signup">
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name"></input>
              <label htmlFor="email">Email</label>
              <input type="text" name="email"></input>
              <label htmlFor="password" name="password">Password</label>
              <input type="text" name="password"></input>
              <label htmlFor="repeat-password" name="repeat-password">Repeat Password</label>
              <input type="text" name="repeat-password"></input>
              <button>Submit</button>
            </form>
        )
    }
}

export default Signup;