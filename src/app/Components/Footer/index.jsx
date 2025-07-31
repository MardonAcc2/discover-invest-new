import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../../public/logo.svg"
import phone from "../../../../public/phone.svg"
import mail from "../../../../public/mail.svg"
import location from "../../../../public/location.svg"
import twitter from "../../../../public/twitter.svg"
import youtube from "../../../../public/youtube.svg"
import facebook from "../../../../public/facebook.svg"
import telegram from "../../../../public/telegram.svg"
import inst from "../../../../public/inst.svg"




const Footer = () => {
  return (
      <footer>
    <div className='custom_container flex justify-between flex-col sm:flex-row'><div>
        <div>
        <Link href="/"><div><Image className='pb-8' height={48} src={logo} alt="logo"/></div></Link>
            <hr />
            <div><ul>
                <li className='flex gap-3'><Image src={phone} height={16} width={16} alt="phone"></Image><Link href="tel:+998964782040"> +998 94 618 45 72</Link></li>
                <li className='flex gap-3'><Image src={mail} height={16} width={16} alt="mail"/><Link href="mailto:cvdi@di.uz">cvdi@di.uz</Link></li>
                <li className='flex gap-3'><Image src={location} height={16} width={16} alt="location"/><Link href="/contact">6 Seul st., Chilanzar district, Tashkent city, Uzbekistan</Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className='px-10'><h5 className='text-white '>Sitemap</h5>
    <ul className='link-widget'>
    <li><Link href="/jobs">Vacancy</Link></li>
    <li><Link href="/exercus">Internship</Link></li>
    <li><Link href="/news">News</Link></li>
</ul>
    </div></div>
    <div className='bg-[#25242A] py-8'>
    <div className='custom_container gap-8 flex justify-between flex-col sm:flex-row'><div>
        <p className='text-white'><Link href="/">&#169; Discover Invest — All rights reserved.</Link></p></div>
        <div className='socials'>
            <Link href="#"><Image src={twitter} height={15} width={15} alt="twitter"></Image></Link>
            <Link href="#"><Image src={youtube} height={15} width={15} alt="twitter"></Image></Link>
            <Link href="#"><Image src={facebook} height={15} width={15} alt="twitter"></Image></Link>
            <Link href="#"><Image src={telegram} height={15} width={15} alt="twitter"></Image></Link>
            <Link href="#"><Image src={inst} height={15} width={15} alt="twitter"></Image></Link>
        
        </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer