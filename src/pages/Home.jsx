import React from "react";
import { Link } from "react-router-dom";

function Home({ products, addToCart, addToWishlist, wishlist }) {

  const featuredProducts = products.slice(0, 4);

  return (

    <div>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p>TIMELESS ELEGANCE</p>

          <h1>
            Jewelry that
            <br />
            tells your story.
          </h1>

          <p>
            Discover our beautiful collection
            of timeless jewelry.
          </p>

          <Link to="/shop" className="shop-button">
            SHOP COLLECTION
          </Link>

        </div>

      </section>


      {/* CATEGORIES */}

      <section className="categories">

        <h2>Shop By Category</h2>

        <div className="category-container">

          <Link to="/shop?category=Rings">
            💍
            <span>Rings</span>
          </Link>

          <Link to="/shop?category=Necklaces">
            📿
            <span>Necklaces</span>
          </Link>

          <Link to="/shop?category=Earrings">
            ✨
            <span>Earrings</span>
          </Link>

          <Link to="/shop?category=Bracelets">
            ⛓️
            <span>Bracelets</span>
          </Link>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}

      <section className="featured">

        <div className="section-heading">

          <p>OUR COLLECTION</p>

          <h2>New Arrivals</h2>

        </div>


        <div className="products-grid">

          {featuredProducts.map((product) => (

            <div className="simple-product" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <button
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

        <Link to="/shop" className="view-all">
          VIEW ALL PRODUCTS
        </Link>

      </section>


      {/* ABOUT */}

      <section className="about-home">

        <div>

          <p>ABOUT TANISHQ</p>

          <h2>
            Crafted with love.
            <br />
            Worn with confidence.
          </h2>

          <p>
            At Lumora, we believe every piece of jewelry
            should tell a story. Our collection combines
            timeless designs with modern elegance.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Home;