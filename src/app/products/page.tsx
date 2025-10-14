"use client";

import ProductCard from "../components/products/productCard"; // adjust if your path differs
import { products } from "../data/constant";

export default function ProductsPage() {
  const handleAddToCart = (name: string) => {
    alert(`${name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-[#004aad] mb-10">
        Our Products
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
}
