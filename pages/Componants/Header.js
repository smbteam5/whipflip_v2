import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sidebar from './Sidebar';
import Head from 'next/head';
//import logo from '../images/logo.png' // relative path to image 
//import logo from "../images/logo.png";
function Header() {
    const [scroll, setScroll] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false)
    const handleShowSideBar = () =>{
        setOpenSideBar(true)
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 150);
        });
    })
  return (
    <div>
        <Head>
            <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css"/>
            </>
        </Head>
        <div className="whipflip-fluid">
            <div className={"menuNav " + (scroll ? "stickyMenu animated fadeInDown" : "staticMenu")}>
                <Navbar expand="lg" className="whipflip_nav navBar">
                    <Navbar.Brand href="#home">                   
                        <Image src="/images/logo.png" alt="Vercel Logo" width={275} height={50} />
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <div className="hambergerMenu scrollHamberger showOnMobileHam" onClick={handleShowSideBar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {
                        !scroll ?
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto wf-nav-list">
                            <Nav.Link href="#home">About WhipFlip</Nav.Link>
                            <Nav.Link href="#link">How it Works</Nav.Link>
                            <Nav.Link href="#link2">Support</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>:
                    <>
                        <div className="vehicleDetailNav">
                            <div className="vdnHd">
                                <span>Enter vehicle details</span> 
                                <span>for an instant offer.</span>
                            </div>
                            <div className="vdnForm">
                                <div className="vdnForm_fields">
                                    <form autocomplete="off" class="form" role="form">                  
                                        <div className="vdn_frm_flds">
                                            <div class="form-group row vdn_grp_row">
                                                <div class="col-lg-12">
                                                    <select class="form-control firstSelect" id="user_time_zone" size="0">
                                                        <option value="Hawaii">
                                                        Year
                                                        </option>
                                                        <option value="Alaska">
                                                        (GMT-09:00) Alaska
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row vdn_grp_row">
                                                <div class="col-lg-12">
                                                <select class="form-control" id="user_time_zone" size="0">
                                                    <option value="Hawaii">
                                                    Make
                                                    </option>
                                                    <option value="Alaska">
                                                    (GMT-09:00) Alaska
                                                    </option>
                                                </select>
                                                </div>
                                            </div>
                                            <div class="form-group row vdn_grp_row">
                                                <div class="col-lg-12">
                                                <select class="form-control" id="user_time_zone" size="0">
                                                    <option value="Hawaii">
                                                    Model
                                                    </option>
                                                    <option value="Alaska">
                                                    (GMT-09:00) Alaska
                                                    </option>
                                                </select>
                                                </div>
                                            </div>
                                            <div class="form-group row vdn_grp_row">
                                                <div class="col-lg-12">
                                                <select class="form-control lastSelect" id="user_time_zone" size="0">
                                                    <option value="Hawaii">
                                                    Trim/Series
                                                    </option>
                                                    <option value="Alaska">
                                                    (GMT-09:00) Alaska
                                                    </option>
                                                </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row vdn_grp_row">
                                            <div class="col-lg-12">
                                            <input class="btn btn-secondary getOfferBtn nav_getOfferBtn" type="reset" value="Get Instant Offer" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="hambergerMenu scrollHamberger" onClick={handleShowSideBar}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </>
                    }
                </Navbar>

            </div>            
        </div>
        <div className="sideMenu">
          <Sidebar handleShowSideBar={handleShowSideBar} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
        </div>
    </div>
  )
}

export default Header