import Image from 'next/image'
import React from 'react'
import styles from "./heroS.module.scss"
import img1 from "../../../../public/img/videobc.jpg"
const HeroStatic = ({name}) => {
  return (<>
    <section className={styles.heroStatic}>
    <div className='w-screen min-h-[300px] relative'><Image  src={img1}  fill
      className="object-cover" alt="img"/>
      <div className='custom_container'><span>{name}</span></div>
      </div>
    </section>
    </>
  )
}

export default HeroStatic