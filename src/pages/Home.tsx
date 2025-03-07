// filepath: src/pages/Home.tsx
import React from 'react';

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: "$29.99",
    image: "path/to/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: "$39.99",
    image: "path/to/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for product 3",
    price: "$49.99",
    image: "path/to/product3.jpg",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;