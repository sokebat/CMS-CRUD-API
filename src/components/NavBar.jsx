import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-slate-400   p-1">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-black text-3xl font-bold  hover:text-zinc-200"
        >
          CMS
        </Link>

        <div className="space-x-4">
          <NavLink to="/" className="text-black font-bold hover:text-zinc-100">
            Blogs
          </NavLink>

          <NavLink
            to="/create-blog"
            className="text-black font-bold hover:text-zinc-200"
          >
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
