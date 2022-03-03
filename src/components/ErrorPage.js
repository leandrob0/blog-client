import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetClicked } from "../features/post";
import { logout } from "../features/user";

const ErrorPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateLog = () => {
    dispatch(resetClicked());
    dispatch(logout());
    return navigate("/login");
  };

  return (
    <div className="flex mt-16 justify-center">
      <h1>
        Your session expired, please{" "}
        <button
          type="button"
          onClick={navigateLog}
          className="rounded px-2 py-2 mx-2 bg-indigo-700 text-white hover:bg-indigo-900 hover:shadow-indigo-600/2020 transition"
        >
          Log in
        </button>{" "}
        and try again.
      </h1>
    </div>
  );
};

export default ErrorPage;
