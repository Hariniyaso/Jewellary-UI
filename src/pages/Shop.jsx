import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";

function Shop({
  products,
  addToCart,
  addToWishlist,
  wishlist
}) {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });


  return (

    <div className="shop-page">

      <div className="shop-header">

        <p>EXPLORE OUR COLLECTION</p>

        <h1>Shop Jewelry</h1>

        <p>
          Find something beautiful for every occasion.
        </p>

      </div>


      <div className="filters">

        <input
          type="text"
          placeholder="Search jewelry..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          <option value="All">
            All Categories
          </option>

          <option value="Rings">
            Rings
          </option>

          <option value="Necklaces">
            Necklaces
          </option>

          <option value="Earrings">
            Earrings
          </option>

          <option value="Bracelets">
            Bracelets
          </option>

        </select>

      </div>


      <div className="products-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              isWishlisted={
                wishlist.some(
                  item => item.id === product.id
                )
              }
            />

          ))

        ) : (

          <h2>No products found</h2>

        )}

      </div>

    </div>
  );
}

export default Shop;