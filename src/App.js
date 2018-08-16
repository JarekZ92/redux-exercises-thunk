import React, { Component } from 'react'
import Auth from './components/Auth';
import Users from './views/Users';

class App extends Component {
  render() {
    return (
      <div>
        <Auth>
          <Users />
        </Auth>
      </div>
    )
  }
}

export default App;
