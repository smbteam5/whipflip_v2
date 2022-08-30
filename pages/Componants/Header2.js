import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Head from 'next/head';
import Image from 'next/image'
function Header2() {
  const [openSideBar, setOpenSideBar] = useState(false)
  const handleShowSideBar = () =>{
    setOpenSideBar(true)
  }
  return (
    <div>
        <Head>
            <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
            </>
        </Head>
        <div className="offer_header">
            <div className="offer_header_in">
              <div className="oh_logo">
                  <Image 
                    src="/images/offer-sell-header.svg" 
                    alt="offer sell logo" 
                    title='offer sell logo'
                    width={250}
                    height={40}
                  />
              </div>
              <div className="hambergerMenu" onClick={handleShowSideBar}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>
        
        <div className="sideMenu">
          <Sidebar handleShowSideBar={handleShowSideBar} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
        </div>
    </div>
    
  )
}

export default Header2