/* REACT */
import React, { Component } from 'react';

/* Components */
import Header from '../childrens/header/mixins/Header';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Header {...this}/>
        {this.props.children}
      </div>
    );
  }
}