import React from 'react';
import InputNumber from './InputNumber.jsx';
import PropTypes from 'prop-types';
import { mapStateToProps, dispatchToProps } from '../dispatch/dispatch.jsx'
import { connect } from 'react-redux';

class Addition extends React.Component {
  constructor() {
    super();
    this.state = {
      input_numbers: 2,
      first_value: 0,
      maxNumberOfInputs: 10,
      evaluation: null,
      values_holder: [],
      final_result: 0,
      slider_values: {
        "n1":'', "n2": '', "n3": '', "n4": '', "n5": '', "n6": '', "n7": '', "n8": '', "n9": '', "n10": '' 
      }
    };
    this.changeInputs = this.changeInputs.bind(this);
    this.changeFirstValue = this.changeFirstValue.bind(this);
    this.showValue = this.showValue.bind(this);
    this.handleEvaluation = this.handleEvaluation.bind(this);
  }

  static PropTypes = {
    number: PropTypes.Number,
    changeNumber: PropTypes.func
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
    //console.log(this.state.first_value);
  }

  showValue = (e) => {
    //console.log(e.target.value)
    const all_inputs = document.querySelectorAll("input.input_numbers");
    const arr_inputs = [];
    let final_value = 0;
    const result_keys = Object.keys(this.state.slider_values)
    let temp_obj = {}
    for (var i=0; i < all_inputs.length; i++){
      //arr_inputs.push(all_inputs[i].value);
      temp_obj[result_keys[i]] = all_inputs[i].value;
      final_value += Number(all_inputs[i].value);
    }
    this.setState ({
      values_holder: arr_inputs,
      final_result: final_value,
      slider_values: temp_obj
    })
    //console.log(this.state.values_holder)
    console.log(this.state.final_result)
    //console.log(this.state.slider_values)
  }

  resultChecking = (digit) => {
    if (digit.target.value === digit.target.idResult) {
      digit.target.style.backgroundColor = "green"
    }
    else {
      digit.target.style.backgroundColor = "red"
    }
  }
  
  handleEvaluation = () => {
    let result = Number(this.state.first_value);
    const solution = document.querySelector("#solution input").value; 
    const inputs = [].slice.call(document.querySelectorAll(".inputs div input"));

    inputs.forEach((input) => {
      result += +input.value;
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
    //console.log(result);
  }

  render() {
    const arr = [];
    const arr2 = [];
    let temporary = { "n1":[], "n2": [], "n3": [], "n4": [], "n5": [], "n6": [], "n7": [], "n8": [], "n9": [], "n10": []  }
    const result_holder = []

    for (let i = 2; i <= this.state.maxNumberOfInputs; i += 1) {
      arr.push(i);
    }

    const options = arr.map(item =>
      <option key={item} >{item}</option>,
    );

    for (let i = 1; i < this.state.input_numbers; i += 1) {
      arr2.push(i);
    }

    for (let i = 0; i < this.state.final_result.length; i += 1) {
      result_holder.push(i);
    }

    const inputs = arr2.map(item =>
      <div key={item}>
        <p>+</p>
        <InputNumber showValue={this.showValue} />
      </div>
    );

    for (let i = 0; i < Object.keys(this.state.slider_values).length; i++) {
      for (let j = 0; j < Object.values(this.state.slider_values)[i].length; j++){
        temporary[Object.keys(this.state.slider_values)[i]].push(Object.values(this.state.slider_values)[i][j])
      }
    }

    function digiter(box){
      return (
        box.map((digit, ind) =>
          <div key={ind} className = "focuser">
            <p className="digit">{digit}</p>
          </div>
        )
      )
    }

    const present_result = result_holder.map((digit, index) =>
      <div key={index} className = "focuser">
            <input type="number" onChange= {this.resultChecking} data-result={digit} className="digit" />
      </div>
    )

    return (
      <div className="addition pack">
        <div className="number_picker">
        Choose how many numbers should be added:
        <select onChange={this.changeInputs} value={this.state.input_numbers}>
          {options}
        </select>
        <br />
        
        <InputNumber showValue={this.showValue} />
        <div className="inputs">
          { inputs }
        </div>
        <p>=</p>
        <p>Enter your solution:</p>
        <div id="solution">
           <input type="number" min="0" step="1" defaultValue="0" />
        </div>
        <button onClick={this.handleEvaluation}>Check!</button>
        <p>{ this.state.evaluation }</p>
        </div>
        <div className="written_calculations digits_line">
          <div className="digits_line">
            { digiter(temporary.n1) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n2) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n3) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n4) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n5) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n6) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n7) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n8) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n9) }
          </div>
          <div className="digits_line">
            { digiter(temporary.n10) }
          </div>
          <div id="check" className="digits_line">
            { present_result }
          </div>
        </div>
      </div>
    );
  }
}

Addition = connect(mapStateToProps, dispatchToProps)(Addition);

export default Addition;

//<input onChange={this.changeFirstValue} type="number" min="0" step="1" defaultValue="0" />