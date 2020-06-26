import React, {Component} from 'react';
import Search from '../Search/Search';
import MealBuilder from '../MealBuilder/MealBuilder';
import SearchResults from '../SearchResults/SearchResults';

class MealPlanner extends Component {
    render(){
        return(
            <div>
                <Search/>
                <MealBuilder/>
                <SearchResults/>
            </div>
        )
    }
}

export default MealPlanner;