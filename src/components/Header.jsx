import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import walletImage from "../images/wallet.png";

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <div id="header">
        <img src={walletImage} alt="wallet" id="wallet-img" />
        {/* <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div> */}
        <section id="user-info">
        {email && (
          <span>
            Email: <span data-testid="email-field">{email}</span>
          </span>
        )}
        <span>
          Despesa Total:
          {" "}
          <span data-testid="total-field">
            {total && Math.round(Number(total) * 100) / 100}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </span>
        </section>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number,
};

Header.defaultProps = {
  total: 0,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps)(Header);
