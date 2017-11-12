import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home';
import {Col, Row, Card, CardTitle, Button, SideNav, SideNavItem} from 'react-materialize'
import './App.css';


class Wrapper extends React.Component{
  render(){
    return(
      <div>
        <Home />
      </div>
    )
  }
}

export default Wrapper;


