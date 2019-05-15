import React from 'react';
import styled from 'styled-components';
import GameContext from '../context/GameContext.js';

class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const gameContext = this.context;
    let phaseMessage = '';
    switch(gameContext.phase){
      case 'select': 
        phaseMessage = '場に出す手札を選んでください。';
        break;
      case 'battleStart': 
        phaseMessage = '比較中......';
        break;
      case 'battleResult': 
        phaseMessage = 'あなたの勝利/敗北です。';
        break;
    }
    
    return(
      <GameContext.Consumer>
        {(value) => (
          <StatusField>
            <ul className="status-list">
              <li>life : {value.life}</li>
              <li>selfPrefecture : {value.selfPrefecture}</li>
            </ul>
            <div className="phase-message">{phaseMessage}</div>
          </StatusField>
        )}
      </GameContext.Consumer>
    )
  }
}

Status.contextType = GameContext;

const StatusField = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
  height: 8vh;
  margin-bottom: 2vh;
  width: 100%;
  .status-list {
    display: flex;
    height: 50%;
    overflow: hidden;
    width: 100%;
    li {
      width: 20%;
    }
  }
  .phase-message{
    height: 50%;
  }
`;


export default Status;