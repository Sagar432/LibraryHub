import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookCard({ book, showCategory = true }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {book.title}
        </h3>

        <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
        <div className="flex items-center justify-start gap-3">
          {showCategory && (
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
              {book.category}
            </span>
          )}

          <div className="flex items-center mb-3">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {book.description}
        </p>

        <Link
          to={`/book/${book.id}`}
          className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
