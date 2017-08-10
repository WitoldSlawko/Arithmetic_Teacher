import React from 'react';

class InputNumber extends React.Component {
  render() {
    return (
      <input className="input_numbers" type="number" onChange={this.props.showValue} min="0" step="1" defaultValue="0" />
    );
  }
}

export default InputNumber;