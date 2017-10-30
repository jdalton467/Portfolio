import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav';
import Cards from './Card';
import {Col, Row, Card, CardTitle, Button, SideNav, SideNavItem} from 'react-materialize'
import './App.css';


class Wrapper extends React.Component{
  render(){
    return(
      <div>
        <Nav />
       <Row>
        <Col s={3}><Cards /></Col>
        <Col s={3}><Cards /></Col>
        <Col s={3}><Cards /></Col>
        <Col s={3}><Cards /></Col>
       </Row>
      </div>
    )
  }
}

export default Wrapper;


