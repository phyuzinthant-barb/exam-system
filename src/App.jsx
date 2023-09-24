import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Create from "./pages/students/Create";
import Dashboard from "./Dashboard";
import Students from "./pages/admin/students";
import Exams from './pages/admin/Exams';
import Questions from './pages/admin/Questions'
import Reports from './pages/admin/Reports'
import Categories from './pages/admin/Categories'
import StuEdit from "./pages/admin/students/Edit"
import StuCreate from "./pages/admin/students/Create";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/student/create" element={<Create />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/students/create" element={<StuCreate/>} />
        <Route path="/students/edit/:id" element={<StuEdit/>} />
        <Route path="/exams" element={<Exams />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
