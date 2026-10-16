import React from "react";
import { Link } from "react-router-dom";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  if (cart.length === 0) {

    return (

      <div className="empty-cart">

        <h1>Your Cart is Empty </h1>

        <p>
          Looks like you haven't added anything yet.
        </p>

        <Link to="/shop">
          Continue Shopping
        </Link>

      </div>

    );
  }


  return (

    <div className="cart-page">

      <h1>Your Shopping Cart</h1>


      <div className="cart-container">

        <div className="cart-items">

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p>
                  ₹{item.price.toLocaleString("en-IN")}
                </p>


                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>


              <div>

                <h3>
                  ₹{(
                    item.price * item.quantity
                  ).toLocaleString("en-IN")}
                </h3>

                <button
                  className="remove"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>


        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>

            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>


          <div className="summary-row">
            <span>Delivery</span>
            <span>FREE</span>
          </div>


          <hr />


          <div className="summary-row total">
            <span>Total</span>

            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>


          <button className="checkout">
            PROCEED TO CHECKOUT
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;