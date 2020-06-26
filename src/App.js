import React from 'react';
import About from './About/About';
import Nav from './Nav/Nav';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import MealPlanner from './MealPlanner/MealPlanner';
import {Route} from 'react-router-dom';

function App() {
  return (
    <main className='App'>
      <Route path='/' component={Nav}/>
      <Route path='/about' component={About}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/meal-planner' component={MealPlanner}/>
    </main>
  );
}

export default App;