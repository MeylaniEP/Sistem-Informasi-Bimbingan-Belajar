import React from "react";
import { Outlet } from "react-router-dom";
import NavbarTeacher from "../components/components_teacher/NavbarTeacher";
import NavigationBarTeacher from "../components/components_teacher/NavigationBarTeacher";
import Decoration from "../assets/Polygon.png";
function Teacher() {
  return (
    <div>
      <img src={Decoration} className="w-100 position-absolute" />
      <div className="position-relative z-1 mx-4">
        <div className="d-flex py-4">
          <NavbarTeacher />
        </div>
        <Outlet />
        <div className="d-flex py-4">
          <NavigationBarTeacher />
        </div>
      </div>
    </div>
  );
}

export default Teacher;
