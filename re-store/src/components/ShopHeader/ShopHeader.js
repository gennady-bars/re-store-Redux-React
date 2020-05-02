import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './ShopHeader.css';

const ShopHeader = ({ numItems, total, ...props }) => {
  
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

function mapStateToProps(state) {
  const quantity = state.cartItems.reduce((a, b) => a + b.count, 0)
  
  return {
    numItems: quantity,
    total: state.orderTotal
  }
}

export default connect(mapStateToProps)(ShopHeader);
