import React, { PropTypes } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <NavBar />
        <main>
          {this.props.dataToRender}
        </main>
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  dataToRender: PropTypes.string.isRequired,
};
