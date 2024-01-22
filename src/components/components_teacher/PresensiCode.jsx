import React from "react";
import { MdSend } from "react-icons/md";
import { MdOutlineQrCodeScanner } from "react-icons/md";

function PresensiCode() {
  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <div className="d-flex flex-row align-items-center w-100 gap-3 ">
        <input
          type="text"
          placeholder="Kode Presensi"
          className="form-control"
          style={{ border: "1px solid var(--primary-yellow)" }}
        />
        <MdSend style={{ color: `var(--primary-cream`, fontSize: "2em" }} />
      </div>
      <div>
        <button className="btn fw-bold" style={{backgroundColor:`var(--primary-red)`, marginTop:"6em", fontSize:"1.3em"}}><span><MdOutlineQrCodeScanner /></span> Scan di sini</button>
      </div>
      <style>{`
      .btn.fw-bold{
        border-radius: 0.625rem;
        background: #FFF;
        box-shadow: -4px 5px 8px 0px rgba(0, 0, 0, 0.20);
      }
      `}</style>
    </div>
  );
}

export default PresensiCode;
