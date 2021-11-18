import React, { Component } from "react";
import CurrencyOptions from "./CurrencyOptions";
import AddExpenseButton from "./AddExpenseButton";

export default class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: "",
      currency: "USD",
      method: "Dinheiro",
      tag: "Alimentação",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form id="expense-form">
        <label htmlFor="value" className="expense-input">
          Valor: <input type="number" id="value" onChange={this.handleChange} required />
        </label>
        <label htmlFor="description" className="expense-input">
          Descrição:{" "}
          <input type="text" id="description" onChange={this.handleChange} />
        </label>
        <label htmlFor="currency" className="expense-input">
          Moeda:{" "}
          <select id="currency" onChange={this.handleChange}>
            <CurrencyOptions />
          </select>
        </label>
        <label htmlFor="method" className="expense-input">
          Método de pagamento:{" "}
          <select id="method" onChange={this.handleChange}>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" className="expense-input">
          Tag:{" "}
          <select id="tag" onChange={this.handleChange}>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <AddExpenseButton
          value={value}
          description={description}
          currency={currency}
          method={method}
          tag={tag}
        />
      </form>
    );
  }
}
