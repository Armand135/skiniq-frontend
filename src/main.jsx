import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ScanPage from "./pages/ScanPage";
import ResultPage from "./pages/ResultPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import History from "./pages/History";
import PrivateRoute from "./components/PrivateRoute";
import "./style.css"; // Or './index.css' if that’s your main CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
        <Route path="/scan" element={<PrivateRoute><ScanPage /></PrivateRoute>} />
        <Route path="/result" element={<PrivateRoute><ResultPage /></PrivateRoute>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
