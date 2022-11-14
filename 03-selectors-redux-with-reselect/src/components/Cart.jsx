import React from 'react';

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { createSelector } from "reselect"

import * as cartActions from "../redux/actions/cart"

const Cart = ({
  cart,
  total,
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
      Total: <strong>{total}</strong>
    </p>

    <button onClick={addProduct}>Add Product</button>
    <button onClick={setShipping}>Calculate Shipping</button>
  </div>
)

const calculateCartTotal = createSelector(
  // Colocamos quantos estados quisermos como parametros iniciais. O Ultimo parametro é uma
  // funcao que recebera esses estados observados, respectivamente (na ordem que foi declarado)
  cart => cart.items,
  (items) => {
    // Agora esse valor sera calculado apenas quando houver mudança nos estados observados
    console.log("CALCULOU")

    return (items.reduce((subtotal, item) => subtotal + item.price, 0))
  }
)

const mapStateToProps = state => ({
  cart: state.cart,
  total: calculateCartTotal(state.cart)
})

const mapDispatchToProps = dispatch => bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
