import React from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'
import Image from 'next/image'
function ConfirmOffer() {
  return (
    <>
        <Header2/>
        <StepBar HasBorder/>
        <div className="mobConfirmOff">
            <div className="container">
                <div className="confOffBody">
                    <h1>Your <i>FLIPPIN’</i> Awesome Offer!</h1>
                    <div className="ioCard">
                        <h2>Initial offer: $7,000</h2>     
                        <div className="offerProduct-mobi row">
                            <div className="ofp_left col-4 p-0">
                                <Image
                                    src="/images/car1.png"
                                    alt="car"
                                    title='car'
                                    width={450}
                                    height={240}
                                />
                            </div>
                            <div className="ofp_right col-8">
                                <h3>2022 Ford Ranger</h3>
                                <span>2.3L EcoBoost® I4 engine</span>
                            </div>
                        </div>  
                        <div className="jd_op_img">
                            <Image
                                src="/images/jd.webp"
                                alt="jd power"
                                title='jd power'
                                width={150}
                                height={20}
                            />
                        </div>             
                    </div>
                    <div className="custo_info">
                        <p>We’d love to buy your car!</p>
                        <p>You’re just one quick step away from confirming your offer.</p>
                    </div>
                    <button className="confirm_off_btn"><span>Confirm My Offer</span> 
                        <span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 20.25L11.075 18.85L16.675 13.25H4.5V11.25H16.675L11.075 5.65L12.5 4.25L20.5 12.25L12.5 20.25Z" fill="#353442"/></svg>
                        </span>
                    </button>
                    <a href="#" className='custo_info-aref'>
                        I’ll come back later
                    </a>
                    <div className="whip_cus_info">
                        <div className="wci_in wci-mob-in">
                            <div className="wci_left">
                                <Image
                                    src="/images/bulb.svg"
                                    alt="jd power"
                                    title='jd power'
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="wci_right">
                                <p><b>96% of WhipFlip customers</b> who scheduled an appointment to sell happily sold their cars to us! Ready to sell? We are ready to buy. No time wasted by either party. We stand behind our words!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ConfirmOffer