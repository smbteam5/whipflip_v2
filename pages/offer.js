import React,{useState} from 'react'
import Head from 'next/head';
import Footer from './Componants/Footer'
import Header from './Componants/Header'
import Step1 from './Componants/Step1'
import Step2b from './Componants/Step2b';
import Step3 from './Componants/Step3';
import Header2 from './Componants/Header2';
import ToLeaveModal from './Componants/ToLeaveModal';
import OfferFactorsModal from './Componants/mobile/OfferFactorsModal';
import Image from 'next/image'
function offer() {
    const [activeTab, setActiveTab] = useState("tab1");
    const [show, setShow] = React.useState(false) 
    const [showOfmodal,setShowOfmodal] = useState(false); 
    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    };
    const handleClose = () =>{
        setShow(false);
    }
    const handleOpen = (e) =>{
        e.preventDefault();
        setShow(true);
    }
    const handleShowOfmodal = (e) =>{
        e.preventDefault()
        setShowOfmodal(true)
    }
    const handleCloseOfmodal = (e) =>{
        setShowOfmodal(false)
    }
  return (
    <div>
        
        <Head>
            <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css"/>
            </>
        </Head>
        {
            show &&
            <ToLeaveModal handleClose={handleClose} show={show}/>
        }
        {
        showOfmodal &&
            <OfferFactorsModal showOfmodal={showOfmodal} handleCloseOfmodal={handleCloseOfmodal}/>
        }
        <div className="whipflip-header">
            <Header2/>
        </div>
        <div className="offer_body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 p-0">
                        <div className="formLeftSec">
                            <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">            
                                <li className={activeTab === "tab1" ? "form-stepper-active text-center form-stepper-list": "text-center form-stepper-list form-stepper-unfinished"} step="1" onClick={()=>{handleTab1()}}>
                                    <a className="mx-2" title='Initial Offer'>
                                        <span className="form-stepper-circle">
                                            <span>1</span>
                                        </span>
                                        <div className="label">Initial Offer</div>
                                    </a>
                                </li>
                                <li className={activeTab === "tab2" ? "form-stepper-active text-center form-stepper-list": "text-center form-stepper-list form-stepper-unfinished"} step="2" onClick={()=>{handleTab2()}}>
                                    <a className="mx-2" title='Confirm Offer'>
                                        <span className="form-stepper-circle text-muted">
                                            <span>2</span>
                                        </span>
                                        <div className="label text-muted">Confirm Offer</div>
                                    </a>
                                </li>
                                <li className={activeTab === "tab3" ? "form-stepper-active text-center form-stepper-list": "text-center form-stepper-list form-stepper-unfinished"} step="3" onClick={()=>{handleTab3()}}>
                                    <a className="mx-2" title='Sell Car'>
                                        <span className="form-stepper-circle text-muted">
                                            <span>3</span>
                                        </span>
                                        <div className="label text-muted">Sell Car</div>
                                    </a>
                                </li>
                            </ul>
                            <div className="itemForSell">
                                <div className="itemImg">
                                    <Image
                                     src="/images/car1.png" 
                                     alt="2022 Ford Ranger" 
                                     title='2022 Ford Ranger'
                                     width={350}
                                     height={185}
                                     />
                                </div>
                                <div className="itemInfo">
                                    <h2>2022 Ford Ranger</h2>
                                    <span>FWD, 4-Cyl, Standard, 2.0 Liter <span className='miles'>10,000 miles</span></span>
                                    <a href="#" title='Not a car'>Not your car?</a>
                                </div>
                                <div className="offer_factors">
                                    <h2>Your Offer Factors:</h2>
                                    <div className="off_items">
                                        <div className="off_item">
                                            <span>Cosmetic:</span>
                                            <span>-$0</span>
                                        </div>
                                        <div className="off_item">
                                            <span>Mechanical:</span>
                                            <span>-$200</span>
                                        </div>
                                        <div className="off_item">
                                            <span>Vehicle History:</span>
                                            <span>-$0</span>
                                        </div>
                                    </div>
                                    <div className="fooText" onClick={handleShowOfmodal}>
                                        <span>
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.83301 11.3359H9.16634V7.33594H7.83301V11.3359ZM8.49967 6.0026C8.68856 6.0026 8.84701 5.9386 8.97501 5.8106C9.10256 5.68305 9.16634 5.52483 9.16634 5.33594C9.16634 5.14705 9.10256 4.9886 8.97501 4.8606C8.84701 4.73305 8.68856 4.66927 8.49967 4.66927C8.31079 4.66927 8.15256 4.73305 8.02501 4.8606C7.89701 4.9886 7.83301 5.14705 7.83301 5.33594C7.83301 5.52483 7.89701 5.68305 8.02501 5.8106C8.15256 5.9386 8.31079 6.0026 8.49967 6.0026ZM8.49967 14.6693C7.57745 14.6693 6.71079 14.4942 5.89967 14.1439C5.08856 13.7942 4.38301 13.3193 3.78301 12.7193C3.18301 12.1193 2.70812 11.4137 2.35834 10.6026C2.00812 9.79149 1.83301 8.92483 1.83301 8.0026C1.83301 7.08038 2.00812 6.21372 2.35834 5.4026C2.70812 4.59149 3.18301 3.88594 3.78301 3.28594C4.38301 2.68594 5.08856 2.21083 5.89967 1.8606C6.71079 1.51083 7.57745 1.33594 8.49967 1.33594C9.4219 1.33594 10.2886 1.51083 11.0997 1.8606C11.9108 2.21083 12.6163 2.68594 13.2163 3.28594C13.8163 3.88594 14.2912 4.59149 14.641 5.4026C14.9912 6.21372 15.1663 7.08038 15.1663 8.0026C15.1663 8.92483 14.9912 9.79149 14.641 10.6026C14.2912 11.4137 13.8163 12.1193 13.2163 12.7193C12.6163 13.3193 11.9108 13.7942 11.0997 14.1439C10.2886 14.4942 9.4219 14.6693 8.49967 14.6693ZM8.49967 13.3359C9.97745 13.3359 11.2359 12.8166 12.275 11.7779C13.3137 10.7388 13.833 9.48038 13.833 8.0026C13.833 6.52483 13.3137 5.26638 12.275 4.22727C11.2359 3.1886 9.97745 2.66927 8.49967 2.66927C7.0219 2.66927 5.76367 3.1886 4.72501 4.22727C3.6859 5.26638 3.16634 6.52483 3.16634 8.0026C3.16634 9.48038 3.6859 10.7388 4.72501 11.7779C5.76367 12.8166 7.0219 13.3359 8.49967 13.3359Z" fill="#FFC000"/>
                                            </svg>
                                        </span>
                                        <span>What are these?</span>
                                    </div>
                                </div>
                                <div className="whip_cus_info">
                                    <div className="wci_in">
                                        <div className="wci_left">
                                            <Image
                                                src="/images/bulb.svg" 
                                                alt="bulb" 
                                                title='bulb'
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div className="wci_right">
                                            <p>Feel free to compare your free estimate to average trade-in values and you may see that your car might worth up to <b>14% higher than the national average!</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="come_back_later">
                                <a href="#" alt="I’ll come back later" title='I’ll come back later.' onClick={handleOpen}>I’ll come back later.</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                    {(activeTab === "tab1") && <Step1/>}
                    {(activeTab === "tab2") && <Step2b/>}
                    {(activeTab === "tab3") && <Step3/>}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default offer