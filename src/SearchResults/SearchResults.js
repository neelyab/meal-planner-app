import React, {Component} from 'react';
import './SearchResults.css';

class SearchResults extends Component {
    render(){
        return(
       <div className="search-results">
            <p>Search Results</p>
                <ul>
                    <li>Result</li>
                    <li>Result</li>
                    <li>Result</li>
                </ul>
            <div className="search-buttons">
                <button type="button" id="search-results">back</button>
                <button type="button" id="search-results">next</button>
            </div>
      </div> 
        )
    }
}
export default SearchResults;