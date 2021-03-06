import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';


import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web !'},
      contents:[
        {id:1, title: 'HTML', desc:'HTML is for information'},
        {id:2, title: 'CSS', desc:'CSS is for design'},
        {id:3, title: 'JavaScript', desc:'Javascript is for interactive'}

      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="World Wide Web !"/>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}/>
        <TOC title={this.state.contents}/>
        <Content title="HTML" desc="HTML is HyperText Markup Language"/>
      </div>
    );
  }
}

export default App;