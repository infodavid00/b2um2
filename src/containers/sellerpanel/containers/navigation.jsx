import React from 'react'
import './navigation.css'
import {MessageCircle, Bell, Plus, Home, User} from 'react-feather'
import { Link } from 'react-router-dom'

export default function Navigation({active = 'home'}) {
  const stroke = (title) => active === title ? 1.5 : 1, 
     width=22, 
     uiclass = 'nav-tab', 
     uiclass_active = 'nav-tab nav-tab-active',
     _class_ = (title) => active === title ? uiclass_active : uiclass

  return (
    <div className='nav'>
      <Link to={'/panel'} className={_class_('home')}>
        <Home width={width} strokeWidth={stroke('home')} />
        <div className='nav-tab-title'>Home</div>
      </Link>

      <Link to={'/panel/m'} className={_class_('messages')}>
        <MessageCircle width={width} strokeWidth={stroke('messages')} />
        <div className='nav-tab-title'>Messages</div>
      </Link>

      <Link to={'/panel/c'} className={_class_('create')}>
        <Plus width={width} strokeWidth={stroke('create')} />
        <div className='nav-tab-title'>Create</div>
      </Link>

      <Link to={'/panel/n'} className={_class_('notification')}>
        <Bell width={width} strokeWidth={stroke('notification')} />
        <div className='nav-tab-title'>Notification</div>
      </Link>

       <Link to={'/panel/p'} className={_class_('profile')}>
        <User width={width} strokeWidth={stroke('profile')} />
        <div className='nav-tab-title'>Profile</div>
      </Link>
    </div>
  )
}
