import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term : ''};
	}
	onInputChange(e){
		console.log(e.target.value);
		this.setState({ term : e.target.value});
	}
	onFormSubmit(e){
		e.preventDefault();
		this.props.fetchWeather(this.state.term);
	}

	render(){
		return(
			<form 
			onSubmit={this.onFormSubmit.bind(this)}
			className="input-group"
			>
			<input 
			placeholder="Enter city name to get weather report"
			className="form-control"
			onChange={this.onInputChange.bind(this)}
			value = {this.state.term}
			
			/>
			<span className="input-group-btn">
			<button className="btn btn-info">Search</button>
			</span>
			</form>
			);
	}
}
function mapDistpatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}

export default connect (null,mapDistpatchToProps)(SearchBar);