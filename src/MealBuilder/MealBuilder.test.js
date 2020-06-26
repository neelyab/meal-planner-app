import React from 'react';
import ReactDOM from 'react-dom';
import MealBuilder from './MealBuilder';




it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<MealBuilder/>, div);
    ReactDOM.unmountComponentAtNode(div)
})