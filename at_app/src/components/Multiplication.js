import React from 'react';

class Muliplication extends React.Component {
  constructor(props) {
    super()
      this.state = {
        input_numbers : 2
      }
   this.changeInputs = this.changeInputs.bind(this);
  }
  changeInputs(event){
    this.setState({
      input_numbers : event.target.value
    })
    //console.log(this.state.input_numbers);
  }
  render () {
    var arr = [];
    var arr2 = [];
    for (let i = 2; i <= 10; i++){
      arr.push(i);
    }
    var options = arr.map(function(item){
      return (
        <option key={item}>{item}</option>
      )
    })
    for (let i = 1; i <= this.state.input_numbers; i++){
      arr2.push(i);
    }
    var inputs = arr2.map(function(item){
      return (
        <input key={item} />
      )
    })
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
    )
  }
}

export default Muliplication;