import React, { Component } from 'react';
import {Card, CardTitle ,Col} from 'react-materialize';
import wave from './images/wave.jpg';
import './App.css';

class Cards extends React.Component{
  render(){
    return(
    	<div>
			
			<Card header={<CardTitle reveal image={wave} waves='light'/>}
				title="Card Title"
				reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
				<p><a href="#">This is a link</a></p>
		    </Card>
		  
        </div>
    )
  }
}

export default Cards;
