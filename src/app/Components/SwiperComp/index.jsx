"use client"
import {React, useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination, Autoplay } from 'swiper/modules'
import img1 from '../../../../public/img/EH1.jpg' 
import img2 from '../../../../public/img/EH2.jpg' 
import img3 from '../../../../public/img/EH3.jpg'
import img4 from '../../../../public/img/Log_1.jpg'
import img5 from '../../../../public/img/Log_2.jpg' 
import img6 from '../../../../public/img/Log_3.jpg' 
import img7 from '../../../../public/img/Log_4.jpg' 
import img8 from '../../../../public/img/Log_5.jpg' 
import img9 from '../../../../public/img/Log_6.jpg' 
import img10 from '../../../../public/img/Log_7.jpg' 
import img11 from '../../../../public/img/Log_8.jpg' 

import Image from 'next/image'

const ClientSwiper = ({id}) => {
  const [idslide, setId] = useState(4);
  useEffect(() => {
    function updateId() {
      const width = window.innerWidth;
      if (width <= 567) {
        setId(1);
      } else if (width <= 768) {
        setId(2);
      }else if (width <= 1280) {
        setId(3);
      }  else {
        setId(4);
      }
    }
    updateId();

    window.addEventListener('resize', updateId);
    return () => window.removeEventListener('resize', updateId);
  }, []);
  return (
    (id==1)?<Swiper
    modules={[ Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 5000, // 3 секунды между слайдами
      disableOnInteraction: false, // не останавливать при взаимодействии
    }}
    loop={true} // бесконечный цикл
  >
    <SwiperSlide><div className='w-screen h-screen relative'><Image  src={img1}  fill
      className="object-cover" alt="img"/></div></SwiperSlide>
    <SwiperSlide><div className='w-screen h-screen relative'><Image  src={img2}  fill
      className="object-cover" alt="img"/></div></SwiperSlide>
    <SwiperSlide><div className='w-screen h-screen relative'><Image  src={img3}  fill
      className="object-cover" alt="img"/></div></SwiperSlide>
    
  </Swiper>:<Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={idslide}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  loop={true}
>
  <SwiperSlide>
    <div className="w-full h-[360px] relative">
      <Image src={img4} fill className="object-cover" alt="img" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="w-full h-[360px] relative">
      <Image src={img5} fill className="object-cover" alt="img" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="w-full h-[360px] relative">
      <Image src={img6} fill className="object-cover" alt="img" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="w-full h-[360px] relative">
      <Image src={img7} fill className="object-cover" alt="img" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="w-full h-[360px] relative">
      <Image src={img8} fill className="object-cover" alt="img" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="w-full h-[360px] relative">
      <Image src={img9} fill className="object-cover" alt="img" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="w-full h-[360px] relative">
      <Image src={img10} fill className="object-cover" alt="img" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="w-full h-[360px] relative">
      <Image src={img11} fill className="object-cover" alt="img" />
    </div>
  </SwiperSlide>
</Swiper>
    
  )
}

export default ClientSwiper