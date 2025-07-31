import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img6 from '../../../public/img/1.jpg'
import img8 from '../../../public/img/2.jpg'
import img9 from '../../../public/img/3.jpg'
import img10 from '../../../public/img/7.jpg'
import img11 from '../../../public/img/8.jpg'
import img12 from '../../../public/img/9.jpg'
import img7 from '../../../public/time.svg'
import HeroStatic from '../Components/HeroStatic'

export const NewsInfo=[{
id:1,
img:img6,
title:"Today, our company hosted an award ceremony for some of the employees who have achieved high results in distance learning on the iSpring Learn platform.        ",
data:"May 30, 2021",
description:["Today, our company hosted an award ceremony for some of the employees who have achieved high results in distance learning on the iSpring Learn platform."],
},
{
    id:2,
    img:img8,
    title:"Discover Invest continues to recruit construction specialists in Andijan, Namangan and Fergana regions.",
    data:"May 30, 2021",
    description:["Discover Invest continues to recruit construction specialists in Andijan, Namangan and Fergana regions.","As part of additional measures to promote employment and discussions held, applicants were introduced to the working conditions in the company, opportunities and benefits.","We sincerely thank the responsible persons, as well as the activists of the makhallas for the warm welcome, support and organization of meetings with residents of urban and rural areas."],
    },
    {
        id:3,
        img:img9,
        title:"Project manager of Boulevard Kuchkarov Fazliddin was awarded a state award - the Shukhrat medal.",
        data:"May 30, 2021",
        description:["We sincerely congratulate Kuchkarov Fazliddin, the Boulevard project manager, with a worthy state award - the Shukhrat medal!","We wish him success and not be satisfied with what has already been achieved!","We express our deep gratitude to the leadership of our country for the assessment and recognition of the work of our colleague.","Discover Invest perfection in everything."],
        },
        {
            id:4,
            img:img10,
            title:"Discover Invest is recruiting a team of builders.",
            data:"May 30, 2021",
            description:["Discover Invest is recruiting a team of builders.","Another visit to the Kashkadarya region, where everyone could get acquainted with the working conditions in our company and the brand as a whole.","The next meeting will take place in Andijan, Namangan and Fergana regions."],
            },
            {
                id:5,
                img:img11,
                title:"The Discover Invest team participated in the hashar.",
                data:"May 30, 2021",
                description:["The Discover Invest team participated in the hashar. Hashar means prosperity, solidarity, informal communication with colleagues and a great mood.","We are one team!","# Hashar-05/25/2021."],
                },
                {
                    id:6,
                    img:img12,
                    title:"Discover Invest in Angren. Participation on Job Fair.",
                    data:"May 30, 2021",
                    description:["On May 8, a job fair was organized in the city of Angren. The Discover Invest team actively participated in this event."],
                    },]
const News = ({num}) => {
  return (
    <>
    <section className="last_news">
    {num?(<h2>
        News
        </h2>):(<HeroStatic name={"News"}/>)}
    
      <div className="custom_container">
       
        <div className="last_news_main row row_35 pt-15">
          
          {NewsInfo.map((item)=>(
            <div key={item.id} className="col-sm-4 last_news_main_item aos-init aos-animate" data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="700">
          <Link href={`/news/${item.id}`}><Image src={item.img} height={300} alt="img"></Image></Link>
            <div className="news_text">
              <div className="times">
              <Image src={img7} height={12} width={12} alt="time"></Image>
              <span>{item.data}</span>
              </div>
              <Link href={`/news/${item.id}`} className="title_link_news">
             {item.title}                        
              </Link>
              <Link href={`/news/${item.id}`} className="read_more">
              Read more                 
              </Link>
            
            </div>
            </div>
            )).slice(0, num ?? NewsInfo.length)}

          
        
        </div>
      </div>

    </section>
    </>
  )
}

export default News