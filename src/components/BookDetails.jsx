import { Link, useParams } from "react-router-dom";
import books from "../data/booksData";
import { MoveLeft, Star, Tag, User } from "lucide-react";

export default function BookDetails() {
  const { id } = useParams();
  // console.log("Book ID:", id);
  const book = books.find((book) => book.id.toString() === id);
  if (!book)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Book Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The book you're looking for doesn't exist.
          </p>
          <Link
            to="/books"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse
          </Link>
        </div>
      </div>
    );
  return (
    <div className="px-[2vw]">
      <Link
        to="/books"
        className="text-blue-600 font-semibold flex items-center gap-4 py-6 px-4"
      >
        <MoveLeft /> Back to Browse
      </Link>
      <div className="flex gap-4">
        <img src={book.coverImage} alt="cover-image" />
        <div className="space-y-4 pt-5">
          <h1 className="text-4xl font-bold">{book.title}</h1>
          <p className="flex items-center gap-3 text-gray-600">
            <User />
            by {book.author}
          </p>
          <p className="mt-2 w-fit flex items-center gap-2">
            <Tag height={18} className="text-gray-500" />
            <span className="text-blue-600 bg-blue-100 py-1 px-3 rounded-full font-semibold text-sm">{book.category}</span>
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${
                  i < Math.floor(book.rating)
                    ? "text-yellow-400 fill-current"
                    : i < book.rating
                    ? "text-yellow-400 fill-current opacity-50"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-800 font-semibold mt-2">Rating: {book.rating} / 5</p>
          <div className="mt-2 space-y-5">
            <p className="text-2xl font-semibold">Description</p>
            <p className="text-lg text-gray-600">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
