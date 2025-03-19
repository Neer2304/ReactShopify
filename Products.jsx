import { useLoaderData } from "react-router-dom"; // assuming you're using react-router-dom

export const Products = () => {
  const products = useLoaderData(); // Load product data
  const { id, title, description, rating, price, image, category } = products;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{category}</p>
        <p className="text-gray-700 mt-2">{description.slice(0, 100)}...</p>
        <div className="flex items-center mt-4">
          <span className="text-lg font-semibold text-blue-600">${price}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {"⭐".repeat(Math.round(rating))}
          </span>
          <span className="text-sm text-gray-500 ml-2">({rating})</span>
        </div>
      </div>
    </div>
  );
};
