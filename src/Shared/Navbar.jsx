import {useState} from 'react'
import menuBtn from '../assets/menu.svg'

const Navbar = () => {
  const [isOpen,setIsOpen]= useState(false);
  return (
    <div className='Navbar'>
      <div key="logo" className='logo'>
        <h1 key="logo_Box">IT</h1>
        <span key="logo_Box_sub_logo">hink</span>
      </div>
     
     {isOpen?  <div className="list_section">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      </div> :null}

      <img src={menuBtn} alt="" onClick={()=>setIsOpen(prev => !prev)} />
      <div className='btn_section'>
        <button >Sign In</button>
        <h1>Create Account ?</h1>
      </div>

    </div>
  )
}

export default Navbar