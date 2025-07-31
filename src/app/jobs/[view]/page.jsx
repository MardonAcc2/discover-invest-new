"use client"
import HeroStatic from '@/app/Components/HeroStatic'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import {React,useState, useEffect} from 'react'
import styles from "../jobs.module.scss"
import { jobsInfo } from '../page'
import img1 from "../../../../public/full.svg"
import Link from 'next/link'
const View = () => {
    const params = useParams();
     
  const [job,setJob]=useState([])
  const jobFilter= jobsInfo.filter((item)=>(item.id==Number(params.view)))
  useEffect(()=>{
    setJob(jobFilter);
  },[params])
  
  return (
      <>
    <div>
        {console.log()}
        <HeroStatic name={job.map((item)=>(item.title)).join()}/>
    </div>
    <section className={styles.job_single}>
        <div className='custom_container'>
            <div>
                <h2 >{job.map((item)=>(item.title)).join()}</h2>
                <div className='flex align-center gap-15 py-5'><div><Image src={img1} height={20} width={20} alt="full"></Image></div>
                <p>{job.map((item)=>(item.time))}</p></div>
                <h3>Информация о вакансии</h3>
                <span>Требования:</span>
{job.map((item)=>(<ul key={item.id}>{item.li?.map((item,index)=>(
<li key={index}>{item}</li>))}</ul>))}
<span>Обязанности:</span>
{job.map((item)=>(<ul key={item.id}>{item.Responsibilities?.map((item,index)=>(
<li key={index}>{item}</li>))}</ul>))}
<span>Условия:</span>
{job.map((item)=>(<ul key={item.id}>{item.Conditions?.map((item,index)=>(
<li key={index}>{item}</li>))}</ul>))}
<Link href="/"><button>Apply</button></Link>
</div>
</div>
</section>
    </>
  )
}

export default View