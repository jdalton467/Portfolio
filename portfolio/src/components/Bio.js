import React from 'react';
// import logo from './logo.svg';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Foot from './components/Foot';
import './App.css';


class Bio extends React.Component{
	render(){
		return(
		<div>
		 	<Nav />
			<Story />
			<Foot />
		</div>
	   )
	}
}

export default Bio;