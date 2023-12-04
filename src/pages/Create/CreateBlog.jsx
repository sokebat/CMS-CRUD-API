import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const createBlog = async (e) => {
    e.preventDefault();
    // const data = { title: title, description: description, avatar: image };
    const data = { title, description, avatar: image };

    /*
     
    //another way to handel form

    const formData = new FormData(e.currentTarget)
    const fdata = Object.fromEntries(formData)
    console.log(fdata)

    */

    const response = await axios.post(
      "https://6562fbc6ee04015769a6ada1.mockapi.io/blog",
      data
    );

    if (response.status == 201) {
      //   window.location.href = "/";
      navigate("/");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-xl p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>

      <form onSubmit={createBlog}>
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
            name="title"
            required
            placeholder="Enter Title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
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
            placeholder="Enter Description"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Image URL"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
