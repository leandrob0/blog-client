import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/pages/Nav";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Homepage from "./components/pages/Homepage";
import PostDetail from "./components/pages/PostDetail";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/post" element={<PostDetail />} />
        <Route exact path="/err" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
