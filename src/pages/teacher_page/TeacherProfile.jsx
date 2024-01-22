import React from "react";
import Logo from "../../assets/user.png";
import { RiStarSFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

function TeacherProfile() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 w-100">
      <div className="d-flex flex-row justify-content-between align-items-center" style={{gap: "6em"}}>
        <div className="rounded-pill bg-success" style={{ width: "5rem" }}>
          <img src={Logo} className="img-fluid" />
        </div>
        <div>
          <p className="p-0 m-0 fw-bold">Novaria</p>
          <div className="d-flex flex-row align-items-center gap-2">
            <RiStarSFill />
            <p className="p-0 m-0">4.5</p>
          </div>
        </div>
      </div>

      <div className="w-100">
      <div className="card profile mt-4 roundeed-3" style={{height:"20rem"}}>
        <div className="d-flex flex-column p-4">
          <label htmlFor="email" className="mb-2">Email</label>
          <input type="email" className="form-control mb-3" placeholder="try@gmail.com"/>
          <label htmlFor="password" className="mb-2">Password</label>
          <input type="email" className="form-control" placeholder="*******"/>

        </div>
      </div>
      <style>{`
      .card.profile{
        border: 1px solid var(--primary-yellow);
        border-radius: 0.625rem;
        background: #FFF;
        box-shadow: -4px 5px 8px 0px rgba(0, 0, 0, 0.1);
      }
      label{
        font-weight: 500;
      }
      `}</style>
      <div className="d-flex flex-row gap-2 mt-3 justify-content-end">
        <IoIosLogOut className="text-danger fs-3"/>
        <p>Keluar</p>
      </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
