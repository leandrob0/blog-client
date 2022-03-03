import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/users";

const Register = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    cf_password: "",
  });
  const [err, setErr] = useState({
    errMsg: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });

    setErr({
      errMsg: "",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = {
      username: formValue.username,
      password: formValue.password,
    };

    if (formValue.password !== formValue.cf_password) {
      setErr({
        errMsg: "The passwords do not match",
      });
      return;
    }

    registerUser(body)
      .then(() => {
        setErr({
          errMsg: "",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setErr({
          errMsg: err.msg,
        });
      });
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col p-10 m-20 gap-10 border border-gray-400 rounded shadow-lg break-words focus:border-gray-700"
      >
        <fieldset className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            className="border border-gray-400 rounded w-60 md:w-80 focus:outline-gray-700 p-1"
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            value={formValue.username}
            onChange={handleChange}
            required
          />
          <ul>
            <li className="max-w-[fit-content] text-sm text-red-600 font-bold">
              Username must be unique.
            </li>
          </ul>
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-400 rounded w-60 md:w-80 focus:outline-gray-700 p-1 invalid:border-red-500"
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            minLength="8"
            value={formValue.password}
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="cf-password">Confirm Password</label>
          <input
            className="border border-gray-400 rounded w-60 md:w-80 focus:outline-gray-700 p-1 invalid:border-red-500"
            type="password"
            id="cf_password"
            name="cf_password"
            autoComplete="new-password"
            minLength="8"
            value={formValue.cf_password}
            onChange={handleChange}
            required
          />
          <ul>
            <li className="max-w-[fit-content] text-sm text-red-600 font-bold">
              Password must be at least 8 characters long.
            </li>
          </ul>
        </fieldset>
        {err.errMsg !== "" && (
          <p className="text-red-700 max-w-[fit-content] align-middle">
            {err.errMsg}
          </p>
        )}
        <button className="rounded px-4 py-2 bg-indigo-700 text-white hover:bg-indigo-900 hover:shadow-indigo-600/2020 transition">
          Register!
        </button>
      </form>
    </div>
  );
};

export default Register;
