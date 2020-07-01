import React, {Component} from 'react';
import './MealBuilder.css'

class MealBuilder extends Component {
    constructor(props){
        super(props)
        // create ref for input field
        this.input = React.createRef();
        this.state={
            error: null,
            savedStatus: false,
        }
    }
    timeoutFunction(){
        this.setState({
            // call this function after saved message has been shown
            savedStatus: false
        })
        // x out of the modal
        this.props.toggleModal()
    }
    render(){
        // render the meals saved in MealBuilder component
        const saved = this.props.savedMeals.length > 0 ? this.props.savedMeals.map((meal, i) => {
            return (
            <li key={i} className="meal-builder-recipe">
                <img className="image-result" src={meal.recipe.image} alt={meal.recipe.label}/>
                <p>{meal.recipe.label}</p>
                <button onClick={() => this.props.deleteMeal(meal)}>Delete</button>
            </li>
            )
        }) : {}
        return (
        <form className="meal-builder">
            <span className="toggle-modal" onClick={() => this.props.toggleModal()}>x</span>
            <h2>Meal Plan Builder</h2>
            <label htmlFor="meal-name">Name your meal plan:</label>
            <input type="text" name="meal-name" ref={this.input} required></input>
                    {this.state.error ? <p className="error-message">{this.state.error}</p> : ''}
                    {this.state.savedStatus ? <p className="success-message">Meal plan saved!</p> : ''}
            <div className="saved-meals">
                {saved.length > 0 ? saved : ''}
            </div>
            <button 
            type="button" 
            onClick={() => 
                {   if(this.input.current.value === ''){
                    // check to make sure input field is filled out
                    this.setState({
                        error: 'Please enter a name'
                    })
                } else if(this.props.savedMeals.length === 0){
                    //check to see if there is at least one saved meal
                    this.setState({
                        error: 'Please save at least one meal to the meal plan'
                    })
                }
                    else {
                        this.props.submitMealPlan(this.input.current.value, this.props.savedMeals)
                        // clear input value
                        this.input.current.value = null;
                        this.setState({
                            //show meal saved message
                            savedStatus: true,
                            error: null
                        })
                        // set timeout for 2 seconds so that message will disappear
                        setTimeout(() => this.timeoutFunction(), 2000)
                    }
                }
                }
            >Save Mealplan</button>
        </form>
        )
    }
}
export default MealBuilder;