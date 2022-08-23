import React,{useState} from 'react'
import HigherOfferModalWeb from './HigherOfferModalWeb';
import Step3b from './Step3b';

function Step3() {
  const [showFrm, setShowFrm] = useState(false);
    const [showHigherOffer,setShowHigherOffer] = useState(false);
    const handleShowHigherOffer = (e) =>{
      e.preventDefault()
      setShowHigherOffer(true)
    }
    const handleCloseHigherOffer = (e) =>{
      setShowHigherOffer(false)
    }
    const handleShowFrm = () => {
      setShowFrm(true);
    };
  return (
    <div>
      {
            showHigherOffer &&
            <HigherOfferModalWeb showHigherOffer={showHigherOffer} handleCloseHigherOffer={handleCloseHigherOffer}/>
      }
      {
        !showFrm &&
        <div className="acceptOffer">
          <div className="acceptOffer_top">
            <div className="at_in">
              <div className="at_head">
                <span>Your <i>FLIPPIN’</i> Awesome Offer!</span>
                <div className="at_img">
                  <img src="/images/jd.webp" alt="jd power" title='jd power'/>
                </div>
              </div>
              <div className="at_price">
                <h1>$6,800</h1>
              </div>
              <div className="at_dec">
                <p>Your offer is good for 5 days. Just let us know when and where we can come to buy your car!</p>
              </div>
              <div className="at_buttons">
                <button className='elsewhere_offer'  onClick={handleShowHigherOffer}>
                  I have a higher offer elsewhere
                </button>
                <button className='accept_off_btn' onClick={handleShowFrm}>
                  Accept Offer & Sell
                </button>
              </div>
            </div>
          </div>
          <div className="acceptOffer_center">
            <div className="ac_in">
              <h2>Why Sell to Us?</h2>
              <div className="why_sell_points">
                <div className="wsp_item">
                  <div className="wsp_item_in">
                    <div className="wsp_left">
                      <img src="/images/convenience.svg" alt="" />
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
                      <img src="/images/best-offer.svg" alt="" />
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
                      <img src="/images/safe.svg" alt="" />
                    </div>
                    <div className="wsp_right">
                      <h2>Ultimate Convenience!</h2>
                      <p>We come to you to pay and pick up...on your time! No more wasted time or stress messing with scammers, tire-kickers, or dealers!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="acceptOffer_foo">
            <div className="acceptOffer_foo_left">
              <div className="acceptOffer_foo_left_in">
                <span>
                  5-Star
                  <span><img src="/images/google.svg" alt="Goole" title="Google" /></span>
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
                  <p>Our customers RAVE about us! Check out our <a href="#" title='awesome reviews'>awesome reviews</a></p>
                </div>
              </div>
            </div>
            <div className="acceptOffer_foo_right">
              <div className="acceptOffer_foo_right_in">
                <div class="acceptOffer_rating">
                  <div class="acc_left"><img src="/images/acc-rating.svg" alt="accredit" title="accredit" /></div>
                </div>
                <div className="poweredBy">
                  <img src="/images/jd.webp" alt="jd power" title='jd power'/>
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
        </div>
      }
      {
        showFrm &&
        <div className="offer_final_form">
          <Step3b/>
        </div>
      }
    </div>
  )
}

export default Step3