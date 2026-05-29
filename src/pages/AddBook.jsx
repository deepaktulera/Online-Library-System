import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";

const AddBook = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    rating: "",
    image: "",
  });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleImageChange(e) {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  }

  function handleSubmit(e) {

    e.preventDefault();

    const newBook = {
      id: Date.now(),
      ...formData,
    };

    dispatch(addBook(newBook));

    setFormData({
      title: "",
      author: "",
      description: "",
      category: "",
      rating: "",
      image: "",
    });

    e.target.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full w-full flex justify-center items-center py-6"
    >

      <div className="sm:w-[40%] flex flex-col gap-4">

        <input
          className="border-b outline-none py-2"
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          className="border-b outline-none py-2"
          type="text"
          name="author"
          placeholder="Enter Author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <textarea
          className="border-b outline-none py-2"
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <select
          className="border-b outline-none py-2"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Biography">Biography</option>
        </select>

        <input
          className="border-b outline-none py-2"
          type="number"
          name="rating"
          placeholder="Enter Rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />

        <input
          className="border-b outline-none py-2"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          required
        />

        <button
          className="my-2 px-2 py-1 rounded-full font-semibold text-lg bg-linear-to-r from-green-400 to-emerald-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-105 transition-all duration-300"
          type="submit"
        >
          Add Book
        </button>

      </div>

    </form>
  );
};

export default AddBook;