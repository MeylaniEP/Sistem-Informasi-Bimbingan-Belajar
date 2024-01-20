import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

function Schedule() {
  return (
    <div>
      <div
        className="scrollable d-flex flex-row gap-4 overflow-auto flex-nowrap pb-3 pt-1 px-0"
        style={{ maxWidth: "600px" }}
      >
        <div className="card d-flex flex-column align-items-start flex-shrink-0">
          <div
            style={{ backgroundColor: `var(--primary-red)`, borderRadius:"0px 5px 5px 0px " }}
            className="mt-2 mb-0 py-1 px-2"
          >
            <p className="p-0 m-0 fw-bold  text-light">SMP</p>
          </div>
          <div className="d-flex flex-column align-items-start pb-4 pt-2 px-4">
            <h4 style={{ fontSize: "1em" }}>Fanta Arya Pratama</h4>
            <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
              Privat
            </p>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaLocationDot
                style={{ color: `var(--primary-red)`, fontSize: "0.8em" }}
              />
              <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
                Jl.Nusa Indah
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaClock style={{ fontSize: "0.8em" }} />
              <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
                16.00
              </p>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-column align-items-start flex-shrink-0">
          <div
            style={{ backgroundColor: `var(--primary-red)`, borderRadius:"0px 5px 5px 0px " }}
            className="mt-2 mb-0 py-1 px-2"
          >
            <p className="p-0 m-0 fw-bold  text-light">SMP</p>
          </div>
          <div className="d-flex flex-column align-items-start pb-4 pt-2 px-4">
            <h4 style={{ fontSize: "1em" }}>Fanta Arya Pratama</h4>
            <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
              Privat
            </p>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaLocationDot
                style={{ color: `var(--primary-red)`, fontSize: "0.8em" }}
              />
              <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
                Jl.Nusa Indah
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaClock style={{ fontSize: "0.8em" }} />
              <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
                16.00
              </p>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-column align-items-start flex-shrink-0">
          <div
            style={{ backgroundColor: `var(--primary-red)`, borderRadius:"0px 5px 5px 0px " }}
            className="mt-2 mb-0 py-1 px-2"
          >
            <p className="p-0 m-0 fw-bold  text-light">SMP</p>
          </div>
          <div className="d-flex flex-column align-items-start pb-4 pt-2 px-4">
            <h4 style={{ fontSize: "1em" }}>Fanta Arya Pratama</h4>
            <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
              Privat
            </p>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaLocationDot
                style={{ color: `var(--primary-red)`, fontSize: "0.8em" }}
              />
              <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
                Jl.Nusa Indah
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaClock style={{ fontSize: "0.8em" }} />
              <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
                16.00
              </p>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-column align-items-start flex-shrink-0">
          <div
            style={{ backgroundColor: `var(--primary-red)`, borderRadius:"0px 5px 5px 0px " }}
            className="mt-2 mb-0 py-1 px-2"
          >
            <p className="p-0 m-0 fw-bold  text-light">SMP</p>
          </div>
          <div className="d-flex flex-column align-items-start pb-4 pt-2 px-4">
            <h4 style={{ fontSize: "1em" }}>Fanta Arya Pratama</h4>
            <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
              Privat
            </p>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaLocationDot
                style={{ color: `var(--primary-red)`, fontSize: "0.8em" }}
              />
              <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
                Jl.Nusa Indah
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaClock style={{ fontSize: "0.8em" }} />
              <p className="p-0 m-0" style={{ fontSize: "0.8em" }}>
                16.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
