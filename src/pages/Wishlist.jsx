import React from "react";
import { Link } from "react-router-dom";

function Wishlist({
  wishlist,
  addToCart,
  removeFromWishlist
}) {

  return (

    <div className="wishlist-page">

      <h1>My Wishlist ♡</h1>


      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <h2>Your wishlist is empty</h2>

          <Link to="/shop">
            Explore Jewelry
          </Link>

        </div>

      ) : (

        <div className="products-grid">

          {wishlist.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />


              <div className="product-info">

                <h3>{product.name}</h3>

                <h4>
                  ₹{product.price.toLocaleString("en-IN")}
                </h4>


                <button
                  className="add-button"
                  onClick={() =>
                    addToCart(product)
                  }
                >
                  Add to Cart
                </button>


                <button
                  className="remove-wishlist"
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;