import React, {Component} from 'react';
import Search from '../Search/Search';
import MealBuilder from '../MealBuilder/MealBuilder';
import SearchResults from '../SearchResults/SearchResults';

class MealPlanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: null
        }
    }
    handleResults = (results) => {
        // set state of search results
        this.setState({
            results
        })
    }
    render(){
        return(
            <div>
                <Search handleResults={this.handleResults}/>
                <MealBuilder/>
                <SearchResults results={this.state.results}/>
            </div>
        )
    }
}

export default MealPlanner;