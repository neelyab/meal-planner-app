import React, {Component} from 'react';
import './Home.css'

class Home extends Component {
    render(){
        return(
            <div className="welcome-page">
                <h1>Meal Planner App</h1>
                <p>The meal planner app makes it easy for two people with different diets to plan meals together.</p>
            </div>
        )
    }
}
export default Home;