import React from "react";
import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesTable from "../components/ExpensesTable";
import "../style/Wallet.css";

export default class Wallet extends React.Component {
  render() {
    return (
      <div id="wallet-wrapper">
        <Header />
        <ExpenseForm />
        <ExpensesTable />
      </div>
    );
  }
}
