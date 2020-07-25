import React, {Component} from 'react';
import About from './About/About';
import Nav from './Nav/Nav';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import MealPlanner from './MealPlanner/MealPlanner';
import SavedMeals from './SavedMeals/SavedMeals';
import {Route, Redirect} from 'react-router-dom';
import Home from './Home/Home.js'
import MealPlanContext from './mealPlanContext'
import config from './config';
import PublicRoute from './Utils/PublicOnlyRoute';
import PrivateRoute from './Utils/PrivateRoute';
import TokenService from './services/token-service'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state= {
      savedMealPlans: [],
      error: null
    }
  }
  componentDidUpdate = () => {
    this.setState({
      error: null
    })
  }
  saveMealPlan = (name, savedMeals) => {
    // format mealplan
    const mealPlan = {
      name,
      meals: savedMeals
    }

    const { savedMealPlans } = this.state;
    const token = TokenService.getAuthToken();
    fetch(`${config.API_ENDPOINT}/api/saved-meal-plans/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(mealPlan)
    })
    .then(res => {
      if(!res.ok){
        throw new Error()
      }
      return res.json()
    })
    .then(response => {
      // add meal plan to saved meal plans
      this.setState({
        savedMealPlans: [...savedMealPlans, mealPlan]
      })
    })
    .catch(err => {
      this.setState({
        error: 'Something went wrong, please try again later.'
      })
    })
  }
  deleteMeal = (meal) => {
    const { savedMealPlans } = this.state
    // filter out the mealplan to be deleted
    const updatedSavedMealPlans = savedMealPlans.filter(plan => plan.meals[0].mealplan_id !== meal)
    const token = TokenService.getAuthToken();
    fetch(`${config.API_ENDPOINT}/api/saved-meal-plans/${meal}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      if(!res.ok){
        throw new Error()
      }
      return;
    })
    .then(() => {
      // set state of saved meal plans with updated meal plans
      this.setState({
        savedMealPlans: updatedSavedMealPlans
      })
    })
    .catch(err => {
      this.setState({
        error: 'Something went wrong, please try again later.'
      })
    })

  }
  getMealPlans = () =>{
    // get meal plans for user
    const token = TokenService.getAuthToken();
    if (token){
        fetch(`${config.API_ENDPOINT}/api/saved-meal-plans/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
          if(!res.ok){
            throw new Error()
          }
          return res.json()
        })
        .then(response => {
          this.setState({
            savedMealPlans: response
          })
        })
        .catch(err => {
          this.setState({
            error: 'Something went wrong, please try again later.'
          })
        })
      }
  }
  render() {
    // set context with saved meal plans, delete meal function, and get saved meal plans function
    const contextValue = {
            savedMealPlans: this.state.savedMealPlans,
            deleteMeal: this.deleteMeal,
            getMealPlans: this.getMealPlans
         }
  return (
    <main className='App'>
      <MealPlanContext.Provider value={contextValue}>
      <Route path='/' component={Nav}/>
      <p>{this.state.error && this.state.error}</p>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/login' component={Login}/>
      <PublicRoute path='/signup' component={Signup}/>
      <PrivateRoute path='/saved-meals' component={SavedMeals}/>
        <Route path ='/meal-planner'  render={componentProps => (
        TokenService.hasAuthToken()
          ? <MealPlanner  saveMealPlan={this.saveMealPlan} {...componentProps} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location }
              }}
            />
          )}
        />
        </MealPlanContext.Provider>
    </main>
  )
    }
}

export default App;