import React, {Component} from 'react';
import './Result.css'

class Result extends Component {
    render(){
        return(
            <li className="result">
                <p><a target="_blank" href={this.props.url}>{this.props.label}</a></p>
                <img className="image-result" src={this.props.image} alt={this.props.label} />
                {this.props.healthLabels ? this.props.healthLabels.map(label => {
                return <p className="health-labels">{label}</p>}
                ) : ''}
                 {this.props.dietLabels ? this.props.dietLabels.map(label => {
                return <p className="health-labels">{label}</p>}
                ) : ''}
                <button type="button" onClick={()=>this.props.saveMeal(this.props.label)}>Save</button>
            </li>
        )
    }
}

export default Result;