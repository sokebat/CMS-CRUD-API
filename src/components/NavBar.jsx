import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-3xl font-bold  hover:text-zinc-400">
          CMS
        </Link>

        <div className="space-x-4">
          <NavLink to="/" className="text-white font-bold hover:text-zinc-300">
            Blogs
          </NavLink>

          <NavLink
            to="/create-blog"
            className="text-white font-bold hover:text-zinc-400"
          >
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
