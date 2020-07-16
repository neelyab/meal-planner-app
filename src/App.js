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
    }
  }
  saveMealPlan = (name, savedMeals) => {
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
      this.setState({
        savedMealPlans: [...savedMealPlans, mealPlan]
      })
    })
    .catch(err => console.log(err.message))
  }
  deleteMeal = (meal) => {
    const { savedMealPlans } = this.state
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
      this.setState({
        savedMealPlans: updatedSavedMealPlans
      })
    })
    .catch(err => console.log(err.message))

  }
  getMealPlans = () =>{
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
        .catch(err => console.log(err.message))
      }
  }
  render() {
    const contextValue = {
            savedMealPlans: this.state.savedMealPlans,
            deleteMeal: this.deleteMeal,
            getMealPlans: this.getMealPlans
         }
  return (
    <main className='App'>
      <MealPlanContext.Provider value={contextValue}>
      <Route path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>
      {/* <Route exact path='/' render= {
        (props) => <SavedMeals {...props}/>}></Route> */}
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