import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Authentication from "./layout/Authentication.jsx";
import Login from "./pages/Login.jsx";
import { Toaster } from "react-hot-toast";
import Teacher from "./layout/Teacher.jsx";
import HomeTeacher from "./pages/teacher_page/HomeTeacher.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Authentication />} path="/">
        <Route index element={<Navigate to="login" replace />} />
        <Route element={<Login />} path="/login"></Route>
      </Route>

      <Route element={<Teacher />} path="/teacher">
        <Route index element={<Navigate to="home-teacher" replace />} />
        <Route index element={<HomeTeacher />} path="home-teacher" replace></Route>
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
