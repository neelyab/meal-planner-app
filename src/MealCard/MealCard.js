import React, {Component} from 'react';
import './MealCard.css'
import MealPlanContext from '../mealPlanContext'
import './MealCard.css'

class MealCard extends Component {
    static contextType = MealPlanContext
    render(){
        return(
            <li key={this.props.id} className="result">
                <p><a target="_blank" href={this.props.url}  rel="noopener noreferrer">{this.props.label}</a></p>
                <img className="image-result" src={this.props.image} alt={this.props.label} />
                {/* {this.props.healthLabels ? this.props.healthLabels.map((label, i) => {
                return <p key={i} className="health-labels">{label}</p>}
                ) : ''}
                 {this.props.dietLabels ? this.props.dietLabels.map((label, i) => {
                return <p key={i} className="health-labels">{label}</p>}
                ) : ''}
                <button type="button" onClick={()=>this.context.deleteMeal(this.props.label)}>Delete</button> */}
            </li>
        )
    }
}

export default MealCard;