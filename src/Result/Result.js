import React, {Component} from 'react';
import './Result.css'

class Result extends Component {
    render(){
        return(
            <li className="result">
                <p><a target="_blank" href={this.props.url}>{this.props.label}</a></p>
                <img className="image-result" src={this.props.image} alt={this.props.label} />
                {this.props.healthLabels ? this.props.healthLabels.forEach(label => <p>{label}</p>) : ''}
            </li>
        )
    }
}

export default Result;