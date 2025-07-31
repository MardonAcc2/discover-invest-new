"use client"
import HeroStatic from '@/app/Components/HeroStatic'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import {React,useState, useEffect} from 'react'

import styles from "../../jobs/jobs.module.scss"


import Link from 'next/link'
import { NewsInfo } from '../page'
const Post = () => {
    const params = useParams();
     
  const [news,setNews]=useState([])
  const jobNews= NewsInfo.filter((item)=>(item.id==Number(params.post)))
  useEffect(()=>{
    setNews(jobNews);
  },[params])
  
  return (
      <>
    <div>
       
        <HeroStatic name={news.map((item)=>(item.title)).join()}/>
    </div>
    <section className={styles.job_single}>
        <div className='custom_container'>
            <div className='pt-15'>
                
              
                {news.map((item)=>(<div key={item.id}>{item.description?.map((item,index)=>(
<p className='pb-10' key={index}>{item}</p>))}</div>))}

<Link href="/"><button>Go Home</button></Link>
</div>
</div>
</section>
    </>
  )
}

export default Post