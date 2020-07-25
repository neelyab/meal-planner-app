import React, {Component} from 'react';
import MealCard from '../MealCard/MealCard'
import './MealPlan.css'

class MealPlan extends Component {
    render(){
      const mealplan_id = this.props.savedMeals[0].mealplan_id
        const meals=this.props.savedMeals.map((meal, i ) =>{
            return <MealCard
            key={i}
            id={meal.meal_id} 
            url={meal.meal_url}
            label={meal.label} 
            image={meal.meal_image} 
            dietLabels={meal.dietlabels} 
            healthLabels={meal.healthlabels}/>
        })
        return(
        <div className="meal-plan">
            <h3>{this.props.name}</h3>
            <div className="meal-plan-meals">{meals}</div>
            <button className="delete-button" onClick={() => this.props.deleteMeal(mealplan_id)}>Delete</button>
        </div>
        )
    
    }
}
export default MealPlan;