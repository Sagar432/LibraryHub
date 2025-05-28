import { NavLink, Link } from "react-router-dom";
import { Book, BookCopy, Home, Plus, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 w-full bg-white shadow-2xl z-50">
        <div className="flex items-center justify-between py-4 sm:py-6 px-[3vw] sm:px-[2vw]">
          {/* Logo */}
          <h1 className="text-xl font-semibold">
            <Link
              to="/"
              className="flex items-center gap-1 sm:gap-2"
              onClick={closeMenu}
            >
              <Book className="text-blue-500" />
              <span className="text-gray-600 text-shadow-lg text-shadow-blue-400 text-base sm:text-xl">
                LibraryHub
              </span>
            </Link>
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden sm:flex items-center gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-blue-600 font-semibold bg-blue-100 py-2 px-3 rounded-md"
                      : "text-gray-700"
                  }`
                }
              >
                <Home />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-blue-600 font-semibold bg-blue-100 py-2 px-3 rounded-md"
                      : "text-gray-700"
                  }`
                }
              >
                <BookCopy />
                Browse Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-blue-600 font-semibold bg-blue-100 py-2 px-3 rounded-md"
                      : "text-gray-700"
                  }`
                }
              >
                <Plus />
                Add Book
              </NavLink>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <button className="sm:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="sm:hidden absolute px-[3vw] pb-4 bg-white w-full"
            onClick={closeMenu}
          >
            <ul className="flex flex-col gap-4 border-t pt-4 px-[4vw] text-sm">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`
                  }
                >
                  <Home />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/books"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`
                  }
                >
                  <BookCopy />
                  Browse Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`
                  }
                >
                  <Plus />
                  Add Book
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      <div onClick={closeMenu}></div>
      </nav>
    </>
  );
}
