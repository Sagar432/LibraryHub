import { useMemo, useState } from "react";
import books from "../data/booksData";
import { Filter, Search } from "lucide-react";
import BookCard from "./ui/BookCard";
import { useSelector } from "react-redux";

export default function BrowseBooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const addedBooks = useSelector((state) => state.books.list);

  const allBooks = [...books, ...addedBooks];
  const filteredBooks = useMemo(() => {
    let filtered = allBooks;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (book) => book.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [books, selectedCategory, searchTerm]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const categories = ["all", "fiction", "non-fiction", "sci-fi", "fantasy"];
  return (
    <section className="pt-8 px-[3vw]">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {selectedCategory === "all"
            ? "All Books"
            : selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
        </h1>
        <p className="text-gray-600">
          {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""}{" "}
          found
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 mx-[16vw]">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[150px]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all"
                    ? "All Categories"
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} showCategory />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or browse a different category.
            </p>
          </div>
        )}
    </section>
  );
}
