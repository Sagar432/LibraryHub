// import { Link } from "react-router-dom";
// import { Book, Home, Plus } from "lucide-react";

// export default function Header() {
//   return (
//     <nav className="flex items-center justify-between py-6 px-[2vw] border">
//       <h1 className="text-xl font-semibold">
//         <Link to={"/"} className="flex items-center gap-2">
//           <Book />
//           LibraryHub
//         </Link>
//       </h1>
//       <ul className="flex items-center gap-10">
//         <li>
//           <Link to="/" className="flex items-center gap-2">
//             <Home />
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/books" className="flex items-center gap-2">
//             <Book />
//             Browse Books
//           </Link>
//         </li>
//         <li>
//           <Link to="/add" className="flex items-center gap-2">
//             <Plus />
//             Add Book
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import { NavLink, Link } from "react-router-dom";
import { Book, BookCopy, Home, Plus } from "lucide-react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between py-6 px-[2vw] border">
      <h1 className="text-xl font-semibold">
        <Link to="/" className="flex items-center gap-2">
          <Book className="text-blue-500" />
          <span className="text-gray-600 text-shadow-lg text-shadow-blue-400">LibraryHub</span>
        </Link>
      </h1>
      <ul className="flex items-center gap-10">
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
    </nav>
  );
}
