
import React from 'react'
import { Send } from 'react-feather'
import './messages.css'

export default function Footer({username}) {
  return (
    <div className='messagess-view2-footer-cont'>
    <div className='messagess-view2-footer-cont-support'>
      <textarea placeholder={`Reply to ${username}....`}></textarea>
      <Send strokeWidth={1}/>
    </div>
    </div>
  )
}
