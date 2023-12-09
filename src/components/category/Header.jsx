
import '../common/Header.css'
import { ChevronLeft } from 'react-feather'

export default function Header({title}) {
  let style = {
  fontSize: '20px',
  fontWeight: 700,
  color: 'rgba(0,0,0,0.7)',
  cursor:'pointer',
  // backgroundColor:'red'
}
  return (
    <>
    <div className='header-container' style={{justifyContent:'space-between',...style}}>
      {/* <Logo /> */}
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=> window.history.back()}>
       <ChevronLeft />
       <span>{title}</span>
      </div>
    </div>
    </>
  )
}