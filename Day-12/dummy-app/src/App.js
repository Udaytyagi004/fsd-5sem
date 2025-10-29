import React from "react";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd1PJttN-CB9q6n6MdJHf3ppbi0FSBD873w&s",
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd1PJttN-CB9q6n6MdJHf3ppbi0FSBD873w&s",
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd1PJttN-CB9q6n6MdJHf3ppbi0FSBD873w&s",
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://via.placeholder.com/300x200?text=Product+4",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Products
      </h1>
      <div className="flex  gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-center text-lg font-semibold py-3 text-gray-700">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
