import { Link } from "react-router-dom";
import books from "../data/booksData";
import { Award, Book, BookCheck, BookUp, Search, Users } from "lucide-react";
import StatsCard from "./ui/StatsCard";
import BookCard from "./ui/BookCard";

export default function Home() {
  const categories = [
    {
      name: "Fiction",
      count: books.filter((b) => b.category === "Fiction").length,
      color: "bg-blue-500",
      icon: Book,
    },
    {
      name: "Non-Fiction",
      count: books.filter((b) => b.category === "Non-Fiction").length,
      color: "bg-green-500",
      icon: BookUp,
    },
    {
      name: "Sci-Fi",
      count: books.filter((b) => b.category === "Sci-Fi").length,
      color: "bg-purple-500",
      icon: BookCheck,
    },
    {
      name: "Fantasy",
      count: books.filter((b) => b.category === "Fantasy").length,
      color: "bg-pink-500",
      icon: Book,
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-8">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to <span className="text-primary">LibraryHub</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover thousands of books across various genres. From timeless
          classics to contemporary bestsellers, find your next great read in our
          comprehensive collection.
        </p>
        <div className="flex items-center justify-center">
          <Link
            to={"/books"}
            className="flex items-center gap-2 bg-white text-blue-600 py-2 px-4 rounded-md font-semibold"
          >
            <Search />
            Start Browsing
          </Link>
        </div>
      </section>
      {/* Stats Section */}
      <section className="flex gap-8 items-center justify-center w-full mt-6 mb-12">
        <StatsCard icon={Book} value={books.length} title={"Books Available"} />
        <StatsCard icon={Users} value={10} title={"Active Readers"} />
        <StatsCard icon={Award} value={500} title={"Award Winners"} />
      </section>
      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/books/${category.name.toLowerCase()}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-gray-200 w-72 sm:w-80">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.count} books
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      {/* Popular Books Section */}
      <section className="px-[3vw]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Popular Books</h2>
          <Link
            to="/books"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} showCategory />
          ))}
        </div>
      </section>
    </div>
  );
}
