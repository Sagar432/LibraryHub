import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-200 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Online Library System. All rights reserved.
          </p>
          <p>Developed by <Link to="https://www.linkedin.com/in/thesagarpatra/" className="text-blue-500 hover:text-blue-700 duration-300 cursor-pointer font-semibold">Sagar Patra</Link></p>
        </div>
      </div>
    </footer>
  );
}