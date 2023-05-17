import { Link } from "react-router-dom";
import logo from '../../../../assets/logo3.png'
import './Navbar.css'
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link className=" font-bold" to="/">Home</Link>
      </li>
      <li>
        <Link className=" font-bold">All Toys</Link>
      </li>
      <li>
        {" "}
        <Link className=" font-bold">My Toys</Link>
      </li>
      <li>
        <Link className=" font-bold">Add Toys</Link>
        <Link className=" font-bold">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            
           {navItems}
          </ul>
        </div>
     
            <img  src={logo} style={{width:"150px"}}/>
       
        {/* <Link className=" normal-case text-2xl font-bold">Speedy-Racer-Toys</Link> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
    
      <div className="navbar-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-5">
          <div className="w-50 rounded-full">
            <img src="https://i.ibb.co/Btgytwv/favicon.png" />
          </div>
        </label>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
