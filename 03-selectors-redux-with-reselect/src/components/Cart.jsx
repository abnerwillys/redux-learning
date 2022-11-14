import React from 'react';

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

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

// Essa função já é um Selector
const calculateTotal = (items) => {
  // Quando calcular o frete esse log vai disparar. Isso é ruim para performance, 
  // pois o total nao tem relação com o frete. Devido a isso utilizamos o reselect.
  console.log("CALCULOU")

  return (items.reduce((subtotal, item) => subtotal + item.price, 0))
}

const mapStateToProps = state => ({
  cart: state.cart,
  total: calculateTotal(state.cart.items)
})

const mapDispatchToProps = dispatch => bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
