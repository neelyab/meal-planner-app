import React from 'react';
import ReactDOM from 'react-dom';
import MealPlanner from './MealPlanner';



it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<MealPlanner/>, div);
    ReactDOM.unmountComponentAtNode(div)
})