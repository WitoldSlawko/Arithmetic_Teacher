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
  //jesli to nie string to prosze o poprawienie, nie wiem jaki jest zamysl
};
