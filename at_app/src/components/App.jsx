import React, { PropTypes } from 'react';
import Main from './Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Main dataToRender={this.props.children} />
    );
  }
}

App.propTypes = {
  children: PropTypes.string.isRequired,
  //L: jesli to nie string to prosze o poprawienie, nie wiem jaki jest zamysl
  //W: to raczej 'object' bym powiedzial jak bedzie kilka tagów renderowanych w jednym 'duzym divie'
};
