import React, {Component} from 'react';
import About from './About/About';
import Nav from './Nav/Nav';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import MealPlanner from './MealPlanner/MealPlanner';
import {Route} from 'react-router-dom';
import Home from './Home/Home.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      savedMealPlans: []
    }
  }
  saveMealPlan = (name, savedMeals) => {
    const mealPlan = {
      name,
      savedMeals
    }
    const {savedMealPlans} = this.state;
    this.setState({
      savedMealPlans: [...savedMealPlans, mealPlan]
    })
  }
  render() {
  return (
    <main className='App'>
      <Route path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/meal-planner' render = {
        (props) => <MealPlanner saveMealPlan={this.saveMealPlan} {...props}/> }></Route>
    </main>
  )
    }
}

export default App;