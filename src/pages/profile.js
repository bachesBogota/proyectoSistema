import Sidebar from "../components/Sidebar"
import Navbar from "../components/NavBar"
import ProfileSection from "../components/ProfileSection"
import React, {useState} from 'react';
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjFour, homeObjFive } from "../components/InfoSection/Data";
import Footer from "../components/Footer";



const Profilepage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <ProfileSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjFour}/>
      <InfoSection {...homeObjFive}/>
      <Footer/>
    </>
  )
}

export default Profilepage
