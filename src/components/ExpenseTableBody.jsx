import React, { Component } from "react";
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { removeExpense as removeExpenseAction } from "../actions";

class ExpenseTableBody extends Component {
  constructor() {
    super();
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  async handleDeleteButton({ target: { value } }) {
    const { removeExpense } = this.props;
    await removeExpense(value);
  }

  render() {
    const { expenses } = this.props;

    return (
      <tbody>
        {expenses.length > 0 &&
          expenses.map((expense) => {
            const expenseCurrency = expense.currency;
            return (
              <tr key={expense.id} id={`tr-${expense.id}`}>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expenseCurrency].name}</td>
                <td>
                  {Math.round(
                    expense.exchangeRates[expenseCurrency].ask * 100
                  ) / 100}
                </td>
                <td>
                  {Math.round(
                    expense.exchangeRates[expenseCurrency].ask *
                      expense.value *
                      100
                  ) / 100}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={this.handleDeleteButton}
                    value={expense.id}
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    );
  }
}

ExpenseTableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (index) => dispatch(removeExpenseAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTableBody);
