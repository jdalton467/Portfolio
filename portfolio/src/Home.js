import React from 'react';
// import logo from './logo.svg';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Foot from './components/Foot';
import {Carousel} from 'react-materialize';
import './App.css';


class Home extends React.Component{
	render(){
		return(
		<div>
		 	<Nav />
			<Gallery />
			<Foot />
		</div>
	   )
	}
}

export default Home;