import React from "react";

function ListWeek() {
  return (
    <div className="mt-4">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item rounded-3 mb-2">
          <h2 className="accordion-header  ">
            <button
              className="accordion-button collapsed rounded-3 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              SENIN
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
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
                <p className="p-0 m-0">Uzumaki Talia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-3 mb-2">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed rounded-3 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              SELASA
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
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
                <p className="p-0 m-0">Tiara Mumtaz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-3 mb-2">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed rounded-3 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              RABU
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="d-flex flex-row align-items-center gap-3 fw-bold mb-3">
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
                <p className="p-0 m-0">Uzumaki Meylani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .accordion-button{
        border: 2px solid var(--primary-yellow);
        background: #FFF;
        box-shadow: -4px 5px 7.8px 0px rgba(0, 0, 0, 0.25);
      }
      .accordion-item{
        background: #FFF;
        box-shadow: -4px 5px 7.8px 0px rgba(0, 0, 0, 0.25);
      }
      `}</style>
    </div>
  );
}

export default ListWeek;
