import React, {Component} from 'react';
import './MealBuilder.css'

class MealBuilder extends Component {
    render(){
        const saved = this.props.savedMeals.length > 0 ? this.props.savedMeals.map((meal, i)=>{
        return <li key={i} className="meal-builder-recipe">
            {meal.recipe.label}
            <img className="image-result" src={meal.recipe.image} alt={meal.recipe.label}/>
            <button type="button" onClick={() => this.props.deleteMeal(meal)}>Delete</button>
        </li>
        }) : {}
        return(
        <form className="meal-builder">
            <p>Meal Plan Builder</p>
            <label htmlFor="meal-name">Name your meal or meal plan:</label>
            <input type="text"></input>
            <div className="saved-meals">
                {saved.length > 0 ? saved : ''}
            </div>
            <button type="button">Save Mealplan</button>
        </form>
        )
    }
}
export default MealBuilder;