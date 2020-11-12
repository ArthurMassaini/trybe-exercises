import React from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import RadioInput from './RadioInput';
import estados from '../dataEstados';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      logradouro: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="form">
        <fieldset className="fieldset">
          <legend>Dados Pessoais</legend>

          <TextInput
            label="Nome: "
            name="nome"
            value={this.state.nome}
            handleChange={this.handleChange}
          />

          <TextInput
            label="Email: "
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <TextInput
            label="CPF: "
            name="cpf"
            value={this.state.cpf}
            handleChange={this.handleChange}
          />

          <TextInput
            label="Endereço: "
            name="endereco"
            value={this.state.endereco}
            handleChange={this.handleChange}
          />

          <TextInput
            label="Cidade: "
            name="cidade"
            value={this.state.cidade}
            handleChange={this.handleChange}
          />

          <SelectInput
            label="Estado: "
            name="estado"
            value={this.state.estado}
            handleChange={this.handleChange}
            options={estados}
          />

          <div class="radio">
            <label>Tipo de logradouro: </label>

            <RadioInput
              label="Casa"
              name="logradouro"
              value="casa"
              checked={this.state.logradouro === 'casa'}
              handleChange={this.handleChange}
            />

            <RadioInput
              label="Apartamento"
              name="logradouro"
              value="apartamento"
              checked={this.state.logradouro === 'apartamento'}
              handleChange={this.handleChange}
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
