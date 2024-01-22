import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ListPresensi() {
  return (
    <div>
      <div className="d-flex flex-row mt-3 w-100">
        <ul className="nav nav-pills d-flex flex-row justify-content-between gap-2 w-100">
          <li className="nav-item">
            <NavLink to={"presensi-today"} className="nav-link btn fw-bold" activeClassName="active">Hari ini</NavLink>
          </li>
          <li>
            <NavLink to={"presensi-week"} className="nav-link btn fw-bold" activeClassName="active">Minggu</NavLink>
          </li>
          <li>
            <NavLink to={"presensi-month"} className="nav-link btn fw-bold" activeClassName="active">Bulan</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
      <style>{`
      .nav-link.btn{
        background-color: #fff;
        color: #000;
      }
      .nav-link.btn.active {
        background-color: var(--primary-yellow) !important;
      }
      `}</style>
    </div>
  );
}

export default ListPresensi;
