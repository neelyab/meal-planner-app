import React from 'react'
import ReactDOM from 'react-dom'
import MealCard from './MealCard'



it('renders without crashing', ()=>{
    const meal = {
        url: 'asdf',
        image: 'asdf',
        label: 'asdf',
        meal_id: 2
    }
    const div = document.createElement('div');
    ReactDOM.render(<MealCard meal={meal}/>, div);
    ReactDOM.unmountComponentAtNode(div)
})