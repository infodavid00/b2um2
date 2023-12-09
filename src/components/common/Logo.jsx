
import data from '../../assets/b2um copycc copy.png'
import {Link} from 'react-router-dom'

let style = {
  width:'70px',
  height: 'auto'
}

export default function Logo() {
  return <Link to= '/'><img src={data} style={style}  /></Link>
} 