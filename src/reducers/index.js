import { combineReducers } from 'redux';
import BookReducer from './reducer-books';
import ActiveBook from './reducer_active_book';
import WeatherReducer from './reducer_weather';
const rootReducer = combineReducers({
	books: BookReducer,
	activeBook:ActiveBook,
	weather:WeatherReducer

});

export default rootReducer;