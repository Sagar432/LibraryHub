import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full">
      <h2 className="text-3xl font-semibold">404 Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
      <p className="text-gray-500 mt-2">
        Please check the URL or return to the home page.
      </p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Go to Home
      </Link>
    </div>
  );
}
