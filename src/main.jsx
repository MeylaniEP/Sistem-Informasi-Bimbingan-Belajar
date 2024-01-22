import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Toaster } from "react-hot-toast";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Authentication from "./layout/Authentication.jsx";
import Login from "./pages/Login.jsx";
import Teacher from "./layout/Teacher.jsx";
import HomeTeacher from "./pages/teacher_page/HomeTeacher.jsx";
import ListPresensi from "./pages/teacher_page/ListPresensi.jsx";
import ListPresensiStudent from "./components/components_teacher/ListPresensiStudent.jsx";
import ListWeek from "./components/components_teacher/ListWeek.jsx";
import TeacherProfile from "./pages/teacher_page/TeacherProfile.jsx";
import ListMonth from "./components/components_teacher/ListMonth.jsx";
import PresensiCode from "./components/components_teacher/PresensiCode.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Authentication />} path="/">
        <Route index element={<Navigate to="login" replace />} />
        <Route element={<Login />} path="/login"></Route>
      </Route>

      <Route element={<Teacher />} path="/teacher">
        <Route index element={<Navigate to="home-teacher" replace />} />
        <Route
          index
          element={<HomeTeacher />}
          path="home-teacher"
          replace
        ></Route>
        <Route element={<PresensiCode />} path="presensi-code" />
        <Route element={<ListPresensi />} path="list-presensi">
          <Route index element={<Navigate to="presensi-today" replace />} />
          <Route element={<ListPresensiStudent />} path="presensi-today" />
          <Route element={<ListWeek />} path="presensi-week" />
          <Route element={<ListMonth />} path="presensi-month" />
        </Route>
        <Route element={<TeacherProfile />} path="teacher-profile"/>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>
);
