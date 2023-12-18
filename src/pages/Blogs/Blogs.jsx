import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://6562fbc6ee04015769a6ada1.mockapi.io/blog"
      );
      if (response.status === 200) {
        setBlogs(response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
    return description;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3 mt-2">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          onClick={() => navigate(`/blog/${blog.id}`)}
          className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
        >
          <img
            className="object-cover w-full h-50 rounded-md"
            src={blog.avatar}
            alt={blog.title}
            style={{ objectFit: "cover" }}
          />

          <div className="p-2">
            <h2 className="text-lg font-bold mb-1">{blog.title}</h2>

            <p className="text-gray-600 text-xs">
              Published on{" "}
              <span className="text-gray-800">{blog.createdAt}</span>
            </p>

            <p className="text-gray-700 mt-1">
              {truncateDescription(blog.description, 8)}
            </p>

            <button className="text-blue-500 mt-1 inline-block">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
