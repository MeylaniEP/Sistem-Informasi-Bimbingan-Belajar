import React from "react";

function ListPresensiStudent() {
  return (
    <div>
      <div className="card mt-4 roundeed-3" style={{height:"25rem"}}>
        <div className="d-flex flex-column p-4">
          <div className="d-flex flex-row align-items-center gap-3 fw-bold">
            <div
              className="d-flex justify-content-center align-items-center rounded-5"
              style={{
                backgroundColor: `var(--primary-red)`,
                width: "2rem",
                height: "2rem",
              }}
            >
              <p className="p-0 m-0 text-center rounded-5">1</p>
            </div>
            <p className="p-0 m-0">Rifda Ainun</p>
          </div>
          <hr />
          <div className="d-flex flex-row align-items-center gap-3 fw-bold">
            <div
              className="d-flex justify-content-center align-items-center rounded-5"
              style={{
                backgroundColor: `var(--primary-red)`,
                width: "2rem",
                height: "2rem",
              }}
            >
              <p className="p-0 m-0 text-center rounded-5">2</p>
            </div>
            <p className="p-0 m-0">Nina Kamila</p>
          </div>
          <hr />
          <div className="d-flex flex-row align-items-center gap-3 fw-bold">
            <div
              className="d-flex justify-content-center align-items-center rounded-5"
              style={{
                backgroundColor: `var(--primary-red)`,
                width: "2rem",
                height: "2rem",
              }}
            >
              <p className="p-0 m-0 text-center rounded-5">3</p>
            </div>
            <p className="p-0 m-0">Firdaus Cocacola</p>
          </div>
        </div>
      </div>
      <style>{`
      .card{
        border-radius: 0.625rem;
        background: #FFF;
        box-shadow: -4px 5px 8px 0px rgba(0, 0, 0, 0.1);
      }
      `}</style>
    </div>
  );
}

export default ListPresensiStudent;
