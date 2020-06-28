import React, {Component} from 'react';
import Search from '../Search/Search';
import MealBuilder from '../MealBuilder/MealBuilder';
import SearchResults from '../SearchResults/SearchResults';

class MealPlanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: null,
            savedMeals: []
        }
    }
    handleResults = (results) => {
        // set state of search results
        this.setState({
            results
        })
    }
    saveMeal = (meal) => {
        //save individual meal into MealBuilder component
        // prevent duplicate recipes from being saved
        if (this.state.savedMeals.find(saved => saved.recipe.label === meal)){
            return;
        } else {
            // find full recipe in results
            const fullRecipe = this.state.results.find(result => result.recipe.label === meal)
            // make a copy of savedMeals array
            const savedMeals = this.state.savedMeals
            // save recipe to array and set state with new array
            savedMeals.push(fullRecipe);
            this.setState({
                savedMeals
            })
        }
    }
    deleteMeal = (meal) => {
        const saved = this.state.savedMeals
        const newArray = saved.filter(savedMeal => savedMeal.recipe.label !== meal.recipe.label)
        this.setState({
            savedMeals: newArray
        })
    }
    submitMealPlan = (name, mealPlan) => {
        this.props.saveMealPlan(name, mealPlan)
        this.setState({
            savedMeals: []
        })
    }
    render(){
        return(
            <div>
                <Search handleResults={this.handleResults} />
                <MealBuilder savedMeals={this.state.savedMeals} deleteMeal={this.deleteMeal} submitMealPlan={this.submitMealPlan}/>
                <SearchResults results={this.state.results} saveMeal={this.saveMeal}/>
            </div>
        )
    }
}

export default MealPlanner;