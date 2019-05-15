import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import GameContext from './context/GameContext.js';

const Game = () => {
  return (
    <div>test</div>
  )
}
/*
class Game extends React.Component {
  
  constructor(props) {
    super(props);

    this.setPhase = (value) => {
      this.setState({phase: value});
    };
    this.setCardToBattleField = (value) => {
      this.setState({cardOnBattleField: value});
    };
    

    this.state = {
      life: 3,
      scene: 'main',
      selfPrefecture: 'hkd',
      phase: 'provisioning',
      setPhase: this.setPhase,
      cardOnBattleField: null,
      setCardToBattleField: this.setCardToBattleField
    }
    this.sceneChangeStartToSelect = this.sceneChangeStartToSelect.bind(this);
    this.sceneChangeSelectToMain = this.sceneChangeSelectToMain.bind(this);
    this.sceneChangeMainToEnd = this.sceneChangeMainToEnd.bind(this);
  }
  
  sceneChangeStartToSelect() {
    this.setState({scene: 'select'});
  }
  sceneChangeSelectToMain(value) {
    this.setState({scene: 'main', selfPrefecture: value});
  }
  sceneChangeMainToEnd() {

  }

  render(){
    let scene;
    
    console.log(this.state.scene)
    switch(this.state.scene){
      case 'start':
        scene = <SceneStart nextScene={() => this.sceneChangeStartToSelect()}></SceneStart>
        break;
      case 'select':
        scene = <SceneSelect nextScene={(value) => this.sceneChangeSelectToMain(value)}></SceneSelect>
      case 'main':
        scene = <SceneMain></SceneMain>
    }

    //const gameContext = this.context;
    switch(this.state.phase){
      case 'battleStart':
        setTimeout( ()=>{
          console.log('battleStart')
          this.setPhase('battleResult');
        }, 1500)
        break;
      case 'battleResult':
        setTimeout( ()=>{
          console.log('battleResult')
          this.setPhase('select');
        }, 1500)
        break;
        
    }


    return (
      <GameView className="GameView">
        <GameContext.Provider value={this.state}>
          {scene}
        </GameContext.Provider>
      </GameView>
    );
  }
}
const GameView = styled.div`
  background-color: #000;
  height: 100vh;
  padding: 2vh 15px;
  overflow: hidden;
  width: 100%;
`;

*/

export default Game;