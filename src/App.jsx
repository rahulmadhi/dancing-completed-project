import React from "react";
import Navbar from "./NavbarCompnent/Navbar";
import "./global.css";
import Page from "./NavbarCompnent/Page";
import "./Images/danze1.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./NavbarCompnent/About";
import Gallery from "./NavbarCompnent/Gallery";
import Login from "./LoginSign/Login";
import Register from "./LoginSign/Register";
import AdminRegister from "./Admins/AdminRegister";
import ProtectedRoute from "./ServiceRoutes/ProtectedRoute";
import AdminDashboard from "./Admins/AdminDashboard";
import AddAcademyManagerRegister from "./Admins/Manager/AddAcademyManagerRegister";
import ViewAcademyManager from "./Admins/Manager/ViewAcademyManager";
import ViewAcademy from "./Admins/Manager/ViewAcademy";
import ViewBranch from "./Admins/Manager/ViewBranch";
import ViewCourse from "./Admins/Manager/ViewCourse";
import EachAcademyManager from "./Admins/Manager/EachAcademyManager";
import UpdateEachManager from "./Admins/Manager/UpdateEachManager";
import AddAcademy from "./Admins/Manager/AddAcademy";
import UpdateAcademy from "./Admins/Manager/UpdateAcademy";
import AddBranch from "./Admins/Manager/AddBranch";
import UpdateBranch from "./Admins/Manager/UpdateBranch";
import AddCourse from "./Admins/Manager/AddCourse";
import UpdateCourse from "./Admins/Manager/UpdateCourse";
import UserViewBranch from "./MemberShip/UserViewBranch";
import UserViewCourse from "./MemberShip/UserViewCourse";
import Enroll from "./MemberShip/Enroll";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Page />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/userViewBranch" element={<UserViewBranch />} />
        <Route path="/userViewCourse/:id" element={<UserViewCourse />} />
        <Route path="/userViewCourse/Enroll" element={<Enroll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route
            path="/adminDashboard/addAcademyManager"
            element={<AddAcademyManagerRegister />}
          />
          <Route
            path="/adminDashboard/viewAcademyManager"
            element={<ViewAcademyManager />}
          />
          <Route
            path="/adminDashboard/viewAcademyManager/eachAcademyManager/:id"
            element={<EachAcademyManager />}
          />
          <Route
            path="/adminDashboard/viewAcademyManager/updateEachManager/:id"
            element={<UpdateEachManager />}
          />
          <Route
            path="/adminDashboard/viewAcademyManager/addAcademy/:id"
            element={<AddAcademy />}
          />
          <Route path="/adminDashboard/viewAcademy" element={<ViewAcademy />} />
          <Route
            path="/adminDashboard/viewAcademy/updateAcademy/:id"
            element={<UpdateAcademy />}
          />
          <Route
            path="/adminDashboard/viewAcademy/addBranch/:id"
            element={<AddBranch />}
          />
          <Route path="/adminDashboard/viewBranch" element={<ViewBranch />} />
          <Route
            path="/adminDashboard/viewBranch/updateBranch/:id"
            element={<UpdateBranch />}
          />
          <Route
            path="/adminDashboard/viewBranch/addCourse/:id"
            element={<AddCourse />}
          />
          <Route path="/adminDashboard/viewCourse" element={<ViewCourse />} />
          <Route
            path="/adminDashboard/viewCourse/updateCourse/:id"
            element={<UpdateCourse />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
