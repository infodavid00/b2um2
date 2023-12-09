
import React, { useState } from 'react'
import Header from "../../components/common/Header";
import './profile.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Profile() {
  const { user , isAuthenticated} = useSelector((state)=> state.auth )
  const [fName, setFName] = useState(user.name.fname);
console.log(user.name.fname);
  return (
    <div>
      <Header active={"profile"} />
      <div style={{ marginTop: "6em" }}>
        <div className="profile-profilepic">
          {" "}
          {fName.charAt(0).toUpperCase()}{" "}
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: "center", color: "rbga(0,0,0,0.7)" }}>
          {fName}
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "rbga(0,0,0,0.8)",
            marginTop: "0.5em",
            fontFamily: "nunito",
          }}
        >
          {user.name.fname}
        </p>
        <button className="profile-sellbtn">
          <Link to="/seller" style={{ textDecoration: "none" }} id="link">
            Start Selling
          </Link>
        </button>
      </div>

      <div className="profile-content-body">
        <div className="profile-meta-body">
          <div className="profile-meta-cont">
            <span>Available Balance</span>
            <span style={{ fontWeight: 700 }}>0.00 USD</span>
          </div>
          <div className="profile-meta-cont">
            <span>Points Earned</span>
            <span style={{ fontWeight: 700 }}>202 POINTS</span>
          </div>
        </div>

        <div>
          <button className="logout-btn">
            <Link to="/" style={{ textDecoration: "none" }} id="link">
              Logout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
