import React from 'react';
import styled from 'styled-components';
import Button from './component/Button.js';

class SceneSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const PrefecturesList = styled.ol`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      height: 100%;
      overflow: hidden;
      width: 100%;
      li {
        display: block;
        padding: 5px 10px;
        width: 14%;
      }
    `;
    /*
    const prefectures = { 'hkd':'北海道', 'amr':'青森', 'akt':'秋田' };
    const propsObject = { 'hkd':() => this.props.nextScene('hkd'), 'amr':() => this.props.nextScene('amr'), 'akt':() => this.props.nextScene('akt') }
    let li = [];
    Object.keys(prefectures).forEach(function (key) {
      console.log(test['hkd'])
      li.push(<li key={key}><Button onClick={propsObject[key]}>{prefectures[key]}</Button></li>)
    });
    */
    return(
      <PrefecturesList>
        <li><Button onClick={() => this.props.nextScene('hkt')}>北海道</Button></li>
        <li><Button onClick={() => this.props.nextScene('amr')}>青森県</Button></li>
        <li><Button onClick={() => this.props.nextScene('akt')}>岩手県</Button></li>
        <li><Button onClick={() => this.props.nextScene('myg')}>宮城県</Button></li>
        <li><Button onClick={() => this.props.nextScene('akt')}>秋田県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ymg')}>山形県</Button></li>
        <li><Button onClick={() => this.props.nextScene('hks')}>福島県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ibr')}>茨城県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ttg')}>栃木県</Button></li>
        <li><Button onClick={() => this.props.nextScene('gnm')}>群馬県</Button></li>
        <li><Button onClick={() => this.props.nextScene('stm')}>埼玉県</Button></li>
        <li><Button onClick={() => this.props.nextScene('tib')}>千葉県</Button></li>
        <li><Button onClick={() => this.props.nextScene('tky')}>東京都</Button></li>
        <li><Button onClick={() => this.props.nextScene('kng')}>神奈川</Button></li>
        <li><Button onClick={() => this.props.nextScene('ngt')}>新潟県</Button></li>
        <li><Button onClick={() => this.props.nextScene('tym')}>富山県</Button></li>
        <li><Button onClick={() => this.props.nextScene('isk')}>石川県</Button></li>
        <li><Button onClick={() => this.props.nextScene('hki')}>福井県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ymn')}>山梨県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ngn')}>長野県</Button></li>
        <li><Button onClick={() => this.props.nextScene('gih')}>岐阜県</Button></li>
        <li><Button onClick={() => this.props.nextScene('szo')}>静岡県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ait')}>愛知県</Button></li>
        <li><Button onClick={() => this.props.nextScene('mie')}>三重県</Button></li>
        <li><Button onClick={() => this.props.nextScene('sig')}>滋賀県</Button></li>
        <li><Button onClick={() => this.props.nextScene('kyt')}>京都府</Button></li>
        <li><Button onClick={() => this.props.nextScene('osk')}>大阪府</Button></li>
        <li><Button onClick={() => this.props.nextScene('hyg')}>兵庫県</Button></li>
        <li><Button onClick={() => this.props.nextScene('nar')}>奈良県</Button></li>
        <li><Button onClick={() => this.props.nextScene('wky')}>和歌山</Button></li>
        <li><Button onClick={() => this.props.nextScene('ttr')}>鳥取県</Button></li>
        <li><Button onClick={() => this.props.nextScene('smn')}>島根県</Button></li>
        <li><Button onClick={() => this.props.nextScene('oky')}>岡山県</Button></li>
        <li><Button onClick={() => this.props.nextScene('hrs')}>広島県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ymg')}>山口県</Button></li>
        <li><Button onClick={() => this.props.nextScene('tks')}>徳島県</Button></li>
        <li><Button onClick={() => this.props.nextScene('kgw')}>香川県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ehm')}>愛媛県</Button></li>
        <li><Button onClick={() => this.props.nextScene('kot')}>高知県</Button></li>
        <li><Button onClick={() => this.props.nextScene('hko')}>福岡県</Button></li>
        <li><Button onClick={() => this.props.nextScene('sag')}>佐賀県</Button></li>
        <li><Button onClick={() => this.props.nextScene('ngs')}>長崎県</Button></li>
        <li><Button onClick={() => this.props.nextScene('kmm')}>熊本県</Button></li>
        <li><Button onClick={() => this.props.nextScene('oit')}>大分県</Button></li>
        <li><Button onClick={() => this.props.nextScene('myz')}>宮崎県</Button></li>
        <li><Button onClick={() => this.props.nextScene('kgs')}>鹿児島</Button></li>
        <li><Button onClick={() => this.props.nextScene('okn')}>沖縄県</Button></li>
      </PrefecturesList>
    )
  }
}

export default SceneSelect;