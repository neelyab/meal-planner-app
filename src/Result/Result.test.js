import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';



it('renders without crashing', ()=>{
    const result = {
        id: 1,
        label: 'asdf',
        url: 'asdf',
        healthLabels: [],
        dietLabels: []
    }
    const savedMeals = []
    const div = document.createElement('div');
    ReactDOM.render(<Result result= {result} savedMeals={savedMeals}/>, div);
    ReactDOM.unmountComponentAtNode(div)
})