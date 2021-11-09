import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';


import './App.css';


class App extends Component {

  // Component 실행 시 
  // constructor 함수가 있다면 제일 먼저 실행되어 초기화를 담당한다.
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web !'}
    }
  }

  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="World Wide Web !"/>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}/>
        <TOC/>
        <Content title="HTML" desc="HTML is HyperText Markup Language"/>
      </div>
    );
  }
}

export default App;