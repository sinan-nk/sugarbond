export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  weight:string;
  rating:number;
  reviews:number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Spicy Mango Pickle",
    description:
      "Homemade traditional mango pickle with authentic Kerala spices and tangy flavor.",
    price: 199,
    image: "/pickle.jpg",
     weight: "300g",
    rating: 5,
    reviews: 10,

  },
  {
    id: 2,
    name: "Lemon Pickle",
    description:
      "Zesty and tangy lemon pickle made from fresh handpicked lemons and aromatic masalas.",
    price: 179,
    image: "/lemon-pickle.jpg",
     weight: "250g",
    rating: 4,
    reviews: 8,
  },
  {
    id: 3,
    name: "Mixed Veg Pickle",
    description:
      "A delicious combination of vegetables pickled in traditional Indian spices.",
    price: 189,
    image: "/mixed-veg-pickle.jpg",
     weight: "250g",
    rating: 4,
    reviews: 8,
  },
  {
    id: 4,
    name: "Garlic Pickle",
    description:
      "Bold and spicy garlic pickle made with pure mustard oil and home-style seasoning.",
    price: 169,
    image: "/garlic-pickle.jpg",
     weight: "250g",
    rating: 4,
    reviews: 8,
  },
  {
    id: 5,
    name: "Ginger Pickle",
    description:
      "Tangy and slightly sweet ginger pickle — a perfect side for traditional Kerala meals.",
    price: 159,
    image: "/ginger-pickle.jpg",
     weight: "250g",
    rating: 4,
    reviews: 8,
  },
];
