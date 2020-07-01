import React, {Component} from 'react'
import MealPlan from '../MealPlan/MealPlan'
import MealPlanContext from '../mealPlanContext'
import './SavedMeals.css'

class SavedMeals extends Component {
    static contextType = MealPlanContext;
    render(){
        const mealPlans = this.context.savedMealPlans;
        console.log(mealPlans)
        let savedMeals;
        if (mealPlans.length > 0) {
        savedMeals = mealPlans.map(plan =>{
            return <MealPlan {...plan} />
        })} else {
           savedMeals = ''
        }
        return(
        <div className="saved-meal-page">{savedMeals}</div>
        )
    }
}
export default SavedMeals;