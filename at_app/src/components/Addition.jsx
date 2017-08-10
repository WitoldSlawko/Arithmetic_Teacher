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
        n2: '', n3: '', n4: '', n5: '', n6: '', n7: '', n8: '', n9: '', n10: '' 
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
    console.log(e.target.value)
    const all_inputs = document.querySelectorAll("input.input_numbers");
    const arr_inputs = [];
    let final_value = 0;
    for (var i=0; i < all_inputs.length; i++){
      arr_inputs.push(all_inputs[i].value);
      final_value += Number(all_inputs[i].value);
    }
    this.setState ({
      values_holder: arr_inputs,
      final_result: final_value
    })
    console.log(this.state.values_holder)
    console.log(this.state.final_result)
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
    const boxes_1 = []
    const boxes_all = []

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
        <p>+</p>
        <InputNumber showValue={this.showValue} />
      </div>
    );

    for (let i = 0; i < this.state.first_value.length; i+=1) {
      boxes_1.push(this.state.first_value[i]);
    }

    for (let i = 0; i < this.state.values_holder.length; i+=1) {
      boxes_all.push(this.state.values_holder[i]);
    }



    const boxes_show = boxes_1.map((digit, ind) =>
      <div key={ind} className = "focuser">
        <p className="digit">{digit}</p>
      </div>
    )
    
    const boxes_show_all = boxes_all.map((digit, ind) =>
      <div key={ind} className = "focuser">
        <p className="digit">{digit}</p>
      </div>
    )

/*
 for (let i=0; i < boxes_all.length; i++) {
  for (let j =0; j < boxes_all[i]; j++) {
    return (
      <div key={i} className = "focuser">
          <p className="digit">{boxes_all[i][j]}</p>
        </div>
    )
  }
}
*/

    return (
      <div className="addition pack">
        <div className="number_picker">
        Choose how many numbers should be added:
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
           <input type="number" min="0" step="1" defaultValue="0" />
        </div>
        <button onClick={this.handleEvaluation}>Check!</button>
        <p>{ this.state.evaluation }</p>
        </div>
        <div className="written_calculations digits_line">
          { boxes_show }
          { boxes_show_all }
        </div>
      </div>
    );
  }
}

Addition = connect(mapStateToProps, dispatchToProps)(Addition);

export default Addition;