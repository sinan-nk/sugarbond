"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/app/data/constant";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-20 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-96 h-[450px] object-contain rounded-lg shadow-md bg-white p-6"
          />
        </div>

        {/* Right: Product Info */}
        <div className="space-y-5">
          <p className="uppercase tracking-wide text-sm text-gray-500">
            sugar bond
          </p>
          <h1 className="text-4xl font-semibold leading-snug">
            {product.name}{" "}
            <span className="text-gray-600">({product.weight})</span>
          </h1>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: product.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              ({product.reviews} reviews)
            </p>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-gray-900">
            ₹ {product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">
            Tax included. Shipping calculated at checkout.
          </p>

          {/* Quantity Control */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="px-3 py-1 border rounded-md hover:bg-gray-100"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="px-3 py-1 border rounded-md hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#004aad] text-white py-3 px-6 rounded-md font-semibold transition-all duration-30 hover:shadow-[0_0_0_2px_#005FF0]">
              Add to cart
            </button>
            <button className="border border-[#004aad] text-[#004aad] py-3 px-6 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_0_2px_#005FF0]">
              Buy it now
            </button>
          </div>

          {/* Description */}
          <div className="pt-6 border-t border-gray-300">
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
