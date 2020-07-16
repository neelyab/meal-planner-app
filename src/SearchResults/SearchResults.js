import React, {Component} from 'react';
import Result from '../Result/Result'
import './SearchResults.css';
let numResults = 5;
class SearchResults extends Component {
    constructor(props){
        super(props)
            this.state = {
                page: 0
            }
        }
    handleForward = () => {
        this.setState({
            page: this.state.page + 1
        })
    } 
    handleBack = () => {
        this.setState({
            page: this.state.page - 1
        })
    }
    render(){
        let searchResults
        // if there are results to display, render Result component
        if (this.props.results) {
        // paginate results
            const {page} = this.state
        searchResults = this.props.results.slice(page, (page + numResults));
        searchResults = searchResults.map((result, i) => {
          const {label, url, image, dietLabels, healthLabels} = result.recipe
          return  <Result 
                    key={i} 
                    id={i}
                    label={label} 
                    url={url} 
                    image={image} 
                    dietLabels={dietLabels} 
                    healthLabels={healthLabels} 
                    saveMeal={this.props.saveMeal} 
                    results={this.props.results}
                    savedMeals={this.props.savedMeals}
                    />
        })
     }
        return(
       <div className="search-results"> 
            <p>Search Results</p>
                <ul className="search-results-list">
                    {this.props.results && this.props.results.length === 0 ? 'No results found' : 
                    searchResults}
                </ul>
                {this.props.results && 
            (<div className="search-buttons">
                {this.state.page > 0 ? <button type="button" id="search-results" onClick={() => this.handleBack()}>back</button> : ''}
                {this.state.page < (this.props.results.length / numResults) ? <button type="button" id="search-results" onClick={() => this.handleForward()}>next</button> : '' }
            </div>)
        }
      </div> 
        )
    }
}
export default SearchResults;