import Products from "@/components/products/Products";
import React from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("failed to fetch products data");
  }
  return res.json();
};

const ProductsPage = async () => {
  const data = await getProducts();
  return (
    <div>
      <h3>Products:</h3>
      <h3>Total products: {data.length}</h3>
      <div className="grid grid-cols-3 gap-6 m-6">
        {data.map((item) => (
          <Products key={item.id} item={item}></Products>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
