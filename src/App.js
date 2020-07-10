import React, {Component} from 'react';
import About from './About/About';
import Nav from './Nav/Nav';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import MealPlanner from './MealPlanner/MealPlanner';
import SavedMeals from './SavedMeals/SavedMeals';
import {Route} from 'react-router-dom';
import Home from './Home/Home.js'
import MealPlanContext from './mealPlanContext'
import uuid from 'react-uuid';
import config from './config'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      savedMealPlans: [],
    }
  }
  saveMealPlan = (name, savedMeals) => {
    const mealPlan = {
      id: uuid(),
      name,
      savedMeals
    }
    const { savedMealPlans } = this.state;
    this.setState({
      savedMealPlans: [...savedMealPlans, mealPlan]
    })
  }
  deleteMeal = (meal) => {
    console.log('deleting meal')
  }
  // componentDidMount = () => {
  //   fetch(`${config.CLIENT_URL}/saved-meal-plans`, {
  //     method: 'GET',
  //     headers:''
  //   })
  // }
  render() {
    const contextValue = {
            savedMealPlans: this.state.savedMealPlans,
            deleteMeal: this.deleteMeal
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
      <Route path='/signup' component={Signup}/>
      <Route path='/saved-meals' component={SavedMeals}/>
      <Route path='/meal-planner' render= {
        (props) => <MealPlanner saveMealPlan={this.saveMealPlan} {...props}/> }></Route>
        </MealPlanContext.Provider>
    </main>
  )
    }
}

export default App;