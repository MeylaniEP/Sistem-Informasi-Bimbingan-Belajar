import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

function Schedule() {
  return (
    <div>
      <div
        className="scrollable d-flex flex-row gap-4 overflow-auto flex-nowrap pb-3 pt-2 px-2"
        style={{ maxWidth: "600px" }}
      >
        <div className="card d-flex flex-column align-items-start py-4 px-4 flex-shrink-0">
          <h4>Fanta Arya Pratama</h4>
          <p className="p-0 m-0">Privat</p>
          <div className="d-flex align-items-center gap-2 mt-2">
            <FaLocationDot style={{ color: `var(--primary-red)` }} />
            <p className="p-0 m-0">Jl.Nusa Indah</p>
          </div>
          <div className="d-flex align-items-center gap-2 mt-2">
            <FaClock style={{ fontSize: "0.8em" }} />
            <p className="p-0 m-0">16.00</p>
          </div>
        </div>

        <div className="card d-flex flex-column align-items-start py-4 px-4 flex-shrink-0">
          <h4>Fanta Arya Pratama</h4>
          <p className="p-0 m-0">Privat</p>
          <div className="d-flex align-items-center gap-2">
            <FaLocationDot style={{ color: `var(--primary-red)` }} />
            <p className="p-0 m-0">Jl.Nusa Indah</p>
          </div>
          <div className="d-flex align-items-center gap-2 mt-2">
            <FaClock style={{ fontSize: "0.8em" }} />
            <p className="p-0 m-0">16.00</p>
          </div>
        </div>

        <div className="card d-flex flex-column align-items-start py-4 px-4 flex-shrink-0">
          <h4>Fanta Arya Pratama</h4>
          <p className="p-0 m-0">Privat</p>
          <div className="d-flex align-items-center gap-2">
            <FaLocationDot style={{ color: `var(--primary-red)` }} />
            <p className="p-0 m-0">Jl.Nusa Indah</p>
          </div>
          <div className="d-flex align-items-center gap-2 mt-2">
            <FaClock style={{ fontSize: "0.8em" }} />
            <p className="p-0 m-0">16.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
