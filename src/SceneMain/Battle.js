import React from 'react';
import styled from 'styled-components';
import Card from './Card.js';
import GameContext from '../context/GameContext.js';


class Battle extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const Test = (props) => {
      return(
        <Card className="battle-card" name={props.name} />
      )
    }
    return(
      <BattleField>
        <GameContext.Consumer>
          {value => (
            <Test name={value.cardOnBattleField}/>
            //<Card className="battle-card" name={value.cardOnBattleField} />
          )}
        </GameContext.Consumer>
      </BattleField>
    )
  }
}

//Battle.contextType = GameContext;
const BattleField = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
  margin-bottom: 2vh;
  height: 64vh;
  padding: 12px;
  width: 100%;
`;

export default Battle;