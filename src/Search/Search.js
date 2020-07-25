import React, {Component} from 'react';
import './Search.css'
import config from '../config'
import loader from '../../src/img/ajax-loader.gif'

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            peanut: false,
            sugar: false,
            treeNut: false,
            dietOne: null,
            dietTwo: null,
            searchTerm: null,
            error: null,
            loading: false
        }
    }
    // controlled form, the following three functions set state according to selection and input
    handleSearch = (value) => {
        this.setState({
            searchTerm: value
        })
    }
    handleDietOne = (e) => {
        this.setState({
            dietOne: e.target.value,
            error: null
        })
    }
    handleDietTwo = (e) => {
        this.setState({
            dietTwo: e.target.value,
            error: null
        })
    }
    handleSubmit(e){
        e.preventDefault();
        // check to make sure that both diets are selected
        if(!this.state.dietOne || !this.state.dietTwo){
            this.setState({
                error: 'Please select two diets'
            })

        }
        else {
            // clear any previous errors and display loader
            this.setState({
                error: null,
                loading: true
            })
            const search = this.state.searchTerm;
            const {dietOne, dietTwo} = this.state;
            const searchQueries = [dietOne, dietTwo];
            let searchTerms = [];
            searchQueries.forEach(search => {
                // form search query for diet types
                if(search === "Vegan" || search === "Vegetarian"){
                   searchTerms.push(`&healthLabels=${search}`)
                } else {
                    searchTerms.push(`&dietLabels=${search}`)
                }
            })
            const searchOne= searchTerms[0]
            const searchTwo=searchTerms[1]
            // fetch results from recipe api
            fetch(`${config.RECIPE_URL}q=${search}&app_key=${process.env.REACT_APP_API_KEY}&app_id=${process.env.REACT_APP_ID}${searchOne}${searchTwo}&from=0&to=100`)
            .then(res => {
                if(!res.ok){
                    throw new Error()
                } else {
                    return res.json()
                }
            })
            .then(response => {
                this.setState({
                    loading: false
                })
                this.props.handleResults(response.hits, searchQueries)
            })
            .catch(err => {
                this.setState( {
                    error: err.message,
                    loading: false
                })
            })
        }
    }
    render(){
        return(
            <>
            <form className="meal-search" onSubmit={(e)=>this.handleSubmit(e)}>
            <section className="search">
                <h2>Recipe Search</h2>
                <input placeholder="eggplant" type="text" onChange={(e)=>this.handleSearch(e.target.value)} required></input>
                <label htmlFor="diet">
                    Select 2 diets:
                </label>
                {this.state.error ? <p className="error-message">{this.state.error}</p> : ''}
                <select className="diet" name="diet-1" id="diet" onChange={(e)=>this.handleDietOne(e)} required>
                    <option name="select-one" value={null}>Select One</option>
                    <option name="balanced" value="Balanced">Balanced</option>
                    <option name="high-protein" value="High-Protein">High-Protein</option>
                    <option name="low-carb" value="Low-Carb">Low-Carb</option>
                    <option name="low-fat" value="Low-Fat">Low-Fat</option>
                    <option name="vegan" value="Vegan">Vegan</option>
                    <option name="vegetarian" value="Vegetarian">Vegetarian</option>
                </select>
                <select className="diet" name="diet-2" onChange={(e)=>this.handleDietTwo(e)} required>
                    <option name="select-one" value={null}>Select One</option>
                    <option name="balanced" value="Balanced">Balanced</option>
                    <option name="high-protein" value="High-Protein">High-Protein</option>
                    <option name="low-carb" value="Low-Carb">Low-Carb</option>
                    <option name="low-fat" value="Low-Fat">Low-Fat</option>
                    <option name="vegan" value="Vegan">Vegan</option>
                    <option name="vegetarian" value="Vegetarian">Vegetarian</option>
                </select>
                <button type="submit" className="submit" >Submit</button>
                </section>
              </form>
              <div className="loader-notification">
              {this.state.loading && <img src={loader} alt="loading icon" className="loader" />}
              </div>
              </>
        )
    }
}

export default Search;