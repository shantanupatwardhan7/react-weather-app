import React from 'react';
import {Sparklines , SparklinesLine ,SparklinesSpots ,SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';
function average(data){
	return _.round(_.sum(data)/data.length);
}
export default (props) =>{
	return(
		<div>
			<Sparklines height={120} width={180} data={props.data}>
			<SparklinesLine color={props.color}/>
			 <SparklinesReferenceLine type="avg" />
			<SparklinesSpots />
			</Sparklines>
			<div>{average(props.data)}{props.unit}</div>
		</div>
		);
}