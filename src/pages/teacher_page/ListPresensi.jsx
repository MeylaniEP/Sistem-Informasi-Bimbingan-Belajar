import React from "react";
import { NavLink } from "react-router-dom";

function ListPresensi() {
  return (
    <div>
      <div className="d-flex flex-row mt-3 w-100">
        <ul className="nav nav-pills d-flex flex-row gap-3 w-100">
          <li className="nav-item">
            <NavLink className="day nav-link btn">Hari ini</NavLink>
          </li>
          <li>
            <NavLink className="btn">Minggu ini</NavLink>
          </li>
        </ul>
      </div>
      <style>{`
      .day.active {
        background-color: var(--primary-yellow) ;
      }
      `}</style>
    </div>
  );
}

export default ListPresensi;
