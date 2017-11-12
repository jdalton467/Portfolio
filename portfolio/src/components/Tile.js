import React from 'react';
// import logo from './logo.svg';
import {Card, CardTitle} from 'react-materialize'
import '../App.css';

class Tile extends React.Component {
	constructor(){
		super()
	}

	render(){
		return(
			<Card className='small' title={this.props.title}
				header={<CardTitle image={this.props.image}></CardTitle>}>

			</Card>
		);
	}
}

export default Tile;