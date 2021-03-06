import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newExpenseThunk, totalCost as totalCostAction } from '../actions';
import handleTotalState from '../helpers';

class AddExpenseButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
  }

  async handleClick() {
    const { value, description, currency, method, tag, newExpense } = this.props;
    await newExpense({ value, description, currency, method, tag });
    this.handleTotal();
  }

  handleTotal() {
    const { totalCost, expenses } = this.props;
    handleTotalState(totalCost, expenses);
  }

  render() {
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        Adicionar despesa
      </button>
    );
  }
}

AddExpenseButton.propTypes = {
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  method: PropTypes.string.isRequired,
  newExpense: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  totalCost: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: ({ value, description, currency, method, tag }) => (
    dispatch(newExpenseThunk({ value, description, currency, method, tag }))
  ),
  totalCost: (total) => (dispatch(totalCostAction(total))),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseButton);
