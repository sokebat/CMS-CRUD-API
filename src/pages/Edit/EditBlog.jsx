import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setblog] = useState({});
  const navigate = useNavigate();

  const fetchblog = async () => {
    const response = await axios.get(
      `https://6562fbc6ee04015769a6ada1.mockapi.io/blog/${id}`
    );
    setblog(response.data);
  };

  const editBlog = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      "https://6562fbc6ee04015769a6ada1.mockapi.io/blog/" + id,
      blog
    );
    console.log(response);

    if (response.status == 200) {
      navigate("/blog/" + id);
    }
  };
  useEffect(() => {
    fetchblog();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-xl p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>

      <form onSubmit={editBlog}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={blog?.title}
            onChange={(e) => setblog({ ...blog, title: e.target.value })}
            name="title"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={blog?.description}
            onChange={(e) => setblog({ ...blog, description: e.target.value })}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter Image Url
          </label>
          <input
            type="text"
            id="image"
            name="avatar"
            value={blog?.avatar}
            onChange={(e) => setblog({ ...blog, avatar: e.target.value })}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Edit Post
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
