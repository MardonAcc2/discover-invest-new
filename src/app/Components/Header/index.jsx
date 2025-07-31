"use client"
import Image from 'next/image'
import {React,useState} from 'react'
import Aos from '../Aos'
import logo from '../../../../public/logo.svg'
import menulogo from "../../../../public/menu_c.svg"
import cross from "../../../../public/cross.svg"
import Link from 'next/link'
const Header = () => {
  const [menu , setMenu]= useState(false)
  return (
    <>
    
    <header>
    <Aos/>
    <div className='custom_container aos-init aos-animate 'data-aos-duration="700" data-aos="fade-down" data-aos-easing="linear">
      <div className='header_wrp'>
<div>
  <Link href={"/"}><Image height={48} src={logo} alt="logo"/></Link>
  
</div>
<div className='flex items-center'>
  <ul>
    <Link href="/vacancy"><li>Statistics on vacancies</li></Link>
    <Link href="/jobs"> <li>Vacancy</li></Link>
    <Link href="/exercus"><li>Internship</li></Link>
    <Link href="/news"><li>News
</li></Link>
<Link href="/video"><li>Video</li></Link>
<Link href="/contact"><li>Contacts</li></Link>
    <li> 
      {/*<select >
<option value="uz">UZ</option>
<option value="ru">RU</option>
<option  defaultValue value="en">EN</option>

  </select>*/}</li>
  </ul>
  <div id="google_translate_element" />
  <div onClick={()=>(setMenu(!menu))} className='header_menu'>
   {menu?(<Image src={cross} height={30} alt="img"></Image>):(<Image src={menulogo} height={30} alt="img"></Image>)} </div>
</div>
      </div>
    </div>
    
    </header>
    {menu?(
     
     <div  className='slide-box'> <ul>
      <Link onClick={()=>(setMenu(!menu))} href="/vacancy"><li>Statistics on vacancies</li></Link>
      <Link onClick={()=>(setMenu(!menu))} href="/jobs"> <li>Vacancy</li></Link>
      <Link onClick={()=>(setMenu(!menu))} href="/exercus"><li>Internship</li></Link>
      <Link onClick={()=>(setMenu(!menu))} href="/news"><li>News
  </li></Link>
  <Link onClick={()=>(setMenu(!menu))} href="/video"><li>Video</li></Link>
  <Link onClick={()=>(setMenu(!menu))} href="/contact"><li>Contacts</li></Link>
     
    </ul></div>
    
    ):""}
    </>
  )
}

export default Header