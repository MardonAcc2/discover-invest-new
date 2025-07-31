"use client"
import Image from 'next/image'
import {React,useState} from 'react'
import styles from './video.module.scss'
import img1 from '../../../public/img/4.jpg'
import img2 from '../../../public/img/5.jpg'
import img3 from '../../../public/img/6.jpg'
import img10 from '../../../public/img/10.jpg'
import img11 from '../../../public/img/11.jpg'
import img12 from '../../../public/img/12.jpg'
import HeroStatic from '../Components/HeroStatic'

import { useRouter } from 'next/navigation'


export const VideoData =[{
    id:1,
    img:img1,

    href:"https://www.youtube.com/embed/GyzKAShzMb4?",
    title:"Discover Invest in the eyes of students! Part - 1.",
},
{
    id:2,
    img:img2,

    href:"https://www.youtube.com/embed/hj7FuU3Gzj0?",
    title:"Discover Invest in the eyes of students! Part - 2.",
},
{
    id:3,
    img:img3,

    href:"https://www.youtube.com/embed/9Wdc1bHC5-Q?",
    title:"Professional development. Part 1.",
},
{
    id:4,
    img:img10,

    href:"https://www.youtube.com/embed/Ru_5M5C0MgY?",
    title:"Professional development. Part 2.",
},
{
    id:5,
    img:img11,

    href:"https://www.youtube.com/embed/lg8DHG3LhpA?",
    title:"Gardens Residence",
},
{
    id:6,
    img:img12,

    href:"https://www.youtube.com/embed/ClxV_Foy410?",
    title:"Boulevard",
}
]
const Video = ({num}) => {

    const [modal,setModal]= useState(false);
    const [modalid,setModalid]=useState("");
    const route = useRouter(); 
   const Openvideo = (id)=>{
     route.push(`/vidopen/${id}`);
   }
  return (
      <>
      {num?(<h2 className='video_text_title'>
        Video
        </h2>):(<HeroStatic name={"Video"}/>)}
    <div className='pt-20 relative'>
        
        
        <div className='custom_container'>
            <div className={styles.video_wrp}>
{VideoData.map((item)=>(
    <div key={item.id}>
        <div className={styles.videoblog}>
            
                <div className='col-sm-4 videoblog_main_item'>
                    <div className={styles.videoblog_img}>
                        <Image onClick={(e)=>{/*setModal(!modal); setModalid(item.href)</div>*/setModalid(item.href);Openvideo(item.id)}} src={item.img} width={700} height={500} alt="img"/>
                        </div> </div>
                        <p onClick={(e)=>{/*setModal(!modal); setModalid(item.href)</div>*/setModalid(item.href);Openvideo(item.id)}} className={styles.link_video_title}>
        {item.title}    </p>
            
        </div>
    </div>
)).slice(0 , num?? VideoData.length)}

</div>

</div>

    </div>
    </>
  )
}

export default Video