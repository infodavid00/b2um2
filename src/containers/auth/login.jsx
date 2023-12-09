
import React, { useState } from 'react'
import Header from '../../components/common/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import './auth.css'
import Se from './se.jsx'
import {Link, redirect, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions.js'

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(login(email , password));
    console.log(`User logged in `);
    navigate("/")
  }

  return (
    <div className="authbody">
      <Header hidefooter={true} isloggedorauth={true} />
      <div className="authcont">
        <h2>Welcome back!</h2>
        <input
          type="email"
          className="auth-input"
          placeholder="Email or Mobile number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="auth-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: 0,
          }}
        >
          <Link to="/auth/fp" className="already-h-a-n">
            Forgotten password?
          </Link>
        </p>
        <button className="auth-trigger" onClick={handleSubmit}>Login</button>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 0,
          }}
        >
          <span
            style={{
              cursor: "pointer",
              fontWeight: 600,
              color: "rgba(10,10,10,0.7)",
            }}
          >
            Or
          </span>
        </p>

        <Se />

        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 0,
          }}
        >
          <Link to="/auth/register" className="already-h-a-n">
            New to B2UM? Sign up
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
