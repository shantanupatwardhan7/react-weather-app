import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{


	render(){

		if(!this.props.book){
		return (<div><h2>Please select book to view details</h2></div>);
		}
		return (
			<div>
			<h1>Book details</h1>
			<div>Title : {this.props.book.title}</div>
			<div>Pages : {this.props.book.pages}</div>
			</div>
			);
	}
}

function mapStateToProps(state){
	return {
		book:state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);