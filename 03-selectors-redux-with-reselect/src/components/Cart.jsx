import React from 'react';

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as cartActions from "../redux/actions/cart"

const Cart = ({
  cart,
  addProduct,
  setShipping,
}) => (
  <div>
    <h1>Cart</h1>

    <p>
      Items: <strong>{cart.items.length}</strong>
    </p>
    <p>
      Shipping Value: <strong>{cart.shipping_value}</strong>
    </p>
    <p>
      Total: <strong>601</strong>
    </p>

    <button onClick={addProduct}>Add Product</button>
    <button onClick={setShipping}>Calculate Shipping</button>
  </div>
)

const mapStateToProps = state => ({
  cart: state.cart
})
const mapDispatchToProps = dispatch => bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
