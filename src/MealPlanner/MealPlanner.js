import React, {Component} from 'react';
import Search from '../Search/Search';
import MealBuilder from '../MealBuilder/MealBuilder';
import SearchResults from '../SearchResults/SearchResults';
import './MealPlanner.css'
import shoppingCart from '../img/shopping-cart.png'

class MealPlanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: null,
            savedMeals: [],
            displayModal: false
        }
    }
    handleResults = (searchResults, search) => {
        // this function filters the recipe api results further to make sure both diets are included in the results
        let finalResult;
        //base case return results
        if (!search || search === undefined){
            this.setState({
                results: searchResults
            });
        }
        // filter health labels for vegan or vegetarian queries
        // else if (search[0] === "Vegan" || search[0] === "Vegetarian"){
        //    finalResult = searchResults.filter(result => result.recipe.healthLabels.includes(search[0]));
        //     return this.handleResults(finalResult, search.slice[0]);
        // }
        // filter diet labels for other queries 
        else {
            finalResult = searchResults.filter(result => result.recipe.healthLabels.includes(search[0]) || result.recipe.dietLabels.includes(search[0]));
            return this.handleResults(finalResult, search.slice[0]);
        }
    }
    saveMeal = (meal) => {
        //save individual meal into MealBuilder component
        // prevent duplicate recipes from being saved
        if (this.state.savedMeals.find(saved => saved.recipe.label === meal)){
            return;
        } else {
            // find full recipe in results
            const fullRecipe = this.state.results.find(result => result.recipe.label === meal);
            // make a copy of savedMeals array
            const savedMeals = this.state.savedMeals;
            // save recipe to array and set state with new array
            savedMeals.push(fullRecipe);
            this.setState({
                savedMeals
            });
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
        let allMealPlans = []
        // format the recipes to be submitted
      mealPlan.forEach(meal => {
            const healthLabels= meal.recipe.healthLabels.join(', ')
            const dietLabels = meal.recipe.dietLabels.join(', ')
            const plan = {
                dietlabels: dietLabels,
                healthlabels: healthLabels,
                label: meal.recipe.label,
                meal_image: meal.recipe.image,
                meal_url: meal.recipe.shareAs,
            }
            allMealPlans.push(plan)
        })
        this.props.saveMealPlan(name, allMealPlans);
        this.setState({
            savedMeals: []
        });
    }
    toggleModal = () =>{
        this.setState({
            displayModal: !this.state.displayModal
        });
    }
    render(){
        const saved = this.state.savedMeals.length;
        let numberSaved;
        if (saved > 0 ){
            numberSaved = this.state.savedMeals.length;
        } 
        return(
            <div>
                <div className="saved-recipes-notification" onClick={() => this.toggleModal()} >
                    <p>Saved Recipes</p>
                    <img src={shoppingCart} alt="shopping cart icon" id="shopping-cart"/>
                    <span className="number-notification">{numberSaved ? numberSaved : ''}</span>
                </div>
                <Search handleResults={this.handleResults} />
                <SearchResults results={this.state.results} saveMeal={this.saveMeal} savedMeals={this.state.savedMeals}/>
                <div id="modal" className={this.state.displayModal ? 'modal display': 'modal'}>
                <MealBuilder savedMeals={this.state.savedMeals} deleteMeal={this.deleteMeal} submitMealPlan={this.submitMealPlan} toggleModal={this.toggleModal}/>
                </div>
            </div>
        )
    }
}

export default MealPlanner;