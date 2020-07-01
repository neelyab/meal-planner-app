import React, {Component} from 'react';
import './Result.css'

class Result extends Component {
    render(){
        const { savedMeals } = this.props
        const saved = savedMeals.find(meal => meal.recipe.label === this.props.label)
        return(
            <li key={this.props.id} className="result">
                <p><a target="_blank" href={this.props.url}  rel="noopener noreferrer">{this.props.label}</a></p>
                <img className="image-result" src={this.props.image} alt={this.props.label} />
                {this.props.healthLabels ? this.props.healthLabels.map((label, i) => {
                return <p key={i} className="health-labels">{label}</p>}
                ) : ''}
                 {this.props.dietLabels ? this.props.dietLabels.map((label, i) => {
                return <p key={i} className="health-labels">{label}</p>}
                ) : ''}
                <button type="button" onClick={()=>this.props.saveMeal(this.props.label)} className={saved ? 'saved-button' : 'save'}>{saved ? 'saved' : 'save'}</button>
            </li>
        )
    }
}

export default Result;