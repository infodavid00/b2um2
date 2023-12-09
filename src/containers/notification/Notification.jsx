
import React from 'react'
import Header from "../../components/common/Header";
import data from "../../datasets/notifications.json"
import './notification.css'
import { Trash } from 'react-feather';

function Lists({data}) {
  return (
    <div className='notification-body'>
    <h3>{data.header}<span style={{fontSize:'15px'}} id='link'>Loadmore</span></h3>
    <div style={{display:'flex',flexDirection:'column', alignContent:'center',gap:'0.7em'}}>
     {data.data.map((element,index)=> (
       <div key={index} className='notification-list-cont'>
        <Trash strokeWidth={1} />
        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start', alignContent:'center',gap:'0.4em'}}>
          <span style={{fontFamily:'nunitobold'}}>{element.title}</span>
          <span>{element.id}</span>
        </div>
        <span>${element.price}</span>
       </div>
     ))}
    </div>
    </div>
  )
}

export default function Notification() {
  return (
    <div>
      <Header isloggedorauth={'logged'} active={'notification'}/>
      <div style={{marginTop: '6em'}}>
        {data.map(element => <Lists key={element.header} data={element} />)}
      </div>
    </div>
  )
}
