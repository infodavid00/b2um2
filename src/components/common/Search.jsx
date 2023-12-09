
import React from 'react'
import './Search.css'
import { PlayCircle, Search, X } from 'react-feather'

export default function Searchmain ({close, placeholder}) {
  return (
    <div className='search-tint-body'>
     <button className='exit' onClick={close}><X strokeWidth={1.3}/></button>

     <div className='search'>
      <input type='text' name='search' placeholder={placeholder ??'search stuffs in B2UM'} />
      <button><Search /></button>
     </div>
     <div className='search search-res'>
       <h3>Results</h3>
     </div>
    </div>
  )
}
