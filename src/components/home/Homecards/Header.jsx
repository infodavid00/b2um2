

import React from 'react'
import { ChevronRight } from 'react-feather'
import '../../../assets/styles/home.css'
import { Link } from 'react-router-dom'

export default function Header({title, col}) {
  return (
    <div className='home-main-card-header' style={{color:col}}>
     <span id='hideonsmallscreens'>hello world</span>
     <h1>{title}</h1>
     <Link to={'category/'+title} className='home-main-card-header-btn' style={{color:col, textDecoration:'none'}}>
     <span>Discover all </span>
     <ChevronRight strokeWidth={1.5}/></Link>
    </div>
  )
}
// 