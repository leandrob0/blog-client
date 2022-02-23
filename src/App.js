import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
