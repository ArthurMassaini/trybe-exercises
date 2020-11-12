import React from 'react';

class SelectInput extends React.Component {
  render() {
    const { label, name, value, handleChange, options } = this.props;

    return (
      <div className="inputs">
        <label>{label} </label>
        <select name={name} onChange={handleChange} value={value}>
          <option>Escolha</option>

          {options.map((element) => (
            <option key={element.id} value={element.sigla}>
              {element.sigla}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectInput;
