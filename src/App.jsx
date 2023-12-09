
import { Route, Routes } from 'react-router-dom'
import Home from './containers/home/Home.jsx'
import Seller from './containers/seller/Seller.jsx'
import Login from './containers/auth/login.jsx'
import Register from './containers/auth/register.jsx'
import Category from './containers/category/Category.jsx'
import CategoryB from './containers/category/CategoryB.jsx'
import Notification from './containers/notification/Notification.jsx'
import Messages from './containers/messages/Messages.jsx'
import MessagesMain from './containers/messages/MessagesMain.jsx'
import Profile from './containers/profile/Profile.jsx'
import Fp from './containers/auth/fp.jsx'
import Sellerpanel from './containers/sellerpanel/sellerpanel.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/seller' element={<Seller/>} />

        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/fp' element={<Fp />} />

        <Route path='/trending/:category' element={<Category/>} />
        <Route path='/trending/:cateogry/:id' element={<CategoryB/>} />
        
        <Route path='/notification' element={<Notification />} />
        <Route path='/messages/' element={<Messages />} />
        <Route path='/messages/:id' element={<MessagesMain />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/panel' element={<Sellerpanel active={'home'} />} />
        <Route path='/panel/m' element={<Sellerpanel active={'messages'} />} />
        <Route path='/panel/c' element={<Sellerpanel active={'create'} />} />
        <Route path='/panel/n' element={<Sellerpanel active={'notification'} />} />
        <Route path='/panel/p' element={<Sellerpanel active={'profile'} />} />
      </Routes>
    </>
  )
}

export default App
