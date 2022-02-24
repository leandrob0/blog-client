import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = {
      username: formValue.username,
      password: formValue.password,
    };

    // Now i should save the token to localStorage and the username to a redux global state.
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        body
      );
      console.log(response.data);
      setErr(false);
      return navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
    }
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
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-400 rounded w-60 md:w-80 focus:outline-gray-700 p-1"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={formValue.password}
            onChange={handleChange}
            required
          />
        </fieldset>
        {err && <p className="text-red-700 max-w-[fit-content]">The username or password are incorrect!</p>}
        <button className="rounded px-4 py-2 bg-indigo-700 text-white hover:bg-indigo-900 hover:shadow-indigo-600/2020 transition">
          Log in!
        </button>
      </form>
    </div>
  );
};

export default Login;
