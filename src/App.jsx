import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Create from "./pages/students/Create";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/categories" element={<Dashboard />}></Route>
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/student/create" element={<Create />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
