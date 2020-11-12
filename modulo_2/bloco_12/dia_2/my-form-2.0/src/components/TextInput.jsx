import React from 'react';

class TextInput extends React.Component {
  render() {
    const { label, name, value, handleChange } = this.props;

    return (
      <div className="inputs">
        <label>{label} </label>
        <input
          name={name}
          type="text"
          onChange={handleChange}
          value={value}
          required
        />
      </div>
    );
  }
}

export default TextInput;
