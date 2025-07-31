"use client"
import HeroStatic from '@/app/Components/HeroStatic';
import { VideoData } from '@/app/video/page';
import { useParams } from 'next/navigation'

import {React,useState,useEffect} from 'react'





const VidOpen = () => {
    const params = useParams();
    console.log(params);
    const [vid,setVid]=useState([])
  const VideoFilter= VideoData.filter((item)=>(item.id==Number(params.id)))
  useEffect(()=>{
    setVid(VideoFilter);
  },[params])
  return (
      <>
      <HeroStatic name={`Video: ${vid.map((item)=>item.title)}`}/>
    <div className='custom_container'>
    <iframe
    src={vid.map((item)=>item.href)}
    title="YouTube video"
    className="relative my-5  mx-auto w-full h-[50vw] block"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
  </div>
    </>
  )
}

export default VidOpen