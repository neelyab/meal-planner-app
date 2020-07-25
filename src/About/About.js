import React, {Component} from 'react';
import './About.css';
import meal from '../img/meal.jpg';
import soup from '../img/soup.jpg';
import veggies from '../img/veggies.jpg'

class About extends Component {
    render(){
        return(
        <div>
            <section className="about">
                <div className="image"><img src={meal} alt="meal" className="meal-image"/><div className="shape"></div></div>
                <p>Meal Planner App allows you to plan meals together with another person even if your diets are different.</p>
            </section>
            <section className="about">
                <div className="image"><img src={soup} alt="soup" className="meal-image"/><div className="shape-even"></div></div>
                <p>Choose from a variety of dietary preferences and fully customize your meals to help you plan for the week ahead.</p>
            </section>
            <section className="about">
                <div className="image"><img src={veggies} alt="veggies" className="meal-image" /><div className="shape"></div></div>
                <p>Save these meals to your account so you can easily access them later!</p>
            </section>
         </div>
        )
    }
}

export default About;