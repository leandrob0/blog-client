import { NavLink } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../../features/user";

const Navbar = () => {
  const username = useSelector((state) => state.user.value.username);
  const dispatch = useDispatch()

  const clickLogout = () => {
    // Resets the global redux state for the username.
    dispatch(logout());
    localStorage.clear();
  }

  return (
    <nav className="flex justify-between bg-indigo-900 p-6 text-white">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      {username === "" ? (
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
          <p className="px-3" onClick={() => clickLogout()} >Logout</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
