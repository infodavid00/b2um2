
import React from 'react'
import './Search.css'
import { Search } from 'react-feather'

export default function SearchH({open, placeholder}) {
  return (
    <div className='home-h-search' onClick={open}>
      <input type='text' name='searchhome' placeholder={placeholder ?? 'search stuffs in B2UM'} onClick={open}/>
      <button style={{backgroundColor:'#2AFFE2'}}><Search /></button>
    </div>
  )
}
