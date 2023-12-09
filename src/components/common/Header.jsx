
import { useDispatch, useSelector } from 'react-redux'
import './Header.css'
import Logo from './Logo.jsx'
import { Bell, Home, MessageCircle } from 'react-feather'
import {Link} from 'react-router-dom'


function Footer({isloggedorauth, active}) {
  const {isAuthenticated, user } = useSelector((state)=>state.auth);
  const tabstyle = {
    display:'flex',
    border:'none',
    backgroundColor:'transparent',
    outline:'none',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    color: 'rgba(10,10,10,0.8)',
    textDecoration:'none',
    fontSize:'14.5px',
    fontFamily: 'nunito'
  }
  return (
    <div className="header-container header-footer">
      {isAuthenticated ? (
        <>
          <Link
            to="/"
            style={{
              ...tabstyle,
              color: active === "home" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
            }}
          >
            <Home strokeWidth={1} />
            <span>Home</span>
          </Link>
          <Link
            to="/messages"
            style={{
              ...tabstyle,
              color: active === "chat" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
            }}
          >
            <MessageCircle strokeWidth={1} />
            <span>Chat</span>
          </Link>
          <Link
            to="/notification"
            style={{
              ...tabstyle,
              color:
                active === "notification" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
            }}
          >
            <Bell strokeWidth={1} />
            <span>Notification</span>
          </Link>
          <Link
            to="/profile"
            style={{
              ...tabstyle,
              color: active === "profile" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
            }}
          >
            <button
              style={{
                backgroundColor: "dodgerblue",
                border: "none",
                outline: "none",
                width: "25px",
                color: "white",
                height: "25px",
                borderRadius: "50%",
              }}
            >
              {user.name.fname.charAt(0).toUpperCase()}
            </button>
            <span>Profile</span>
          </Link>
        </>
      ) : (
        <>
          <button className="header-footer-btn">
            <Link to="/seller" style={{ textDecoration: "none" }} id="link">
              Sell
            </Link>
          </button>
          <button className="header-footer-btn htbtn-fill">
            <Link
              to="/auth/register"
              style={{ textDecoration: "none" }}
              id="link"
            >
              Login/Sign up
            </Link>
          </button>
        </>
      )}
    </div>
  );
}

export default function Header({hidefooter, active}) {
  const dispatch = useDispatch()
  const {isAuthenticated } = useSelector((state)=>state.auth);

  return (
    <>
      <div className="header-container">
        <Logo />

        {console.log("This is from state " + isAuthenticated)}
        {isAuthenticated ? (
          <div className="header-for-larges">
            <Link
              to="/"
              style={{
                fontSize: "15px",
                color: active === "home" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
                textDecoration: "none",
              }}
              id="link"
            >
              <button
                className="header-btn htbn-p"
                style={{ border: "none", fontWeight: 600 }}
              >
                Home
              </button>
            </Link>
            <Link
              to="/messages"
              style={{
                fontSize: "15px",
                color: active === "chat" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
                textDecoration: "none",
              }}
            >
              <button
                className="header-btn htbtn"
                style={{ border: "none", fontWeight: 600 }}
              >
                Chat
              </button>
            </Link>
            <Link
              to="/notification"
              style={{
                fontSize: "15px",
                color:
                  active === "notification" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
                textDecoration: "none",
              }}
            >
              <button
                className="header-btn htbtn"
                style={{
                  border: "none",
                  fontSize: "15px",
                  color:
                    active === "notification"
                      ? "#2AFFE2"
                      : "rgba(10,10,10,0.8)",
                  fontWeight: 600,
                }}
              >
                Notification
              </button>
            </Link>
            <Link
              to="/profile"
              className=""
              style={{
                fontSize: "15px",
                color: active === "profile" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
                textDecoration: "none",
              }}
            >
              <button
                className="header-btn htbtn"
                style={{ border: "none", fontWeight: 600 }}
              >
                Profile
              </button>
            </Link>
          </div>
        ) : (
          <div className="header-for-larges">
            <Link to="/seller" style={{ textDecoration: "none" }} id="link">
              <button className="header-btn htbn-p hover:bg-cyan-300  hover:text-white">
                Sell
              </button>
            </Link>
            <Link
              to="/auth/register"
              style={{ textDecoration: "none" }}
              id="link"
            >
              <button className="header-btn htbtn-fill hover:bg-cyan-300 htbtn  hover:text-white ">
                Login/Sign up
              </button>
            </Link>
          </div>
        )}
      </div>
      {hidefooter ? null : <Footer active={active} />}
    </>
  );
}