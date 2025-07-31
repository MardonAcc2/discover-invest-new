"use client"
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import img1 from "../../../../public/img/stager.jpg"
import img2 from "../../../../public/img/5.jpg"
import img3 from "../../../../public/img/22.png"
import img4 from "../../../../public/img/23.jpg"
import img5 from "../../../../public/img/24.jpg"
import img6 from "../../../../public/img/25.png"
import crossblack from "../../../../public/cross-black.svg"
import Image from "next/image";
import styles from "../../jobs/jobs.module.scss"
export const imageSrc=[{
    id:1,
    img:img1,
},
{
    id:2,
    img:img2,
},
{
    id:3,
    img:img3,
},
{
    id:4,
    img:img4,
},
{
    id:5,
    img:img5,
},
{
    id:6,
    img:img6,
},]
const ImgModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const [imgid, setImageid] =useState(false);
  
    // Эффект, чтобы рендерить компонент только на клиенте
    useEffect(() => {
      setHasMounted(true);
      Modal.setAppElement('#custom_id');
    }, []);
  
    if (!hasMounted) {
      return null; // Не рендерим компонент на сервере
    }
  
    const openModal = (id) => {
        const i= imageSrc.filter((item)=>item.id==id);
        setIsOpen(true);
    setImageid(i);
    
    };
    const closeModal = () => setIsOpen(false);
  return (
    <>
 <div id="custom_id">
     <div className="custom_container">
 <div className={styles.jobsInfo}>
    
     {imageSrc.map((item)=>(<div className='relative overflow-hidden rounded-md cursor-pointer' key={item.id}><div><Image className="scale-110 hover:!scale-120" onClick={()=>openModal(item.id)} src={item.img} height={300} alt="Изображение" /></div> </div>))}
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}
       >
        <button className="p-2 rounded cursor-pointer" onClick={closeModal}><Image src={crossblack} height={32} alt="cross"></Image></button>
        <img src={imgid?(imgid[0].img.src):""} alt="Изображение" style={{ width: "100%" }} />
      </Modal>
    </div>
    </div>
    </>
  )
}

export default ImgModal