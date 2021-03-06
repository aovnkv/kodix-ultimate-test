import React, { Component } from 'react';
import './ColorInput.scss';

class ColorInput extends Component {
  render() {
    return (
      <>
        <input
          type="radio"
          name="color"
          id={this.props.color}
          value={this.props.color}
          onChange={this.props.handleChange}
          className="color-input"
          checked={this.props.checkedColor === this.props.color}
        />
        <label
          className={`color--${this.props.color}`}
          htmlFor={this.props.color}
        >
          {this.props.color}
        </label>
      </>
    );
  }
}

export default ColorInput;
