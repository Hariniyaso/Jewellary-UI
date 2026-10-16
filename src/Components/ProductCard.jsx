import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  product,
  addToCart,
  addToWishlist,
  isWishlisted
}) {

  return (

    <div className="product-card">

      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <button
          className="wishlist-button"
          onClick={() => addToWishlist(product)}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

      </div>

      <div className="product-info">

        <p className="category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <h4>
          ₹{product.price.toLocaleString("en-IN")}
        </h4>

        <div className="product-buttons">

          <Link
            to={`/product/${product.id}`}
            className="view-button"
          >
            View
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="add-button"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;