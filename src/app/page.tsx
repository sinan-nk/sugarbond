"use client";
import ProductCard from "@/app/components/products/productCard";
import { products } from "@/app/data/constant";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-3xl font-bold text-center text-[#004aad] mb-10">
        Our Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
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
