import React from 'react';
import styled from 'styled-components';
import Button from './component/Button.js';

class SceneStart extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const Layout = styled.div`
      display: flex;
      height: 100%;
      width: 100%;
      Button {
        margin: auto;
      }
    `;
    return(
      <Layout>
        <Button onClick={() => this.props.nextScene()}>スタート</Button>
      </Layout>
    )
  }
}


export default SceneStart;