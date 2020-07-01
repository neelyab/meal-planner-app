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
                <div className="image"><img src={meal} alt="meal" /></div>
                <p>Meal Planner App allows people to plan a meal together even if their diets are different.</p>
            </section>
            <section className="about">
                <div className="image"><img src={soup} alt="soup" /></div>
                <p>Choose from a variety of dietary preferences and fully customize your meals to help you plan for the week ahead.</p>
            </section>
            <section className="about">
                <div className="image"><img src={veggies} alt="veggies" /></div>
                <p>Save these meals to your account so you can easily access them later!</p>
            </section>
         </div>
        )
    }
}

export default About;