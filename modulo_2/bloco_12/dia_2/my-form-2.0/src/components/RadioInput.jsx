import React from 'react';

class RadioInput extends React.Component {
  render() {
    const { label, name, value, checked, handleChange } = this.props;

    return (
      <div className="input-radio">
        <input
          value={value}
          name={name}
          type="radio"
          checked={checked}
          onChange={handleChange}
          required
        />
        <label>{label}</label>
      </div>
    );
  }
}

export default RadioInput;
