import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 'a'}
    this.handleClickA = this.handleClickA.bind(this)
    this.handleClickB = this.handleClickB.bind(this)
    this.handleClickC = this.handleClickC.bind(this)
  }
  handleClickA(){
    console.log('exe changePage to b');
    this.setState({page: 'b'})
  }
  handleClickB(value){
    console.log('exe changePage to c');
    this.setState({page: 'c'})
  }
  handleClickC(){
    console.log('exe changePage to a');
    this.setState({page: 'a'})
  }
  render(){
    let PageContent;
    switch(this.state.page){
      case 'a':
        PageContent = <A onClick={() => this.handleClickA('b')} />
        break;
      case 'b':
        PageContent = <B onClick={() => this.handleClickB('c')} />
        break;
      default:
       PageContent = <C onClick={() => this.handleClickC('a')} />
       
      /*
      case 'a':
        PageContent = <button onClick={() => this.handleClick('b')}>to b</button>
        break;
      case 'b':
        PageContent = <button onClick={() => this.handleClick('c')}>to c</button>
        break;
      default:
        PageContent = <button onClick={() => this.handleClick('a')}>to a</button>
      */
    }
    console.log(this.state.page);
    return(
      <div>
        {PageContent}
      </div>
    )
  }
}

class A extends React.Component {
  constructor(props) {
    super(props);
  }
  clickFunction(){
    return this.props.onClick();
  }
  render(){
    return(
      <div>
        <h1>page a</h1>
        <button onClick={() => this.clickFunction()}>to Page b</button>
      </div>
    )
  }
}

class B extends React.Component {
  constructor(props) {
    super(props);
  }
  clickFunction(){
    return this.props.onClick();
  }
  render(){
    return(
      <div>
        <h1>page b</h1>
        <button onClick={() => this.clickFunction()}>to Page c</button>
      </div>
    )
  }
}

class C extends React.Component {
  constructor(props) {
    super(props);
  }
  clickFunction(){
    return this.props.onClick();
  }
  render(){
    return(
      <div>
        <h1>page c</h1>
        <button onClick={() => this.clickFunction()}>to Page a</button>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;

