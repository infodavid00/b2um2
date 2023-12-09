
import React, {useState} from 'react'
import Header from '../../components/common/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import './auth.css'
import Se from './se.jsx'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions.js'
// import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";


function Flow1({continuesignup}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassowrd] = useState("");

  // const [showpassword, setShowpassword] = useState(false)
  const handlefname = (e)=>{
    setFname(e.target.value)
  }
  const handlelname = (e)=>{
    setLname(e.target.value);
  }
  const handleusername = (e)=>{
    setUsername(e.target.value);
  }
  const handleemail = (e)=>{
    setEmail(e.target.value);
  }
  const handlepassword = (e)=>{
    setPassword(e.target.value);
  }
  const handleocnfirmpassword = (e)=>{ 
    setConfirmPassowrd(e.target.value);
  }
  const registerHandler = () => {
    //  const myForm = new FormData();
    //  myForm.append("fname", fname);
    //  myForm.append("lname", lname);
    //  myForm.append("email", email);
    //  myForm.append("password", password);
    //  myForm.append("confirmpassword", confirmPassowrd);
    
    const myForm = {
      fname,lname, email, password , confirmPassowrd
    }

     console.log(`this is myform data` , myForm);
     dispatch(register(fname, lname, email, password, confirmPassowrd));
     continuesignup();
    //  navigate("/")
   };
  return (
    <div className="authcont">
      <h2>Create an account</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5em",
          width: "100%",
          marginBottom: "1.5em",
        }}
      >
        <input
          onChange={handlefname}
          value={fname}
          type="text"
          name="fname"
          className="auth-input"
          placeholder="First name"
        />
        <input
          onChange={handlelname}
          value={lname}
          type="text"
          name="lname"
          className="auth-input"
          placeholder="Last name"
        />
      </div>
      <input
        onChange={handleusername}
        value={username}
        type="text"
        name="username"
        className="auth-input"
        placeholder="Username"
      />
      {/* <p style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Username cannot be changed after it has been created.</span></p> */}
      <input
        onChange={handleemail}
        value={email}
        type="email"
        name="email"
        className="auth-input"
        placeholder="Email address"
      />
      <input
        onChange={handlepassword}
        value={password}
        type="password"
        name="password"
        className="auth-input"
        placeholder="Password"
      />
      {/* {showpassword ? (
        <IoEyeOffOutline className="showbtn" />
      ) : (
        <IoEyeOutline className="showbtn" />
      )} */}

      <input
        onChange={handleocnfirmpassword}
        value={confirmPassowrd}
        type="password"
        name="confirmpassoword"
        className="auth-input"
        placeholder="Confirm password"
      />

      <button
        onClick={registerHandler}
        className="auth-trigger hover:bg-cyan-300"
      >
        Sign Up
      </button>

      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingBottom: "10px",
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
        <Link to={"/auth/login"} className="already-h-a-n hover:text-white">
          Already have an account? Login
        </Link>
      </p>
    </div>
  );
}


function Flow2() {
  const [time, settime] = useState(60)
  const startcout = setInterval(() => {
   let i = time -1
   settime(i)
  } , 1000)
  if (settime === 0) {
    clearInterval(startcout)
  }
//    console.log(time)

  return (
       <div className='authcont'>
       <h2>Email One-time Password (OTP)</h2>
       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0, marginTop:'-3%'}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Enter the OTP sent to you at da*****@gmail.com</span></p> 
       <input type='text' className='auth-input' placeholder='Enter otp'/>

       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Requesting in {1}sec...</span></p>

       <button className='auth-trigger'>Verify account</button>
     </div>
  )
}



export default function Register() {
  const [flow, setFlow] =  useState(1)
  return (
    <div className='authbody'>
     <Header hidefooter={true} />
     {flow === 1  ? <Flow1 continuesignup={()=> setFlow(2)} /> : flow === 2  ? <Flow2 /> : null}
     <Footer />
    </div>
  )
}
