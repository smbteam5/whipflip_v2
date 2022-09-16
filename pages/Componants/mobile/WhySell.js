import React from 'react'
import { useState } from 'react'
import Header2 from '../Header2'
import HigherOfferModal from './HigherOfferModal';
import OfferFactorsModal from './OfferFactorsModal';
import StepBar from './StepBar'
import Image from 'next/image'

function WhySell() {
  const [showHigherOffer,setShowHigherOffer] = useState(false);
  const [showOfmodal,setShowOfmodal] = useState(false);
  const handleShowHigherOffer = (e) =>{
    e.preventDefault()
    setShowHigherOffer(true)
  }
  const handleCloseHigherOffer = (e) =>{
    setShowHigherOffer(false)
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
      {
        showOfmodal &&
        <OfferFactorsModal showOfmodal={showOfmodal} handleCloseOfmodal={handleCloseOfmodal} />
      }
      {
        showHigherOffer &&
        <HigherOfferModal showHigherOffer={showHigherOffer} handleCloseHigherOffer={handleCloseHigherOffer}/>
      }
        <Header2/>
        <StepBar HasBorder/>
        <div className="itemForSell itemForSellMobi acceptOffer">
        <div className="acceptOffer_top">
            <div className="at_in">
              <div className="at_head">
                <span>Your <i>FLIPPIN’</i> Awesome Offer!</span>
                <div className="at_img">
                  <Image 
                      src="/images/jd.webp" 
                      alt="jd power" 
                      title='jd power'
                      width={150}
                      height={20}
                  />
                </div>
              </div>
              <div className="at_price">
                <h1>$6,800</h1>
              </div>
              <div className="itemName">
                <h2>2022 Ford Ranger</h2>
            </div>
            <div className="itemImg">
                <Image 
                      src="/images/car1.png" 
                      alt="2022 Ford Ranger" 
                      title='2022 Ford Ranger'
                      width={400}
                      height={210}
                  />
            </div>  
            <div className="off_info">
                <p>Your offer is good for 5 days. Just let us know when and where we can come to buy your car!</p>
            </div>
              <div className="at_buttons">
                <button className='elsewhere_offer' onClick={handleShowHigherOffer}>
                  I have a higher offer elsewhere
                </button>
              </div>
            </div>
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
                <div className="fooText">
                    <span>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.83301 11.3359H9.16634V7.33594H7.83301V11.3359ZM8.49967 6.0026C8.68856 6.0026 8.84701 5.9386 8.97501 5.8106C9.10256 5.68305 9.16634 5.52483 9.16634 5.33594C9.16634 5.14705 9.10256 4.9886 8.97501 4.8606C8.84701 4.73305 8.68856 4.66927 8.49967 4.66927C8.31079 4.66927 8.15256 4.73305 8.02501 4.8606C7.89701 4.9886 7.83301 5.14705 7.83301 5.33594C7.83301 5.52483 7.89701 5.68305 8.02501 5.8106C8.15256 5.9386 8.31079 6.0026 8.49967 6.0026ZM8.49967 14.6693C7.57745 14.6693 6.71079 14.4942 5.89967 14.1439C5.08856 13.7942 4.38301 13.3193 3.78301 12.7193C3.18301 12.1193 2.70812 11.4137 2.35834 10.6026C2.00812 9.79149 1.83301 8.92483 1.83301 8.0026C1.83301 7.08038 2.00812 6.21372 2.35834 5.4026C2.70812 4.59149 3.18301 3.88594 3.78301 3.28594C4.38301 2.68594 5.08856 2.21083 5.89967 1.8606C6.71079 1.51083 7.57745 1.33594 8.49967 1.33594C9.4219 1.33594 10.2886 1.51083 11.0997 1.8606C11.9108 2.21083 12.6163 2.68594 13.2163 3.28594C13.8163 3.88594 14.2912 4.59149 14.641 5.4026C14.9912 6.21372 15.1663 7.08038 15.1663 8.0026C15.1663 8.92483 14.9912 9.79149 14.641 10.6026C14.2912 11.4137 13.8163 12.1193 13.2163 12.7193C12.6163 13.3193 11.9108 13.7942 11.0997 14.1439C10.2886 14.4942 9.4219 14.6693 8.49967 14.6693ZM8.49967 13.3359C9.97745 13.3359 11.2359 12.8166 12.275 11.7779C13.3137 10.7388 13.833 9.48038 13.833 8.0026C13.833 6.52483 13.3137 5.26638 12.275 4.22727C11.2359 3.1886 9.97745 2.66927 8.49967 2.66927C7.0219 2.66927 5.76367 3.1886 4.72501 4.22727C3.6859 5.26638 3.16634 6.52483 3.16634 8.0026C3.16634 9.48038 3.6859 10.7388 4.72501 11.7779C5.76367 12.8166 7.0219 13.3359 8.49967 13.3359Z" fill="#FFC000"/>
                        </svg>
                    </span>
                    <span onClick={handleShowOfmodal}>What are these?</span>
                </div>
            </div>
            <div className="whip_cus_info">
                <div className="wci_in">
                    <div className="wci_left">
                        <Image 
                          src="/images/bulb.svg" 
                          alt="Bulb" 
                          title='Bulb'
                          width={20}
                          height={20}
                        />
                    </div>
                    <div className="wci_right">
                        <p><b>96% of WhipFlip customers</b> who scheduled an appointment to sell happily sold their cars to us! Ready to sell? We are ready to buy. No time wasted by either party. We stand behind our words!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="acceptOffer p-0">
          <div className="acceptOffer_center">
            <div className="ac_in">
              <h2>Why Sell to Us?</h2>
              <div className="why_sell_points why_sell_wrp">
                <div className="wsp_item">
                  <div className="wsp_item_in">
                    <div className="wsp_left">
                      <div className="wsp_img_wrap">
                        <Image 
                            src="/images/convenience.svg" 
                            alt="convenience" 
                            title='convenience'
                            width={100}
                            height={100}
                          />
                      </div>
                    </div>
                    <div className="wsp_right">
                      <h2>Ultimate Convenience!</h2>
                      <p>We come to you to pay and pick up...on your time! No more wasted time or stress messing with scammers, tire-kickers, or dealers!</p>
                    </div>
                  </div>
                </div>
                <div className="wsp_item">
                  <div className="wsp_item_in">
                    <div className="wsp_left">
                    <div className="wsp_img_wrap">
                      <Image 
                          src="/images/best-offer.svg" 
                          alt="Best Offer" 
                          title='Best Offer'
                          width={100}
                          height={100}
                        />
                        </div>
                    </div>
                    <div className="wsp_right">
                      <h2>Best Offer!</h2>
                      <p>Our offers typically are <b>$762 higher </b> than trade-in and beat most car buying companies. We’re trusted by the best in the industry, JD Power!</p>
                    </div>
                  </div>
                </div>
                <div className="wsp_item">
                  <div className="wsp_item_in">
                    <div className="wsp_left">
                    <div className="wsp_img_wrap">
                      <Image 
                          src="/images/safe.svg" 
                          alt="Safe" 
                          title='Safe'
                          width={100}
                          height={100}
                        />
                        </div>
                    </div>
                    <div className="wsp_right">
                      <h2>Safe and Smooth!</h2>
                      <p>Guaranteed payment on the spot with all proper paperwork completed in only a few minutes!
Payment is a company check from Wells Fargo, guaranteed to clear.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="WhySellFoo">
            <div className="acceptOffer_foo">
                <div className="acceptOffer_foo_left">
                <div className="acceptOffer_foo_left_in">
                    <span>
                    5-Star
                    <span className='googText'>
                        <Image 
                          src="/images/google.svg" 
                          alt="Goole" 
                          title='Goole'
                          width={70}
                          height={30}
                        />
                    </span>
                    Rated Service
                </span>
                <div className="stars">
                    <svg width="137" height="24" viewBox="0 0 137 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 17.27L18.43 21L16.79 13.97L22.25 9.24L15.06 8.63L12.25 2L9.44 8.63L2.25 9.24L7.71 13.97L6.07 21L12.25 17.27Z" fill="#FFC000"/>
                    <path d="M40.25 17.27L46.43 21L44.79 13.97L50.25 9.24L43.06 8.63L40.25 2L37.44 8.63L30.25 9.24L35.71 13.97L34.07 21L40.25 17.27Z" fill="#FFC000"/>
                    <path d="M68.25 17.27L74.43 21L72.79 13.97L78.25 9.24L71.06 8.63L68.25 2L65.44 8.63L58.25 9.24L63.71 13.97L62.07 21L68.25 17.27Z" fill="#FFC000"/>
                    <path d="M96.25 17.27L102.43 21L100.79 13.97L106.25 9.24L99.06 8.63L96.25 2L93.44 8.63L86.25 9.24L91.71 13.97L90.07 21L96.25 17.27Z" fill="#FFC000"/>
                    <path d="M124.25 17.27L130.43 21L128.79 13.97L134.25 9.24L127.06 8.63L124.25 2L121.44 8.63L114.25 9.24L119.71 13.97L118.07 21L124.25 17.27Z" fill="#FFC000"/>
                    </svg>
                </div>
                <div className="af_foo_dec">
                    <p><span>Our customers RAVE about us!</span> <span>Check out our <a href="#" title='awesome reviews'>awesome reviews</a></span></p>
                    </div>
                </div>
                </div>
                <div className="acceptOffer_foo_right">
                <div className="acceptOffer_foo_right_in">
                    <div className="acceptOffer_rating">
                    <div className="acc_left">
                      <Image 
                          src="/images/acc-rating.svg" 
                          alt="accredit" 
                          title='accredit'
                          width={400}
                          height={50}
                        />
                      </div>
                    </div>
                    <div className="poweredBy">
                      <Image 
                        src="/images/jd.webp" 
                        alt="jd" 
                        title='jd'
                        width={200}
                        height={25}
                      />
                    </div>
                    <div className="af_foo_dec">
                    <p>We are trusted by the biggest and best names in the industry!</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="fyi_for_ao">
                <h2>Need to think about it?</h2>
                <p>No worries! Your offer is good for 5 days. Simply revisit <a href="#" title='whipflip'>WhipFlip.com</a> to retrieve your offer or check your email to see our offer confirmation.</p>
            </div>
            <div className="click_acceptOffer">
                <button className="accept_off_btn">Accept Offer &amp; Sell</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WhySell