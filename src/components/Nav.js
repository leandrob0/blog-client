import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-900 p-6 text-white">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      {!localStorage.getItem("token") ? (
        <div className="flex justify-center flex-col sm:flex-row">
          <NavLink className="px-3" to="/login">
            Log in
          </NavLink>
          <NavLink className="px-3" to="/register">
            Register
          </NavLink>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
