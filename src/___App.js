//"setState isn't a function" test

import React from 'react';
import styled from 'styled-components';
import PhaseContext from './context/PhaseContext.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.setPhase = () => {
      this.setState(state => ({phase: 'end'}));
      console.log('end')
    };

    this.state = {
      phase: 'start',
      setPhase: this.setPhase
    }
    
  }
/*
  setPhase(){
    this.setState({phase: 'end'})
    console.log('set')
  }
*/
  render(){
    console.log(this.state)
    return(
      <PhaseContext.Provider value={this.state}>
        <Child test={this.state.setPhase}/>
      </PhaseContext.Provider>
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'error'
    }
  }
  render(){
    const phaseContext = this.context
    return(
      <div onClick={this.props.test}>test</div>
    )
  }
}

Child.contextType = PhaseContext;

export default App;