import React, {Component} from 'react';
import './MealBuilder.css'

class MealBuilder extends Component {
    constructor(props){
        super(props)
        this.input = React.createRef();
        this.state={
            error: null,
            savedStatus: false
        }
    }
    timeoutFunction(){
        this.setState({
            savedStatus: false
        })
    }
    render(){
        // render the meals saved in MealBuilder component
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
            <input type="text" name="meal-name" ref={this.input} required></input>
             {this.state.error ? <p>{this.state.error}</p>: ''}
             {this.state.savedStatus ? <p>Meal plan saved!</p> : ''}
            <div className="saved-meals">
                {saved.length > 0 ? saved : ''}
            </div>
            <button type="button" onClick={() => 
            {   if(this.input.current.value === ''){
                this.setState({
                    error: 'please enter a name'
                })
            } else if(this.props.savedMeals.length === 0){
                this.setState({
                    error: 'please save at least one meal to the meal plan'
                })
            }
            else {
                this.props.submitMealPlan(this.input.current.value, this.props.savedMeals)
                this.input.current.value = null;
                this.setState({
                    savedStatus: true,
                    error: null
                })
                setTimeout(() => this.timeoutFunction(), 3000)
            }
            }
            }>Save Mealplan</button>
        </form>
        )
    }
}
export default MealBuilder;