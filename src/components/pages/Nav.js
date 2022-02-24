import { NavLink } from "react-router-dom";

const Navbar = () => {

  const logout = () => {
    // reset states from the user.
    localStorage.clear();
  }

  return (
    <nav className="flex justify-between bg-indigo-900 p-6 text-white">
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
        <div className="flex justify-center flex-col sm:flex-row">
          <p className="px-3" onClick={() => logout()} >Logout</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
