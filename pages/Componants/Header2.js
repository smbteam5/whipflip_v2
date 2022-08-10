import React,{useState} from 'react'
import Sidebar from './Sidebar'

function Header2() {
  const [openSideBar, setOpenSideBar] = useState(false)
  const handleShowSideBar = () =>{
    setOpenSideBar(true)
  }
  return (
    <div>
        <div className="offer_header">
            <div className="oh_logo">
                <img src="/images/offer-sell-header.svg" alt="" />
            </div>
            <div className="hambergerMenu" onClick={handleShowSideBar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        
        <div className="sideMenu">
          <Sidebar handleShowSideBar={handleShowSideBar} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
        </div>
    </div>
    
  )
}

export default Header2