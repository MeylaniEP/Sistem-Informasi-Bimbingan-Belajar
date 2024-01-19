import React from "react";
import { GoHome } from "react-icons/go";
import { LuScanLine } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function NavigationBarTeacher() {
  return (
    <div className="fixed-bottom w-100 d-flex">
      <div className="bottomNav w-100 d-flex flex-row justify-content-between px-4 py-2">
        <div className="card d-flex flex-row justify-content-center align-items-center p-2"> <GoHome style={{fontSize:"1.5em"}}/></div>
        <div className="card d-flex flex-row justify-content-center align-items-center p-2"> <LuScanLine style={{fontSize:"1.5em"}}/></div>
        <div className="card d-flex flex-row justify-content-center align-items-center p-2"> <CiCircleList style={{fontSize:"1.5em"}}/></div>
        <div className="card d-flex flex-row justify-content-center align-items-center p-2"> <CiUser style={{fontSize:"1.5em"}}/></div>
      </div>
      <style>{`
      .bottomNav{
        border-radius: 0.375rem;
        background: #FFF;
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
      }
      `}</style>
    </div>
  );
}

export default NavigationBarTeacher;
