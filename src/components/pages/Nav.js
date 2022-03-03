import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user";

const Navbar = () => {
  const username = useSelector((state) => state.user.value.username);
  const dispatch = useDispatch();

  const clickLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="flex justify-between bg-indigo-900 p-6 text-white">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      {username === "" ? (
        <div className="flex justify-center">
          <NavLink className="px-3" to="/login">
            Log in
          </NavLink>
          <NavLink className="px-3" to="/register">
            Register
          </NavLink>
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="px-3 hover:cursor-pointer" onClick={clickLogout}>
            Logout
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
