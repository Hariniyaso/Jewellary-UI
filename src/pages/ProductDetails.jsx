import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails({
  products,
  addToCart,
  addToWishlist,
  wishlist
}) {

  const { id } = useParams();

  const product = products.find(
    item => item.id === Number(id)
  );


  if (!product) {

    return (

      <div className="not-found">

        <h2>Product not found</h2>

        <Link to="/shop">
          Back to Shop
        </Link>

      </div>

    );
  }


  const isWishlisted = wishlist.some(
    item => item.id === product.id
  );


  return (

    <div className="product-details">

      <div className="details-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>


      <div className="details-content">

        <p className="category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <div className="rating">
          ★★★★★
        </div>

        <h2>
          ₹{product.price.toLocaleString("en-IN")}
        </h2>

        <p>
          {product.description}
        </p>

        <p>
          <strong>Material:</strong> Premium Quality
        </p>

        <p>
          <strong>Delivery:</strong> Free delivery
        </p>


        <button
          className="large-add-button"
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>


        <button
          className="wishlist-detail"
          onClick={() => addToWishlist(product)}
        >
          {isWishlisted
            ? "♥ Added to Wishlist"
            : "♡ Add to Wishlist"}
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;