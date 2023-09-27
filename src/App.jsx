import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/adminProfile/AdminLogin";
import Dashboard from "./Dashboard";
import Students from "./pages/admin/students";
import Exams from "./pages/admin/exams/Exams";
import Questions from "./pages/admin/questions/Questions";
import Reports from "./pages/admin/reports/Reports";
import Categories from "./pages/admin/categories/index";
import StuEdit from "./pages/admin/students/Edit";
import StuCreate from "./pages/admin/students/Create";
import CategoriesCreate from "./pages/admin/categories/Create";
import CategoriesEdit from "./pages/admin/categories/Edit";
import ExamsCreate from "./pages/admin/exams/Create";
import AdminLogout from "./pages/admin/adminProfile/Logout";
import AdminChgPassword from "./pages/admin/adminProfile/ChangePassword";
import QuestionCreate from "./pages/admin/questions/Create";
import DetailsQuestions from "./pages/admin/questions/DetailsQuestions";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<AdminLogin />}></Route>
          <Route path="/logout" element={<AdminLogout />}></Route>
          <Route path="/changepw" element={<AdminChgPassword />}></Route>
          <Route path="students">
            <Route index element={<Students />} />
            <Route path="create" element={<StuCreate />} />
            <Route path="edit/:id" element={<StuEdit />} />
          </Route>
          <Route path="exams">
            <Route index element={<Exams />} />
            <Route path="create" element={<ExamsCreate />} />
          </Route>
          <Route path="questions">
            <Route index element={<Questions />} />
            <Route path=":id/details" element={<DetailsQuestions/>} />
            <Route path="create" element={<QuestionCreate />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path="create" element={<CategoriesCreate />} />
            <Route path="edit/:id" element={<CategoriesEdit />} />
          </Route>
          <Route path="/reports" element={<Reports />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
