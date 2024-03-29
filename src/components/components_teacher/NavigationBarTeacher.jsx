import React from "react";
import { GoHome } from "react-icons/go";
import { CiCircleList } from "react-icons/ci";
import { LuFormInput } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import PresensiCode from "./PresensiCode";

function NavigationBarTeacher() {
  return (
    <div className="fixed-bottom w-100 d-flex position-fixed z-1">
      <div className="bottomNav w-100 d-flex flex-row px-4 py-2">
        <ul className="nav nav-pills d-flex flex-row justify-content-between w-100">
          <li className="nav-item">
            <NavLink
              to={"home-teacher"}
              className="nav-link card d-flex flex-row justify-content-center align-items-center p-2"
              activeClassName="active"
            >
              <GoHome style={{ fontSize: "1.5em" }} />
            </NavLink>
            <p className="m-0 p-0 text-center" style={{fontSize:"0.7em"}}>Home</p>
          </li>
          <li className="nav-item">
            <NavLink
              to={"presensi-code"}
              className="nav-link card d-flex flex-row justify-content-center align-items-center p-2"
              activeClassName="active"
            >
              <LuFormInput style={{ fontSize: "1.5em" }} />
            </NavLink>
            <p className="m-0 p-0 text-center" style={{fontSize:"0.7em"}}>Kode</p>
          </li>
          <li className="nav-item">
            <NavLink
              to={"list-presensi"}
              className="nav-link card d-flex flex-row justify-content-center align-items-center p-2"
              activeClassName="active"
            >
              <CiCircleList style={{ fontSize: "1.5em" }} />
            </NavLink>
            <p className="m-0 p-0 text-center" style={{fontSize:"0.7em"}}>Presensi</p>
          </li>
          <li className="nav-item">
            <NavLink
              to={"teacher-profile"}
              className="nav-link card d-flex flex-row justify-content-center align-items-center p-2"
              activeClassName="active"
            >
              <CiUser style={{ fontSize: "1.5em" }} />
            </NavLink>
            <p className="m-0 p-0 text-center" style={{fontSize:"0.7em"}}>Profile</p>
          </li>
        </ul>
      </div>
      <style>{`
      .bottomNav{
        border-radius: 0.375rem;
        background: #FFF;
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
      }
      .nav-link{
        border-radius: 0.625rem;
        background: #FFF;
        box-shadow: -4px 5px 8px 0px rgba(0, 0, 0, 0.05);
      }
      .nav-link.active {
        background-color: var(--primary-red) !important;
      }
      `}</style>
    </div>
  );
}

export default NavigationBarTeacher;
