import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  const [blog, setblog] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchblog = async () => {
    const response = await axios.get(
      `https://6562fbc6ee04015769a6ada1.mockapi.io/blog/${id}`
    );

    if (response.status === 200) {
      setblog(response.data);
    }
  };

  const deleteBlog = async () => {
    const response = await axios.delete(
      `https://6562fbc6ee04015769a6ada1.mockapi.io/blog/${id}`
    );

    if (response.status === 200) {
      navigate("/");
    }
  };

  useEffect(() => {
    fetchblog();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-4 my-4">
      <img
        src={blog?.avatar}
        alt={blog?.title}
        className="object-cover w-full h-80 rounded-md"
        style={{ objectFit: "cover" }}
      />

      <h1 className="text-xl font-bold mb-2">{blog?.title}</h1>

      <p className="text-gray-700 text-sm">{blog?.description}</p>
      <div className="mt-2 flex justify-end">
        <button
          onClick={() => navigate("/edit/" + id)}
          className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-sm"
        >
          Update
        </button>
        <button
          onClick={deleteBlog}
          className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Blog;
