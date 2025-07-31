import React from 'react'

import phone from "../../../public/phone.svg"
import mail from "../../../public/mail.svg"
import location from "../../../public/location.svg"
import Image from 'next/image'
const Contact = () => {
  return (
    
    <>
    <div className='custom_container '>
    <div className="flex pt-30 flex-col lg:flex-row gap-15 w-full min-h-screen px-4 py-10 bg-white text-black">
      {/* Left section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-3xl font-semibold mb-4">Contact us</h2>
        <p className="mb-6 text-gray-600">
          Interested to join our team? Then leave your CV and we will contact you as soon as possible!
        </p>
        <div className="space-y-4 text-gray-700">
          <p><strong>Tashkent</strong></p>
          <Image src={location} height={16} width={16} alt="img" ></Image><p> 16 Seul st., Chilanzar district, Tashkent city, Uzbekistan</p>
          <Image src={mail} height={16} width={16} alt="img" ></Image><p> cvdi@di.uz</p>
          <Image src={phone} height={16} width={16} alt="img" ></Image><p> +998 94 618 45 72</p>
         
        </div>
      </div>

      {/* Right section */}
      <form className="w-full lg:w-1/2 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input type="text" required placeholder="Full name" className="w-full border border-grey-100 p-3 rounded" />
            
          </div>
          <div className="flex-1">
            <input type="text"
            required placeholder="Phone" className="w-full border border-grey-100 p-3 rounded" />
            
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input required type="email" placeholder="Email" className="w-full border border-grey-100 p-3 rounded" />
            
          </div>
          <div className="flex-1">
            <input required type="text" placeholder="Subject" className="w-full border border-grey-100 p-3 rounded" />
            
          </div>
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Verification Code</label>
          <input type="text" required className="w-full border border-grey-100 p-3 rounded" />
          <div className="flex items-center mt-2 space-x-4">
            <img src="/captcha.jpg" alt="captcha" className="h-10" />
            <button type="button">
              🔄
            </button>
          </div>
          
        </div>
        <div>
          <textarea required placeholder="Your message" className="w-full h-32 border border-grey-100 p-3 rounded"></textarea>
          
        </div>
        <button type="submit" className="bg-orange-400 cursor-pointer hover:bg-orange-500 text-white px-6 py-3 rounded">
          Send
        </button>
      </form>
    </div>
    </div></>
  )
}

export default Contact