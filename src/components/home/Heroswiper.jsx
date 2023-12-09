
import React from 'react'
import {Video, User, Package, CreditCard , Plus, Disc,Pocket,
Command,Users} from 'react-feather'
import './Heroswiper.css'
import { Link } from 'react-router-dom'

export default function Heroswiper() {
  return (
    <div className="heroswippercontainer">
      <div>
        <button style={{ backgroundColor: "rgba(0,180,0,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/game-topup">
            <Plus />
          </Link>
        </button>
        <span>Game topup</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(120,10,200,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/gift-cards">
            <CreditCard />
          </Link>
        </button>
        <span>Gift cards</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(120,10,20,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/video-game">
            <Video />
          </Link>
        </button>
        <span>Video games</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(22,120,20,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/software">
            <Command />
          </Link>
        </button>
        <span>Software</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(250,10,30,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/game-coins">
            <Pocket />
          </Link>
        </button>
        <span>Game coins</span>
      </div>
      <div>
        <Link id="link" style={{ color: "white" }} to="/trending/items">
          <button style={{ backgroundColor: "rgba(200,130,200,0.8" }}>
            <Package />
          </button>
          <span>Items</span>{" "}
        </Link>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(220,200,20,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/accounts">
            <User />
          </Link>
        </button>
        <span>Accounts</span>
      </div>
      <div onClick={() => (window.location.href = "/auth/register")}>
        <button style={{ backgroundColor: "rgba(120,120,120,0.8" }}>
          <Link id="link" style={{ color: "white" }}>
            <Users />
          </Link>
        </button>
        <span>Game pal</span>
      </div>
      <div onClick={() => (window.location.href = "/auth/register")}>
        <button style={{ backgroundColor: "rgba(20,100,250,0.8" }}>
          <Link id="link" style={{ color: "white" }}>
            <Disc />
          </Link>
        </button>
        <span>Coaching</span>
      </div>
    </div>
  );
}

// 