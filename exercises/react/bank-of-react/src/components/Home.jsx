import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
      return (
          <div>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>
  
            <Link to="/userProfile">User Profile</Link><br />
            <Link to="/account">Account Balance</Link><br />
            <Link to="/debits">Debits</Link><br />
            <Link to="/credits">Credits</Link><br />
            <Link to="/login">Log out</Link>

  
            {/* <AccountBalance accountBalance={this.props.accountBalance}/> */}
          </div>
      );
    }
  }

export default Home;