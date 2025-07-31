import React from 'react'
import ClientSwiper from '../Components/SwiperComp'
import styles from './jobs.module.scss'
import img1 from "../../../public/img/prorab1.jpg"
import img2 from "../../../public/img/prorab2.jpg"
import img3 from "../../../public/img/prorab3.jpg"
import img4 from "../../../public/img/prorab4.jpg"
import img5 from "../../../public/img/prorab5.png"
import Image from 'next/image'
import Link from 'next/link'
import { INTERNALS } from 'next/dist/server/web/spec-extension/request'


export const jobsInfo=[{
    id:1,
img:img1,
title:"МАСТЕР СТРОИТЕЛЬНОГО УЧАСТКА",
href:"/jobs/",
time:"from 08:00 to 19:00",
li:["высшее образование;","опыт работы на аналогичной должности: от 3-x лет;","умение работать на программах AUTOCAD, Excel, Word;","знание языков: узбекский и русский."],
Responsibilities:["обеспечить бригаду и работников инструментами, приспособлениями и средствами малой механизации;","обучение и контроль работ бригадиров;","  соблюдение правил внутреннего трудового распорядка и иные локальные нормативные акты дисциплины."],
Conditions:["график работы 6/1;"," 3-х разовое питание и жильё за счёт компании;"," официальное трудоустройство согласно Трудовому Кодексу РУз;"," достойная заработная плата."],

},{
    id:2,
    img:img2,
    title:"ЭЛЕКТРИК",
    href:"/jobs/",
    time:"from 08:00 to 19:00",
    li:["опыт работы от 1го года;","наличие допуска к высоким напряжениям до 1000 Вольт."],
Responsibilities:["ремонт и обслуживание электрооборудований на территории предприятия."],
Conditions:["график работы 6/1;"," 3-х разовое питание и жильё за счёт компании;"," официальное трудоустройство согласно Трудовому Кодексу РУз;"," достойная заработная плата."],

},
{id:3,
    img:img3,
    title:"ИНЖЕНЕР ПО ТЕХНИЧЕСКОМУ НАДЗОРУ",
    href:"/jobs/",
    time:"from 08:00 to 18:00",
    li:["высшее образование;"," опыт руководства группой специалистов и организация процесса с нуля;","опыт работы на аналогичной должности: от 5-и лет;","знание языков: узбекский и русский."],
    Responsibilities:["технический надзор за проведением СМР;"," контроль качества материалов и произведенных работ на соответствие требованиям проектно-технической документации;","  контроль за соблюдением объемов и сроков работ;","контроль соответствия выполняемых работ требованиям проекта;"," участие в приемке выполненных работ и сдаче объекта в эксплуатацию."],
    Conditions:["график работы 6/1;"," 3-х разовое питание и жильё за счёт компании;"," официальное трудоустройство согласно Трудовому Кодексу РУз;"," достойная заработная плата."],
    
},
{id:4,
    img:img4,
    title:"ИНЖЕНЕР-ГЕОДЕЗИСТ",
    href:"/jobs/",
    time:"from 08:00 to 18:00",
li:["высшее образование;","опыт работы на аналогичной должности: от 3-x лет;","умение работать на программах AUTOCAD, Excel, Word;","знание языков: узбекский и русский."], 
    Responsibilities:["руководить основными геодезическими работами;","проектировать и проводить геодезические работы специального назначения;","  осуществлять контроль за перемещениями и деформациями конструкций и элементов зданий и сооружений в процессе производства СМР;","осуществлять экспертизу конструкторской и технологической документации;","осуществлять контроль за состоянием, правильностью хранения и эксплуатации геодезических приборов."],
    Conditions:["график работы 6/1;"," 3-х разовое питание и жильё за счёт компании;"," официальное трудоустройство согласно Трудовому Кодексу РУз;"," достойная заработная плата."],
    
},
{id:5,
    img:img5,
    title:"FOREMAN",
    href:"/jobs/",
    time:"from 08:00 to 18:00",
    li:["высшее образование;"," знание формы-2 и проектно-сметной документации строительства;","опыт работы на аналогичной должности: от 3-x лет;","умение работать на программах AUTOCAD, Excel, Word;","знание языков: узбекский и русский."],
    Responsibilities:[" организация и координация работ;"," контроль выполнения графика, соблюдения технологий и качества работ;","планирование и организация материально-технического обеспечения строительства;","работа с проектно-сметной и технической документацией;","линейная организация производства работ на объекте."],
    Conditions:["график работы 6/1;"," 3-х разовое питание и жильё за счёт компании;"," официальное трудоустройство согласно Трудовому Кодексу РУз;"," достойная заработная плата."],
    
}]
const Jobs = () => {

  return (
 <>
 <div>
 <div className={`h-screen w-screen ${styles.intro}`}>
     
 </div>
 <div className={`h-screen w-screen${styles.intro_info}`}>
         <h2>We unite talents</h2>
     </div>
 <ClientSwiper id={1}/>
 </div>
 <section className={styles.filter}>
     <div className='custom_container'>
         <h2>Discover your opportunities</h2>
         <div><p className='py-5'>If there is no suitable vacancy for you, fill out the form.</p></div>
         <Link href="#">Fill this form</Link>
     </div>

 </section>
 <section className={styles.vacan}>
     <div className='custom_container filter_main'>
         <h2>Vacancies</h2>
         <ul className='category-filter_list'>
             <li>Production personnel</li>
             <li>Производственный персонал </li>
         </ul>
     </div>
     <div className='custom_container'>
     <div className={styles.jobsInfo}>
         {jobsInfo.map((item)=>(<div className='relative overflow-hidden rounded-md' key={item.id}>
             <div ><Image  src={item.img} height={300} alt={item.title}/>
             <div className={styles.jobsInfo_description}>
                 <h3>{item.title}</h3>
                 <Link href={item.href+item.id}>Details</Link></div> </div>
         </div>))}
     </div>
     </div>
 </section>
 </>
  )
}

export default Jobs