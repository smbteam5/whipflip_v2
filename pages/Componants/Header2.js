import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Head from 'next/head';
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
            </>
        </Head>
        <div className="offer_header">
            <div className="offer_header_in">
              <div className="oh_logo">
                  <img src="/images/offer-sell-header.svg" alt="" />
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