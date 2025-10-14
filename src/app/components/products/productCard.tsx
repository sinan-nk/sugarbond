"use client";
import Image from "next/image";
import Link from "next/link";


interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
   id:number | string;
}

export default function ProductCard({
  image,
  name,
  description,
  price,
    id,
}: ProductCardProps) {
  console.log("ProductCard id:", id);
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
      <div className="relative w-full h-64">
        <Link href={`/products/${id}`}> 
         <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        </Link>
      
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-[#004aad]">₹{price}</span>
          <button
            className="flex items-center gap-2 bg-[#004aad] text-white px-4 py-2 rounded-full text-sm hover:bg-[#003a88] transition-colors"
          >
            
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
}
