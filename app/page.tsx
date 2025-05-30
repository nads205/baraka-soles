
import React from "react";

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Sabr Socks",
      translation: "Patience",
      description: "Soft, breathable socks with 'Sabr' in elegant Arabic calligraphy on the sole.",
      price: 12.99,
      image: "https://via.placeholder.com/400x300?text=Sabr+Socks",
    },
    {
      id: 2,
      name: "Shukr Socks",
      translation: "Gratitude",
      description: "Celebrate thankfulness every step of the way.",
      price: 12.99,
      image: "https://via.placeholder.com/400x300?text=Shukr+Socks",
    },
    {
      id: 3,
      name: "Baraka Socks",
      translation: "Blessing",
      description: "A daily reminder of divine favor.",
      price: 12.99,
      image: "https://via.placeholder.com/400x300?text=Baraka+Socks",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold tracking-tight">Baraka Soles</h1>
        <p className="mt-4 text-xl italic">Step into Blessings</p>
        <button className="mt-6 text-lg px-6 py-3 bg-emerald-600 text-white rounded-full">Shop Now</button>
      </header>

      <section className="py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl shadow-md bg-white overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600 italic mb-2">{product.translation}</p>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <button className="w-full bg-emerald-500 text-white py-2 rounded-lg">Buy - ${product.price}</button>
            </div>
          </div>
        ))}
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; 2025 Baraka Soles. Founded by Asim & Naadir.
      </footer>
    </div>
  );
}
