import React from "react";

const products = [
  {
    id: 1,
    image: "sheep-img.png",
    title: "Cloud Software",
    description:
      "Because our platform is cloud-based, farmers can access it from anywhere, using their computer, smartphone, or tablet. This means they can monitor their farms and make informed decisions even when they are away from the farm.",
  },
  {
    id: 2,
    image: "sheep-img.png",
    title: "Product 2",
    description: "Short description of Product 2.",
  },
  {
    id: 3,
    image: "sheep-img.png",
    title: "Product 3",
    description: "Short description of Product 3.",
  },
];

function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      {products.map((product, index) => (
        <section
          key={product.id}
          className={`flex h-screen w-full px-8 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          } items-center justify-start`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-1/2 h-3/4 object-cover rounded-lg mr-6"
          />
          <div className="w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">{product.title}</h3>
            <p className="text-gray-600 text-lg">{product.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductsPage;
