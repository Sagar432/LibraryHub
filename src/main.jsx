import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import Home from "./components/Home.jsx";
import AddBook from "./components/AddBook.jsx";
import BookDetails from "./components/BookDetails.jsx";
import Category from "./components/Category.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:category",
        element: <Category />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/add",
        element: <AddBook />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
