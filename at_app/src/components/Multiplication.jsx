import React from 'react';

export default class Multiplication extends React.Component {
  constructor() {
    super();
    this.state = {
      input_numbers: 2,
    };
    this.changeInputs = this.changeInputs.bind(this);
  }

  changeInputs(event) {
    this.setState({
      input_numbers: event.target.value,
    });
  }

  render() {
    const arr = [];
    const arr2 = [];

    for (let i = 2; i <= 10; i += 1) {
      arr.push(i);
    }

    const options = arr.map(item =>
      <option key={item} >{item}</option>,
    );

    for (let i = 1; i <= this.state.input_numbers; i += 1) {
      arr2.push(i);
    }

    const inputs = arr2.map(item =>
      <input key={item} />,
    );

    return (
      <div className="multiplication">
        Choose how many numbers should be multiplicated together ???
        <select onChange={this.changeInputs} value={this.state.input_numbers}>
          {options}
        </select>
        <div className="inputs">
          {inputs}
        </div>
      </div>
    );
  }
  }