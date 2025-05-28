import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "lucide-react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";

const AddBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "",
    coverImage: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];

  const defaultImages = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551029506-0807df4e2031?w=300&h=450&fit=crop",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    if (!formData.category) newErrors.category = "Category is required";

    const ratingNum = Number(formData.rating);
    if (!ratingNum || ratingNum < 1 || ratingNum > 5) {
      newErrors.rating = "Rating must be between 1 to 5";
    }

    if (!formData.coverImage.trim())
      newErrors.coverImage = "Cover image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const saveToLocalStorage = (book) => {
    const existing = JSON.parse(localStorage.getItem("books") || "[]");
    localStorage.setItem("books", JSON.stringify([...existing, book]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newBook = {
        ...formData,
        rating: Number(formData.rating),
        id: Date.now(), // simple ID
      };
      dispatch(addBook(newBook));
      navigate("/books");
      setFormData({
        title: "",
        author: "",
        description: "",
        rating: "",
        category: "",
        coverImage: "",
      });
      navigate("/books");
    } catch (error) {
      console.error("Error adding book:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8 bg-gray-50">
        <div className="mb-8">
          <h1 className="text-xl sm:text-4xl font-bold text-gray-800 mb-1 sm:mb-4">
            Add New Book
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Fill out the form below to add a new book to the library.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Book Title <span className="text-red-600 text-lg">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter book title"
                />
                {errors.title && (
                  <p className="text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author <span className="text-red-600 text-lg">*</span>
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleInputChange("author", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 ${
                    errors.author ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter author name"
                />
                {errors.author && (
                  <p className="text-sm text-red-600">{errors.author}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category <span className="text-red-600 text-lg">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating (1-5) <span className="text-red-600 text-lg">*</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={(e) => handleInputChange("rating", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 ${
                    errors.rating ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., 4.5"
                />
                {errors.rating && (
                  <p className="text-sm text-red-600">{errors.rating}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-600 text-lg">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter a detailed description (min 10 characters)"
              />
              <div className="flex justify-between mt-1">
                {errors.description && (
                  <p className="text-sm text-red-600">{errors.description}</p>
                )}
                <p className="text-sm text-gray-500">
                  {formData.description.length} characters
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image URL <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="url"
                value={formData.coverImage}
                onChange={(e) =>
                  handleInputChange("coverImage", e.target.value)
                }
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 ${
                  errors.coverImage ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="https://example.com/book-cover.jpg"
              />
              {errors.coverImage && (
                <p className="text-sm text-red-600">{errors.coverImage}</p>
              )}

              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">
                  Or choose from default covers:
                </p>
                <div className="flex gap-2 flex-wrap">
                  {defaultImages.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleInputChange("coverImage", img)}
                      className="w-16 h-20 border-2 rounded overflow-hidden hover:border-blue-500"
                    >
                      <img
                        src={img}
                        alt={`Cover ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {formData.coverImage && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preview
                </label>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={formData.coverImage}
                    alt="Book preview"
                    className="w-20 h-28 object-cover rounded"
                    onError={(e) => {
                      const fallback = defaultImages[0];
                      if (e.currentTarget.src !== fallback) {
                        e.currentTarget.src = fallback;
                      }
                    }}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {formData.title || "Book Title"}
                    </h3>
                    <p className="text-gray-600">
                      {formData.author || "Author"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formData.category || "Category"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate("/books")}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center cursor-pointer ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-b-2 border-white mr-2 rounded-full"></div>
                    Adding...
                  </>
                ) : (
                  <>
                    <Book className="h-4 w-4 mr-2" />
                    Add Book
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddBook;
