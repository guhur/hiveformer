import React, {Component} from 'react';
import Header from '@components/Header';
import Project from '@components/Project';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Project />
        { /* <Demo />
        <Paper />
        */ }
      </div>
    );
  }
}

export default App;
