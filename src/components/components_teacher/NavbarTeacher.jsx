import React from "react";
import { IoIosNotifications } from "react-icons/io";

function NavbarTeacher() {
  return (
    <div className="d-flex flex-row align-items-center justify-content-between w-100">
      <div className="d-flex flex-row align-items-end fw-bold gap-3">
        <h1 className="p-0 m-0">MYPI</h1>
        <p className="p-0 m-0">Education</p>
      </div>
      <div>
        <IoIosNotifications className="fs-5"/>
      </div>
    </div>
  );
}

export default NavbarTeacher;
