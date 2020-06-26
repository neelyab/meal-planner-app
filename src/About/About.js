import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render(){
        return(
        <div>
            <section className="about">
                <div className="image"><p>picture</p></div>
                <p>Meal Planner App allows people to plan a meal together even if their diets are different.</p>
            </section>
            <section className="about">
                <div className="image"><p>picture</p></div>
                <p>Choose from a variety of dietary preferences and fully customize your meals to help you plan for the week ahead.</p>
            </section>
            <section className="about">
                <div className="image"><p>picture</p></div>
                <p>Save these meals to your account so you can easily access them later!</p>
            </section>
         </div>
        )
    }
}

export default About;