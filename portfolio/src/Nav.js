import React from 'react';
// import logo from './logo.svg';
import {Navbar, NavItem} from 'react-materialize'
import './App.css';


class Nav extends React.Component{
	render(){
		return(
			<Navbar brand='James' right className="Nav">
				<NavItem href='get-started.html'>Bio</NavItem>
				<NavItem href='components.html'>Projects</NavItem>
			</Navbar>
	   )
	}
}

export default Nav;