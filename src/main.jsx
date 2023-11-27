import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Blog from "./pages/Blog/Blog.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CreateBlog from "./pages/Create/CreateBlog.jsx";
import EditBlog from "./pages/Edit/EditBlog.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Blogs />} />
      <Route path="blog/:id" element={<Blog />} />
      <Route path="create-blog" element={<CreateBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
