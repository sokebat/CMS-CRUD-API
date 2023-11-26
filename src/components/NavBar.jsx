import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="bg-blue-400 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <Link to="/"  class="text-white text-lg font-bold">
          Your Logo
        </Link>

        <div class="space-x-4">
          <NavLink to="/"  class="text-white font-bold hover:text-gray-300">
            Blogs
          </NavLink>
          <NavLink to="/blog"  class="text-white font-bold hover:text-gray-300">
            Blog
          </NavLink>
           
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
