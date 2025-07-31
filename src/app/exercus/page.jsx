import Link from 'next/link'
import React from 'react'
import HeroVideo from '../Components/HeroVideo'
import ImgModal from '../Components/ImgModal'
import ClientSwiper from '../Components/SwiperComp'
import styles from "../jobs/jobs.module.scss"
const Exercus = () => {
  return (
      <>
      <HeroVideo id={2}/>
      <section className="about_us">
<div className="custom_container">
<div className="about_us_main aos-init aos-animate" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="700">
<p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700" className="aos-init aos-animate">
For students and graduates of higher and secondary specialized educational institutions, there is a unique opportunity to participate in the selection for internship / practice and become part of the team. Future specialists will be able to take part in the implementation of interesting, international projects, as well as receive an invitation to work with the prospect of career growth or acquire recommendations for further employment.
</p>
</div>
</div>
    </section>
    <section className={styles.filter}>
    <div className='custom_container'>
         <h2>Discover your opportunities</h2>
         <div><p className='py-5'>If there is no suitable vacancy for you, fill out the form.</p></div>
         <Link href="#">Fill this form</Link>
     </div>
     </section>
     <ImgModal></ImgModal>
     <section>
       <div className={styles.filter}><h2 className='pt-15'>PARTNERS</h2></div>
       <div className='px-1'>
         <ClientSwiper id={2}/>
       </div>
     </section>
      </>
  )
}

export default Exercus