import React, {Component} from 'react';
import './MealCard.css'
import MealPlanContext from '../mealPlanContext'
import './MealCard.css'

class MealCard extends Component {
    static contextType = MealPlanContext
    render(){
        return(
            <li key={this.props.meal_id} className="result">
                <p><a target="_blank" href={this.props.url}  rel="noopener noreferrer">{this.props.label}</a></p>
                <img className="image-result" src={this.props.image} alt={this.props.label} />
            </li>
        )
    }
}

export default MealCard;