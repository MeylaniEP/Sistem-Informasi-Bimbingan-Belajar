import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="vh-100">
      <div className="d-flex flex-row justify-content-center align-items-center my-4">
        <img src={Logo} alt="mypi-logo" className="img-fluid" style={{width:"30%"}}/>
        <h1><span style={{color: `var(--primary-yellow)`}}>M</span>YPI</h1>
      </div>

      <div className="d-flex flex-column mx-4 my-5">
        <h2>Selamat Datang</h2>
        <p>Silahkan Masuk dengan Akun Mypi</p>
        <div className="mt-5">
            <input type="number" placeholder="Nomor Registrasi" className="form-control mb-3"/>
            <input type="password" placeholder="Password" className="form-control mb-5"/>
            <Link to={"/teacher"} className="btn w-100 text-light fw-bold" style={{backgroundColor:`var(--primary-red)`}}>Masuk</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
