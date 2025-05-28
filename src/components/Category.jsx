import { useParams } from "react-router-dom";
import books from "../data/booksData";
import BookCard from "./ui/BookCard";

const Category = () => {
  const { category } = useParams();
  const filteredBooks = books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 capitalize">
        {category} Books
      </h1>

      {filteredBooks.length === 0 ? (
        <p className="text-gray-600">No books found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
