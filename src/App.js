import React, { Component } from 'react'
import Users from './state/views/Users';
import Auth from './components/Auth';


class App extends Component {
  render() {
    return (
      <div>
        <Auth />
      </div>
    )
  }
}

export default App;
