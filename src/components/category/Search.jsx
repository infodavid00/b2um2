
import React from 'react'
import './Search.css'
import { Search } from 'react-feather'

export default function SearchH({placeholder}) {
  return (
    <div className='home-h-search'>
      <input type='text' placeholder={placeholder ?? 'search stuffs in BTUM'} />
      <button><Search /></button>
    </div>
  )
}
