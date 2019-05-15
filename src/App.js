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


/* think
・renderの記述を見れば画面構造が分かるようなコンポーネント名にしたい。

・コンポーネント内部の独自コンポーネントなのか、外部ファイルのコンポーネントなのかどうか分かるようなコンポーネント名にしたい
->外部ファイルのコンポーネント名を分かりやすいものにするべき
->どういう名前が良い？（componentやmoduleは違う）
->今のところ思いつかない

・MainSceneだけをデバッグしたいけどいちいち他のシーンを経由するのが面倒。どうする？

・ゲームの根本的な設定やデータはcontextとして持たせる（いちいち渡すのが面倒）

・state：変更するとrenderingの必要があるもの？コンポーネント自身で管理するのが良い？
・props：親から子に渡すもの
・context：アプリ全体で必要な値や関数を格納。子コンポーネント

・componentにはclassNameもしくは属性にコンポーネント名を与えた方がよい？（デバッグしやすくするため）

・設計はデータの流れを考える。
親から子へ渡すだけのものはprops
自分で管理する情報はstate、
（遠い）孫に渡すもの、はcontextで管理

・contextはどのような形でグルーピングするのがよいか？
細かく分けすぎるとcontextAとcontextBの両方をJSX外で参照する、ということができない（はず？）
・MyClass.contextType = Context;
のような書き方をすると単一のccontextしか利用できない。
class内で二種類のcontextを利用できるか？


・Contextをrenderの外で複数利用ができない
・コンポーネントAをレンダリングする際に、グローバルな値によってコンポーネントAに渡す関数を変更させる。
関数は兄弟要素のコンポーネントBを変更する場合もある。
上記解決策として、コンポーネントAとコンポーネントBで利用するcontextは一つにまとめた方がよいかもしれない
PhaseContextとStatusContextとを分けていたが、両方を参照して条件分岐させる必要が出たので、
GameContextとしてまとめることにした。

設計時に全てのstateの流れ（どのコンポーネントで参照され、どのコンポーネントで変更されるか）をまとめておくか、
ひとまず親コンポーネントからProvideしておき、実装が終わったあとにチューニングする必要がある。
（個人的には、仕様変更への対応のしやすさから後者の方が好ましい）



*/


/* problem
#stateにthis.setStateするローカル関数をセットした場合の問題
constructor(props) {
  super(props);
  this.state = {
    phase: 'provisioning',
    setPhase: this.setPhase
  };
  this.setPhase = this.setPhase.bind(this);
}
setPhase(value){
  this.setState({phase: value});
}
では、"TypeError: this.setState is not a function"というエラー。
スコープの問題で、以下のように修正した。
constructor(props) {
  super(props);
  this.state = {
    phase: 'provisioning',
    setPhase: this.setPhase
  };
  
}


##この件についてはスコープの理解を深めて動作を理解するようにする


*/