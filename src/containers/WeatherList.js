import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component{
	// getRandomColor() {
	//   var letters = '0123456789ABCDEF';
	//   var color = '#';
	//   for (var i = 0; i < 6; i++) {
	//     color += letters[Math.floor(Math.random() * 16)];
	//   }
	//   return color;
	// }

	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp),(temp) => temp - 273);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const {lon,lat} = cityData.city.coord;

		return(
			<tr key={name}>
				<td>{name}</td>
				
				<td>
				<Chart data={temps} color="orange" unit="C"/>
				</td>
				<td>
				<Chart data={pressure} color="blue" unit="hPa"/>
				</td>
				<td>
				<Chart data={humidity} color="green" unit="%"/>
				</td>
			</tr>
		);  
	}
	render(){
		return(
			<table className="table table-hover">
				<thead>
				<tr>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			);
	}
}

function mapStateToProps(state){
	return{weather:state.weather};
}
export default connect(mapStateToProps)(WeatherList)