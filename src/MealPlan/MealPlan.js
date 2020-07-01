import React, {Component} from 'react';
import MealCard from '../MealCard/MealCard'

class MealPlan extends Component {
    render(){
        const meals=this.props.savedMeals.map((meal, i ) =>{
            return <MealCard
            id={i} 
            url={meal.recipe.url}
            label={meal.recipe.label} 
            image={meal.recipe.image} 
            dietLabels={meal.recipe.dietLabels} 
            healthLabels={meal.recipe.healthLabels}/>
        })
        return(
        <div>
            <h3>{this.props.name}</h3>
            {meals}

        </div>
        )
    
    }
}
export default MealPlan;