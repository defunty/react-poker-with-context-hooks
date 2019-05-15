import React from 'react';
import styled from 'styled-components';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <CardStyle name={this.props.name} onClick={this.props.onClick} className={this.props.className}>
        名前:{this.props.name}<br />
        Rank:{this.props.rank}
      </CardStyle>
    )
  }
}

const CardStyle = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
  display: block;
  height: 100%;
  padding: 12px;
  width: 120px;

  &.battle-card {
    ${props => !props.name ? 'display: none;':''}
    height: 100%;

  }
`;



export default Card;