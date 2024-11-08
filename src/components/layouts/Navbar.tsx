import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./buttons/ThemeBtn";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "btn btn-ghost text-primary" : "btn btn-ghost"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/transaction"}
                  className={({ isActive }) =>
                    isActive ? "btn btn-ghost text-primary" : "btn btn-ghost"
                  }
                >
                  Transaction
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/product"}
                  className={({ isActive }) =>
                    isActive ? "btn btn-ghost text-primary" : "btn btn-ghost"
                  }
                >
                  Product
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={`/`} className="btn btn-ghost text-xl">
            <p>
              E-<span className="text-primary">Transaction</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost text-primary border-0 border-b-2 border-primary"
                    : "btn btn-ghost"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/transaction"}
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost text-primary border-0 border-b-2 border-primary"
                    : "btn btn-ghost"
                }
              >
                Transaction
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/product"}
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost text-primary border-0 border-b-2 border-primary"
                    : "btn btn-ghost"
                }
              >
                Product
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeBtn />
        </div>
      </div>
    </>
  );
};

export default Navbar;
