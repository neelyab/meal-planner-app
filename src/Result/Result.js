import React, {Component} from 'react';
import './Result.css'

class Result extends Component {
    render(){
        const { savedMeals } = this.props
        // find any recipes that are already added to cart
        const saved = savedMeals.find(meal => meal.recipe.label === this.props.label)
        return(
            <li key={this.props.id} className="result">
                <p className="label"><a target="_blank" href={this.props.url}  rel="noopener noreferrer">{this.props.label}</a></p>
                <img className="image-result" src={this.props.image} alt={this.props.label} />
                {this.props.healthLabels ? this.props.healthLabels.map((label, i) => {
                return <p key={i} className="health-labels">{label}</p>}
                ) : ''}
                 {this.props.dietLabels ? this.props.dietLabels.map((label, i) => {
                return <p key={i} className="health-labels">{label}</p>}
                ) : ''}
                <button type="button" onClick={()=>this.props.saveMeal(this.props.label)} className={saved ? 'saved-button' : 'save'}>{saved ? 'Added' : 'Add To Cart'}</button>
            </li>
        )
    }
}

export default Result;