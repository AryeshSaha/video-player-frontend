import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({heading}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-2xl ml-5">
            {heading}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
