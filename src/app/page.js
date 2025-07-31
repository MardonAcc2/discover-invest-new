import Image from "next/image";
import Link from "next/link";
import HeroVideo from "./Components/HeroVideo";
import img1 from '../../public/img/772.jpg'
import img2 from '../../public/img/Career8.png'
import img3 from '../../public/img/Career6.png'
import img4 from '../../public/img/Career5.png'
import img5 from '../../public/img/Career7.png'
import img6 from '../../public/img/1.jpg'
import img7 from '../../public/time.svg'
import img8 from '../../public/img/2.jpg'
import img9 from '../../public/img/3.jpg'
import Video from "./video/page";
import News from "./news/page";
import Aos from "./Components/Aos";
import Head from "next/head";

export default function Home() {
  
  return (
    <>
    
    <HeroVideo id={1}/>

    <div id="google_translate_element" style={{ marginTop: 20 }}></div>
    <section className="about_us">
<div className="custom_container">
<div className="about_us_main aos-init aos-animate" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="700">
<p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700" className="aos-init aos-animate">

Being in the Discover Invest team means achieving high professional success, working with the best local and foreign specialists, learning and growing with the company. Become a part of history, contribute to the implementation of the most daring projects in Uzbekistan.
</p>
</div>
</div>
    </section>

    <section className="types_work">
<div className="container-post">
  <div className="types_work_main">
    <div className="types_work_main_item aos-init aos-animate">
      <h3>Vacancy</h3>
      <Link href="/jobs" className="link_to"><span>Learn more</span></Link>
      <div className="block_skew">
        <div className="img_w" ></div>
      </div>
    </div>
    <div className="types_work_main_item aos-init aos-animate">
    <h3>Internship</h3>
      <Link href="/exercus" className="link_to"><span>Learn more</span></Link>
      <div className="block_skew">
        <div className="img_e" ></div>
      </div>
    </div>
  </div>
</div>
    </section>
    <section className="offer">
<div className="container-post">
<h2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700" className="aos-init aos-animate">
What we offer
</h2>
<div className="block_offer_gallery">
<div className="block_offer_first aos-init aos-animate" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="700">
  <a><div className="text"><h3 className="heading-title">Advantages</h3></div>
  <Image src={img1} height={500} alt="Advantages"></Image></a>
</div>
<div className="block_offer_second aos-init aos-animate" data-aos="fade-up"  data-aos-easing="linear"  data-aos-duration="700">
<a><div className="text"><p >We offer many exciting opportunities and a worthy rewards. </p></div>
  <Image src={img2} height={500} alt="Advantages"></Image></a>
  <a><div className="text"><p>We strive to provide our employees with a comfortable working environment so that they can get the best - a safe, pleasant workspace and respect.</p></div>
  <Image src={img3} height={500} alt="Advantages"></Image></a>
</div>
<div className="block_offer_second aos-init aos-animate" data-aos="fade-up"  data-aos-easing="linear"  data-aos-duration="700">
<a><div className="text"><p>We invest in the potential of our employees, because they are the true engine of our growth and success. </p></div>
  <Image src={img4} height={500} alt="Advantages"></Image></a>
  <a><div className="text"><p>We care about healthy nutrition for our employees. We have a delicious menu for lunch and afternoon snack, as well as aromatic tea and coffee. </p></div>
  <Image src={img5} height={500} alt="Advantages"></Image></a>
</div>
</div>
</div>
    </section>
    <News num={3}/>
    {/*<section className="last_news">
      <div className="custom_container">
        <h2>
        News
        </h2>
        <div className="last_news_main row row_35">
          <div className="col-sm-4 last_news_main_item aos-init aos-animate" data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="700">
          <Link href="/post/1"><Image src={img6} height={300} alt="img"></Image></Link>
            <div className="news_text">
              <div className="times">
              <Image src={img7} height={12} width={12} alt="time"></Image>
              <span>May 30, 2021</span>
              </div>
              <Link href="/post/1" className="title_link_news">
              Today, our company hosted an award ceremony for some of the employees who have achieved high results in distance learning on the iSpring Learn platform.                        
              </Link>
              <Link href="/post/1" className="read_more">
              Read more                 
              </Link>
            </div>
          </div>
          <div className="col-sm-4 last_news_main_item aos-init aos-animate" data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="700">
          <Link href="/post/2"> <Image src={img8} height={300} alt="img"></Image></Link>
            <div className="news_text">
              <div className="times">
              <Image src={img7} height={12} width={12} alt="time"></Image>
              <span>May 30, 2021</span>
              </div>
              <Link href="/post/2" className="title_link_news">
              Discover Invest continues to recruit construction specialists in Andijan, Namangan and Fergana regions.                         
              </Link>
              <Link href="/post/2" className="read_more">
              Read more                 
              </Link>
            </div>
          </div>
          <div className="col-sm-4 last_news_main_item aos-init aos-animate" data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="700">
          <Link href="/post/3"> <Image src={img9} height={300} alt="img"></Image></Link>
            <div className="news_text">
              <div className="times">
              <Image src={img7} height={12} width={12} alt="time"></Image>
              <span>May 30, 2021</span>
              </div>
              <Link href="/post/3" className="title_link_news">
              Project manager of Boulevard  Kuchkarov Fazliddin was awarded a state award - the Shukhrat medal.                                
              </Link>
              <Link href="/post/3" className="read_more">
              Read more                 
              </Link>
            </div>
          </div>
        
        </div>
      </div>

  </section>*/}
    <section>
      <Video num={3}></Video>
    </section>
    </>

  );
}
