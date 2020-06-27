import React, {Component} from 'react';
import './Search.css'

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
            otherPreferences: []
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
            dietOne: e.target.value
        })
    }
    handleDietTwo = (e) => {
        this.setState({
            dietTwo: e.target.value
        })
    }
    render(){
        return(
            <form className="meal-search">
                <section className="search">
                <p>Search Recipes</p>
                <input type="text" onChange={(e)=>this.handleSearch(e.target.value)} required></input>
                <label htmlFor="diet">
                    Select 2 diets:
                </label>
                <select className="diet" name="diet-1" id="diet" onChange={(e)=>this.handleDietOne(e)} required>
                    <option name="select-one" value={null}>Select One</option>
                    <option name="balanced" value="balanced">Balanced</option>
                    <option name="high-protein" value="high-protein">High-Protein</option>
                    <option name="low-carb" value="low-carb">Low-Carb</option>
                    <option name="low-fat" value="low-fat">Low-Fat</option>
                    <option name="vegan" value="vegan">Vegan</option>
                    <option name="vegetarian" value="vegetarian">Vegetarian</option>
                </select>
                <select className="diet" name="diet-2" onChange={(e)=>this.handleDietTwo(e)} required>
                    <option name="select-one" value={null}>Select One</option>
                    <option name="balanced" value="balanced">Balanced</option>
                    <option name="high-protein" value="high-protein">High-Protein</option>
                    <option name="low-carb" value="low-carb">Low-Carb</option>
                    <option name="low-fat" value="low-fat">Low-Fat</option>
                    <option name="vegan" value="vegan">Vegan</option>
                    <option name="vegetarian" value="vegetarian">Vegetarian</option>
                </select>
                <label htmlFor="sugar-conscious">Sugar Conscious</label>
                <input type="checkbox" name="sugar" value="sugar-conscious" checked={this.state.sugar} onChange={()=> this.handleSugar()}></input>
                <label htmlFor="tree-nut-free">Tree Nut Free</label>
                <input type="checkbox" name="tree-nut-free" value="tree-nut-free" checked={this.state.treeNut} onChange={()=> this.handleTreeNut()}></input>
                <label htmlFor="peanut-free">Peanut Free</label>
                <input type="checkbox" name="peanut-free" value="peanut-free" checked={this.state.peanut} onChange={()=> this.handlePeanut()}></input>
                <button type="submit" className="submit" >Submit</button>
                </section>
              </form>
        )
    }
}

export default Search;