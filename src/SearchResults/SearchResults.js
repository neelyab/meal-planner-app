import React, {Component} from 'react';
import Result from '../Result/Result'
import './SearchResults.css';

class SearchResults extends Component {
    render(){
        let searchResults
        // if there are results to display, render Result component
        if (this.props.results) {
        searchResults = this.props.results.map((result, i) => {
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
                    {this.props.results && this.props.results.length === 0 ? 'No results found' : searchResults}
                </ul>
            <div className="search-buttons">
                {/* <button type="button" id="search-results">back</button>
                <button type="button" id="search-results">next</button> */}
            </div>
      </div> 
        )
    }
}
export default SearchResults;