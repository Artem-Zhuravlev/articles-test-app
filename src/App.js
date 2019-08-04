import React, { Component } from 'react';

import HeaderTop from './components/Header/HeaderTop';
import MainContent from './components/MainContent/MainContent';






class App extends Component {
  state = {
    counter: 0
  }

  render() {
    let {counter} = this.state;

    return (
      <div className="App">
        <HeaderTop  counter={counter} />
        <MainContent />
      </div>
    );
  }
}

export default App;