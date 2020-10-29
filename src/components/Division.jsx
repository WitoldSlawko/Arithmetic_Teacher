import React from 'react';
import InputNumber from './InputNumber.jsx';

export default class Division extends React.Component {
  constructor() {
    super();
    this.state = {
      input_numbers: 2,
      first_value: 0,
      maxNumberOfInputs: 10,
      evaluation: null
    };
    this.changeInputs = this.changeInputs.bind(this);
    this.handleEvaluation = this.handleEvaluation.bind(this);
  }

  changeInputs(event) {
    this.setState({
      input_numbers: event.target.value
    });
  }

  changeFirstValue = (event) => {
    this.setState({
      first_value: event.target.value
    })
  }
  
  handleEvaluation = () => {
    let result = this.state.first_value;
    const solution = document.querySelector("#solution input").value; 
    const inputs = [].slice.call(document.querySelectorAll(".inputs div input"));

    inputs.forEach((input) => {
      result /= +input.value;
    });

    if (+result === +solution) {
      this.setState({
        evaluation: "Brawo!"
      });
    } 
    else if (result < solution){
      this.setState({
        evaluation: "Number is too big!"
      });
    } 
    else {
      this.setState({
        evaluation: "Number is too small!"
      });
    }

  }

  render() {
    const arr = [];
    const arr2 = [];

    for (let i = 2; i <= this.state.maxNumberOfInputs; i += 1) {
      arr.push(i);
    }

    const options = arr.map(item =>
      <option key={item} >{item}</option>,
    );

    for (let i = 1; i < this.state.input_numbers; i += 1) {
      arr2.push(i);
    }

    const inputs = arr2.map(item =>
      <div key={item}>
        <p>/</p>
        <InputNumber />
      </div>
    );

    return (
      <div className="division">
        Choose how many numbers should be divided:
        <select onChange={this.changeInputs} value={this.state.input_numbers}>
          {options}
        </select>
        <br />
        <input onChange={this.changeFirstValue} type="number" min="0" step="1" defaultValue="0" />
        <div className="inputs">
          { inputs }
        </div>
        <p>=</p>
        <p>Enter your solution:</p>
        <div id="solution">
          <InputNumber />
        </div>
        <button onClick={this.handleEvaluation}>Check!</button>
        <p>{ this.state.evaluation }</p>
      </div>
    );
  }
}
