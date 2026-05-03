import React from "react";

const Products = ({ item }) => {
  const { name, price, category } = item;
  return (
    <div className="card w-96 bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <p>{category}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
