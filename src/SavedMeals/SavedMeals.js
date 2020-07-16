import React, {Component} from 'react'
import MealPlan from '../MealPlan/MealPlan'
import MealPlanContext from '../mealPlanContext'
import './SavedMeals.css'

class SavedMeals extends Component {
    static contextType = MealPlanContext;
    componentDidMount = () => {
        this.context.getMealPlans()
    }
    render(){
        const mealPlans = this.context.savedMealPlans || [];
        console.log(mealPlans)
        let savedMeals;
        // only render if there are saved bookmarks
        if (mealPlans.length > 0) {
            savedMeals = mealPlans.map((plan, i) => {
                console.log(plan)
                return (
                    <MealPlanContext.Consumer key={i}>
                        {(context) => {
                            return (
                                <MealPlan 
                                    key={i} 
                                    name={plan.name} 
                                    savedMeals={plan.meals} 
                                    deleteMeal={context.deleteMeal} 
                                />
                            )
                        }}
                    </MealPlanContext.Consumer>
                ) 
            })
        } else {
            // otherwise render nothing
           savedMeals = ''
        }
        return(
        <div className="your-meal-plans">
            <h2>Your Meal Plans</h2>
            <div className="saved-meal-page">{savedMeals}</div>
        </div>
        )
    }
}
export default SavedMeals;