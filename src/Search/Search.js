import React, {Component} from 'react';
import './Search.css'
import Store from '../DummyStore'
import config from '../config'

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
            error: null
        }
    }
    handleSugar = () => {
       this.setState({
           sugar: !this.state.sugar
       })
    }
    handlePeanut = () => {
        this.setState({
            peanut: !this.state.peanut
        })
     }
     handleTreeNut = () => {
        this.setState({
            treeNut: !this.state.treeNut
        })
     }
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
        // this will use the edamam recipe search API
        e.preventDefault();
        // check to make sure that both diets are selected
        if(!this.state.dietOne || !this.state.dietTwo){
            this.setState({
                error: 'Please select two diets'
            })

        }
        else {
            this.setState({
                error: null
            })
            const search = this.state.searchTerm;
            const {dietOne, dietTwo} = this.state;
            const searchQueries = [dietOne, dietTwo];
            let searchTerms = [];
            searchQueries.forEach(search => {
                // form search query for diet types
                if(search == "Vegan" || search == "Vegetarian"){
                   searchTerms.push(`&healthLabels=${search}`)
                } else {
                    searchTerms.push(`&dietLabels=${search}`)
                }
            })
            const searchOne= searchTerms[0]
            const searchTwo=searchTerms[1]
            // fetch results from recipe api
            fetch(`${config.RECIPE_URL}q=${search}&app_key=${config.RECIPE_API_KEY}&app_id=${config.APP_ID}${searchOne}${searchTwo}`)
            .then(res => {
                if(!res.ok){
                    throw new Error()
                } else {
                    return res.json()
                }
            })
            .then(response => {
                console.log(response)
                this.props.handleResults(response.hits)
            })
            .catch(err => {
                console.log(err)
            })
            

            // let finalResult;
            // // initially filter out results for the search term
            // const searchQueryMatch = Store.filter(result => {
            //  return result.recipe.label.toLowerCase().includes(search.toLowerCase())
            // }) 
            // // then filter results by diet
            // if(searchQueryMatch) {
            //   finalResult = searchQueryMatch.filter(result => {
            //         if (result.recipe.healthLabels.includes(dietOne) || result.recipe.healthLabels.includes(dietTwo) || result.recipe.dietLabels.includes(dietOne) || result.recipe.dietLabels.includes(dietTwo))
            //         {
            //             return result;
            //         }
            //     })
            // }
            // set the state of results on the meal planner component
            // this.props.handleResults(finalResult)
        }
    }
    render(){
        return(
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
                {/* <label htmlFor="sugar-conscious">Sugar Conscious</label>
                <input type="checkbox" name="sugar" value="sugar-conscious" checked={this.state.sugar} onChange={()=> this.handleSugar()}></input>
                <label htmlFor="tree-nut-free">Tree Nut Free</label>
                <input type="checkbox" name="tree-nut-free" value="tree-nut-free" checked={this.state.treeNut} onChange={()=> this.handleTreeNut()}></input>
                <label htmlFor="peanut-free">Peanut Free</label>
                <input type="checkbox" name="peanut-free" value="peanut-free" checked={this.state.peanut} onChange={()=> this.handlePeanut()}></input> */}
                <button type="submit" className="submit" >Submit</button>
                </section>
              </form>
        )
    }
}

export default Search;