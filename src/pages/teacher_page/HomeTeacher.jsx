import React from "react";
import Profile from "../../assets/user.png";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdCoPresent } from "react-icons/md";
import Schedule from "../../components/components_teacher/Schedule";

function HomeTeacher() {
  return (
    <div>
      <div
        className="card d-flex flex-row align-items-center gap-5"
        style={{ borderRadius: "10px" }}
      >
        <div
          style={{
            backgroundColor: `var(--primary-cream)`,
            width: "3.5rem",
            borderRadius: "100px",
          }}
          className="my-3 mx-4"
        >
          <img src={Profile} className="img-fluid" />
        </div>
        <div>
          <h4 className="p-0 m-0" style={{fontSize:"1em"}}>Hi, Novaria</h4>
          <p className="p-0 m-0 text-secondary" style={{fontSize:"0.7em"}}>110503</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 style={{fontSize:"1.3em"}}>Jadwal Hari Ini</h3>
        <Schedule />
      </div>

      <div>
        <h4 style={{fontSize:"1.3em"}}>Menu</h4>
        <div className="d-flex flex-row justify-content-between">
          <div>
            <div className="card d-flex flex-row justify-content-center align-items-center" style={{height:"4.4rem", backgroundColor:"rgba(245, 202, 195, 0.40)", width:"5rem"}}>
              <MdOutlinePublishedWithChanges style={{fontSize:"2em", color:"red"}}/>
            </div>
            <label htmlFor="ubah-jadwal" style={{fontSize:"0.8em"}}>Ubah Jadwal</label>
          </div>
          <div>
            <div className="card d-flex flex-row justify-content-center align-items-center" style={{height:"4.4rem", backgroundColor:"rgba(246, 189, 96, 0.30)", width:"5rem"}}>
              <MdCoPresent style={{fontSize:"2em", color:`var(--primary-yellow)`}}/>
            </div>
            <label htmlFor="ubah-jadwal" style={{fontSize:"0.8em"}}>Riwayat Presensi</label>
          </div>
          <div>
            <div className="card d-flex flex-row justify-content-center align-items-center" style={{height:"4.4rem", backgroundColor:"rgba(112, 236, 124, 0.30)", width:"5rem"}}>
              <MdOutlinePayment style={{fontSize:"2em", color:"green"}}/>
            </div>
            <label htmlFor="ubah-jadwal" style={{fontSize:"0.8em"}}>Riwayat Honor</label>
          </div>
        </div>
      </div>

      <style>{`
      .card{
        border-radius: 0.625rem;
        background: #FFF;
        box-shadow: -4px 5px 7.8px 0px rgba(0, 0, 0, 0.25);
      }
      `}</style>
    </div>
  );
}

export default HomeTeacher;
