import React from 'react';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        
      }
  }
  render () {
    return (
      <Main dataToRender={this.props.children}/>
    )
  }
}

export default App;