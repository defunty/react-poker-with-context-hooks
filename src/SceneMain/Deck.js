import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Card from './Card.js';
import Hand from './Hand.js';
import DeckContext from '../context/DeckContext.js';
import GameContext from '../context/GameContext.js';


class Deck extends React.Component {
//const Deck = () => {
  constructor(props) {
    super(props);
    this.state = {
      deck : [1,2,3,4,5,6,7,8,9,10],
      hand: [],
      handSelectEvent: () => {return false;}
    }
    //this.getCard = this.getCard.bind(this);
  }
  
/*
  getCard(){
    let random = 'test';
    this.setState({newCard: random});
  }
*/
  componentWillMount(){
    const gameContext = this.context;
    
    console.log('deck.js will mount');
      
    switch(gameContext.phase){
      case 'provisioning':
        let handState = this.state.hand;
        let deckState = this.state.deck;
        const handPush = (i,value) => {
          handState.push(value);
        }
        const sliceDeck = () => {
          let random = Math.floor(Math.random() * deckState.length);
          let popFromDeck = deckState.slice(random,random+1)[0];
          return popFromDeck;
        }
        for(let i=0;i<7;i++){
          handPush(i,sliceDeck());
        }

        this.setState({deck: deckState, hand: handState});

        this.setState({ handSelectEvent: (value) => {
          gameContext.setCardToBattleField(value);
          gameContext.setPhase('battleStart');
        }});
        gameContext.setPhase('select');

        break;

      case 'battleStart':
        this.setState({ handSelectEvent: () => { return false; }});
        /*
        setTimeout( ()=>{
          console.log('battlestart')
          gameContext.setPhase('battleResult');
        }, 5000)
        */
        break;

      case 'battleResult':
        this.setState({ handSelectEvent: () => { return false; }});
        setTimeout( ()=>{
          console.log('battleResult')
          gameContext.setPhase('select');
        }, 5000)
        break;
    }
  }

  render(){
    //各種配列の入ったデータを読み込む
    const data = {};
    data['hkd'] = { 'population' : 1 }
    data['akt'] = { 'population' : 2 }
    data['amr'] = { 'population' : 3 }

    /*
    this.state.hand.map((v,i) => {
      handJSX.push(
        <li className="test" key={i}>
          <div className="card-wrapper">
            <Card onClick={this.state.handSelectEvent} className="hand-card" name={v}/>
          </div>
        </li>);
    })
    */
    
    const createHandJSX = () => {
      let handJSX = [];
      this.state.hand.map((v,i) => {
        handJSX.push(
          <li key={i}>
            <div className="card-wrapper">
              <Card onClick={() => this.state.handSelectEvent(v)} className="hand-card" name={v} />
            </div>
          </li>);
      })
      return (handJSX)
    }
    
    
    return(
      <DeckContext.Provider value={this.state}>
        <SelfField>
          <HandWrapper>
            {/*<GameContext.Consumer>
              {(value) => (
                createHandJSX(value.phase)
              )}
            </GameContext.Consumer>*/}
            {createHandJSX()}
          </HandWrapper>
          {/*<DeckWrapper className="DeckWrapper">
            <Card />
          </DeckWrapper>*/}
        </SelfField>
      </DeckContext.Provider>
    )
  }
}

Deck.contextType = GameContext;

const SelfField = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
  display: flex;
  height: 20vh;
  padding: 12px;
  flex-wrap: nowrap;
  width: 100%;
`;

const HandWrapper = styled.ul`
  display: flex;
  margin-right: -5px;
  margin-left: -5px;
  padding-right: 30px;
  width: auto;
  .card-wrapper {
    padding: 0 5px;
    .hand-card {
      cursor: pointer;
      width: auto;
    }
  }
  
`;
const DeckWrapper = styled.div`
  position:relative;
  height: auto;
  width: auto;
  Card {
    position: absolute;
    top: 0;
    left: 0;
  }
`;



export default Deck;