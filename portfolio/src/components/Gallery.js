import React from 'react';
// import logo from './logo.svg';
import Tile from './Tile';
import worldscoop from '../images/worldscoop.jpg';
import friend from '../images/friend.jpg';
import liri from '../images/liri.png';
import cart from '../images/cart.jpg';
import gif from '../images/gif.gif';
import crystal from '../images/crystal.jpg';
import hangman from '../images/hangman.jpg';
import flashcard from '../images/flashcards.jpg';
import trivia from '../images/trivia.jpg';
import {Row, Col} from 'react-materialize';
import '../App.css';

class Gallery extends React.Component{
	render(){
		return(
			<div>
				<Row>
					<Col s={4}><Tile image={worldscoop} title="World Scoop" /></Col>
					<Col s={4}><Tile image={friend} title="Friend Finder" /></Col>
					<Col s={4}><Tile image={liri} title="LIRI" /></Col>
				</Row>
				<Row>
					<Col s={4}><Tile image={cart} title="Bamazon" /></Col>
					<Col s={4}><Tile image={gif} title="Giftastic" /></Col>
					<Col s={4}><Tile image={crystal} title="Crystal Collector" /></Col>
				</Row>
				<Row>
					<Col s={4}><Tile image={hangman} title="Hangman" /></Col>
					<Col s={4}><Tile image={flashcard} title="Flashcard Generator" /></Col>
					<Col s={4}><Tile image={trivia} title="Trivia" /></Col>
				</Row>
			</div>
		)
	}
}

export default Gallery;