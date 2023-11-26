import axios from "axios";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get(
      "https://6562fbc6ee04015769a6ada1.mockapi.io/blog"
    );
    console.log(response);
    if (response.status == "200") {
      setBlogs(response.data);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className=" grid grid-cols-4 gap-3   mx-auto">
      {blogs.map((blog, index) => {
        const { title, description, createdAt, avatar } = blog;
        return (
          <>
            <div
              key={index}
              class="max-w-md  m-5 bg-white  overflow-hidden rounded-2xl  shadow-xl"
            >
              <img
                class="w-full h-64 object-cover object-center"
                src={avatar}
                alt={title}
              />

              <div class="p-6">
                <h2 class="font-bold text-xl mb-2">{title}</h2>

                <p class="text-gray-600 text-sm">
                  Published on <span class="text-gray-800">{createdAt}</span>
                </p>

                <p class="text-gray-700 mt-4">{description}</p>

                <a href="#" class="text-blue-500 mt-4 inline-block">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Blogs;
