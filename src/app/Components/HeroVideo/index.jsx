"use client"
import {React,useEffect, useState} from 'react'
import styles from './hero.module.scss'

export const videoSrc=[{
id:1,
src:"./videos/video_home_new.mp4"
},{
id:2,
src:"./videos/video_page.mp4",
}]
const HeroVideo = ({id}) => {
const [video,SetVideo]= useState([])
const filterVideo = videoSrc.filter((item)=>item.id==id);

useEffect(()=>{
  SetVideo(filterVideo);
},[id])
  return (
      <>
      <section>
        
      <div className={styles.videowrapper}>
  <video src={video.map((item)=>item.src)} controls muted autoPlay loop />
</div>
    </section>
    </>
  )
}

export default HeroVideo