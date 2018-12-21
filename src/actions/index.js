import axios from 'axios';
const API_KEY = 'ee49e144b0aa0c21d58d264f573a1d3e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	console.log("fetch request ====",request);
	return {
		type:FETCH_WEATHER,
		payload : request
	}
}
