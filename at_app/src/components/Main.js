import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

class Main extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <NavBar />
        <main>
            {this.props.dataToRender}   
        </main>
        <Footer />
      </div>
    )
  }
}

export default Main;