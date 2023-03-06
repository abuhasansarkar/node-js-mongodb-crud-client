import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-base-200 ">
      <div className="navbar w-[80%] mx-auto">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">MongoDB CRUD</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/'>Home</Link>
            </li>
            
            <li>
              <Link to='/users'>All User</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
