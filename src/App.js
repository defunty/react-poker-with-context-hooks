import React from 'react';
import styled from 'styled-components';
import Game from './Game.js';
import './reset.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
    <Container className="Container">
      <Game />
      <h1>ゲームタイトル（仮）</h1>
      <div>ゲーム説明（仮）</div>
    </Container>
    )
  }
}
const Container = styled.div`
  background-color: #333;
  height: auto;
  width: 100%;
`;

export default App;