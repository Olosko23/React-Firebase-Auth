import React from "react";
import { FaWaveSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-12 bg-gray-300 flex justify-between px-2 py-2">
      <div>
        <Link to="/home">
          <FaWaveSquare size={30} />
        </Link>
      </div>
      <div className="flex gap-3">
        <Link to="/home">Home</Link>
        <Link to="/home">About</Link>
        <Link to="/home">Services</Link>
      </div>
      <div className="flex gap-2">
        <Link to="/">Sign in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Header;
