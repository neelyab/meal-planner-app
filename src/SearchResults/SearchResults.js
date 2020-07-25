import React, {Component} from 'react';
import Result from '../Result/Result'
import './SearchResults.css';



let numResults = 4;
class SearchResults extends Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()
            this.state = {
                page: 0
            }
        }
    handleForward = () => {
        this.setState({
            page: this.state.page + 1
        })
        // scroll to top of div
        this.scrollToMyRef()
    } 
    handleBack = () => {
        this.setState({
            page: this.state.page - 1
        })
        this.scrollToMyRef()
    }
    scrollToMyRef = () => { 
        // once search results are displayed, auto scroll to the top of the results
        window.scrollTo(0, this.myRef.current.offsetTop);  
    }
    render(){
        let searchResults
        let totalNumPages;
        if (this.props.results) {
           totalNumPages = this.props.results.length / numResults;
        }
        // if there are results to display, render Result component
        if (this.props.results) {
        // paginate results
            const {page} = this.state
        searchResults = this.props.results.slice((page * numResults), ((page * numResults) + numResults));
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
       <div className="search-results" ref={this.myRef}> 
                <ul className="search-results-list">
                    {this.props.results && this.props.results.length === 0 ? <p className="no-results">No results found</p> : 
                    searchResults}
                </ul>
                {this.props.results && 
            (<div className="search-buttons">
                {this.state.page > 0 ? <button type="button" id="search-results" onClick={() => this.handleBack()}>back</button> : <button className="hidden"></button>}
                {totalNumPages && (totalNumPages > this.state.page + 1) ? <button type="button" id="search-results" onClick={() => this.handleForward()}>next</button> :  <button className="hidden"></button> }
            </div>)
        }
      </div> 
        )
    }
}
export default SearchResults;