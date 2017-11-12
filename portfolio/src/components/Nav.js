import React from 'react';
// import logo from './logo.svg';
import {Navbar, NavItem} from 'react-materialize';
import '../App.css';


class Nav extends React.Component{
	render(){
		return(
			<Navbar  right className="Nav">
				<NavItem className="NavItem Brand" href='/bio'><h2>James Dalton</h2></NavItem>
				<NavItem className="NavItem" href='/bio'>Bio</NavItem>
				<NavItem className="NavItem" href='/home'>Projects</NavItem>
			</Navbar>
	   )
	}
}

export default Nav;