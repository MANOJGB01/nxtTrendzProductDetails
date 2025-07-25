import Popup from 'reactjs-popup'

import Payment from '../Payment'

import CartContext from '../../context/CartContext'

import './index.css'

// Write your code here

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs{total}{' '}
              /-
            </h1>
            <p className="total-items">Items in cart</p>
            <Popup
              modal
              trigger={
                <button type="button" className="checkout-button d-sm-none">
                  Checkout
                </button>
              }
              position="top left"
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
