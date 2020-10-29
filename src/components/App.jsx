import React from 'react';
import PropTypes from 'prop-types';
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
  children: PropTypes.object.isRequired,
};
