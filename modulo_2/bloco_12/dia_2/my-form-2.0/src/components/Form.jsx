import React from 'react';

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

          <label>Nome: </label>
          <input
            name="nome"
            type="text"
            onChange={this.handleChange}
            value={this.state.nome}
          />

          <label>Email: </label>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <label>CPF: </label>
          <input
            name="cpf"
            type="text"
            onChange={this.handleChange}
            value={this.state.cpf}
          />

          <label>Endereço: </label>
          <input
            name="endereco"
            type="text"
            onChange={this.handleChange}
            value={this.state.endereco}
          />

          <label>Cidade: </label>
          <input
            name="cidade"
            type="text"
            onChange={this.handleChange}
            value={this.state.cidade}
          />

          <label>Estado: </label>
          <select
            name="estado"
            onChange={this.handleChange}
            value={this.state.estado}
          >
            <option value="sp">SP</option>
            <option value="rj">RJ</option>
          </select>

          <label>Tipo do logradouro: </label>
          <input
            value="casa"
            name="logradouro"
            type="radio"
            onChange={this.handleChange}
          />
          <label>Casa</label>
          <input
            value="apartamento"
            name="logradouro"
            type="radio"
            onChange={this.handleChange}
          />
          <label>Apartamento</label>
        </fieldset>
      </form>
    );
  }
}

export default Form;
