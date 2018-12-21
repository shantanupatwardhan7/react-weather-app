import React, { Component } from 'react';
// import BookList from '../containers/BookList';
// import BookDetail from '../containers/book-detail';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
