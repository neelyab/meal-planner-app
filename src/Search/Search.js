import React, {Component} from 'react';
import './Search.css'

class Search extends Component {
    render(){
        return(
            <form className="meal-search">
                <section className="search">
                <p>Search Recipes</p>
                <input type="text"></input>
                <label htmlFor="diet">
                    Select 2 diets:
                </label>
                <select className="diet" name="diet-1" id="diet">
                    <option>Select One</option>
                    <option>Keto</option>
                    <option>Paleo</option>
                    <option>Vegan</option>
                    <option>Vegetarian</option>
                    <option>Gluten Free</option>
                        <option></option>
                </select>
                <select className="diet" name="diet-2">
                    <option>Select One</option>
                    <option>Low-Carb</option>
                    <option>Vegan</option>
                    <option>Vegetarian</option>
                </select>
                <button type="submit" className="submit" >Submit</button>
                </section>
              </form>
        )
    }
}

export default Search;