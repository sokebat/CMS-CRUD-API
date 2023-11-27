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

    console.log(response.data);
    if (response.status == 200) {
      setblog(response.data);
    }
  };

  const deleteBlog = async () => {
    const response = await axios.delete(
      `https://6562fbc6ee04015769a6ada1.mockapi.io/blog/${id}`
    );

    if ((response.status = 200)) {
      navigate("/");
    }
  };

  useEffect(() => {
    fetchblog();
  }, []);

  return (
    <div className="max-w-xl  mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 my-8">
      <img
        src={blog?.avatar}
        alt={blog?.title}
        className="w-full  object-cover object-center mb-4"
      />

      <h1 className="text-2xl font-bold mb-2">{blog?.title}</h1>

      <p className="text-gray-700">{blog?.description}</p>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Update
        </button>
        <button
          onClick={deleteBlog}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Blog;
