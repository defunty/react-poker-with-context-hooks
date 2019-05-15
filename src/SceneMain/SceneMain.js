import React from 'react';
//import styled from 'styled-components';
import Status from './Status.js';
import Battle from './Battle.js';
import Deck from './Deck.js';
import GameContext from '../context/GameContext.js';

class SceneMain extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render(){
    return(
        <React.Fragment>
          <Status />
          <Battle />
          <Deck />
        </React.Fragment>
    )
  }
}

export default SceneMain;