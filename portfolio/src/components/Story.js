import React from 'react';
// import logo from './logo.svg';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Foot from './components/Foot';
import './App.css';


class Story extends React.Component{
	render(){
		return(
		<div>
		 	<h1>About</h1>
		 	<p>My name is James and I am an aspiring Web Developer looking to expands my skills.</p>
		</div>
	   )
	}
}

export default Story;