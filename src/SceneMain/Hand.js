import React from 'react';
import styled from 'styled-components';
import Card from './Card.js';
import DeckContext from '../context/DeckContext.js';
import GameContext from '../context/GameContext.js';

class Hand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //nowCards: this.state.nowCards
      nowCards: []
    }
    this.state.nowCards.push(this.props.newCard)
    this.addCard = this.addCard.bind(this);
  }
  addCard(value){
    const newCard = value;
    this.setState({nowCards: this.state.cards.push[newCard]});
  }

  render(){
    let li = this.props.nowCard;
    
    
    return(
      <HandWrapper>
        <li><Card /></li>
      </HandWrapper>
    )
  }
}


const HandWrapper = styled.ul`
  display: block;
  width: 100%;
`;

export default Hand;