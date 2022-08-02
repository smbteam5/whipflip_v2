import React from 'react'
import Faq from './Componants/Faq'
import HappyCustomersSlider from './Componants/HappyCustomersSlider'
import Header from './Componants/Header'
function index() {
  return (
    <>
      <div className="cutomerCare">
        <div className="cc_left">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#FFC000"/>
            <path d="M26.625 27.5C24.8333 27.5 23.0869 27.1006 21.3858 26.3017C19.6842 25.5033 18.1772 24.4478 16.865 23.135C15.5522 21.8228 14.4967 20.3158 13.6983 18.6142C12.8994 16.9131 12.5 15.1667 12.5 13.375C12.5 13.125 12.5833 12.9167 12.75 12.75C12.9167 12.5833 13.125 12.5 13.375 12.5H16.75C16.9444 12.5 17.1181 12.5625 17.2708 12.6875C17.4236 12.8125 17.5139 12.9722 17.5417 13.1667L18.0833 16.0833C18.1111 16.2778 18.1078 16.4547 18.0733 16.6142C18.0383 16.7742 17.9583 16.9167 17.8333 17.0417L15.8125 19.0833C16.3958 20.0833 17.1286 21.0208 18.0108 21.8958C18.8925 22.7708 19.8611 23.5278 20.9167 24.1667L22.875 22.2083C23 22.0833 23.1633 21.9894 23.365 21.9267C23.5661 21.8644 23.7639 21.8472 23.9583 21.875L26.8333 22.4583C27.0278 22.5 27.1875 22.5936 27.3125 22.7392C27.4375 22.8853 27.5 23.0556 27.5 23.25V26.625C27.5 26.875 27.4167 27.0833 27.25 27.25C27.0833 27.4167 26.875 27.5 26.625 27.5ZM15.0208 17.5L16.3958 16.125L16.0417 14.1667H14.1875C14.2569 14.7361 14.3542 15.2986 14.4792 15.8542C14.6042 16.4097 14.7847 16.9583 15.0208 17.5ZM25.8333 25.7917V23.9583L23.875 23.5625L22.4792 24.9583C23.0208 25.1944 23.5731 25.3819 24.1358 25.5208C24.6981 25.6597 25.2639 25.75 25.8333 25.7917Z" fill="#353442"/>
          </svg>
        </div>
        <div className="cc_right desk-show">
          <div className="cc_dec">
            <p>Talk to a Real Person:</p>
            <h2>(888) 349-3189</h2>
          </div>
        </div>
      </div>
      <div className="whipflip-header">
        <Header/>
      </div>
      <div className="home-banner">
        <div className="container h100">
          <div className="hb_wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="bnr_left">
                <div className="bnr_left_head">
                  <h1><span>The <span className='text-highlight'>Best</span> Way to</span> <span>Sell Your Car - </span><span>Period!</span></h1>
                  <span>We come to you paid on the spot</span>
                </div>
                <div className="bnr_left_info desk-show">
                  <div className="row">
                    <div className="col-lg-6 review_col bnr_left_points">
                      <article data-toggle="modal" data-target="#activeUsers" className='reviewLt_icons'>
                            <div className="c-profile__list">
                                <span className="c-profile" username="Buster">
                                  <img src="/images/rv1.png" alt="profile" title='profile'/>
                                </span>
                                <span className="c-profile" username="George Michael">
                                  <img src="/images/rv1.png" alt="profile" title='profile' />
                                </span>
                                <span className="c-profile" username="Gob">
                                  <img src="/images/rv1.png" alt="profile" title='profile' />
                                </span>
                            </div>
                      </article>
                      <div className="reviewRt_info">
                        <ul>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                        </ul>
                        <div className="revDetail">
                          <span>4.9/5 in <b>Google</b> reviews</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 accredit_col p-0 bnr_left_points">
                      <div className="acc_left">
                        <img src="/images/accredit.png" alt="accredit" title='accredit' />
                      </div>
                      <div className="acc_right">
                        <span>
                          BBB Rating: A
                        </span>
                        <span>
                          as of 5/11/2022
                        </span>
                        <span>
                          click for profile</span>
                      </div>
                    </div>
                    <div className="col-lg-12 video_col bnr_left_points">
                      <div className="video_left">
                        <img src="/images/video.png"  alt="video" title='video'  />
                      </div>
                      <div className="acc_right">
                        <span>
                          Watch How It Works (1:23)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bnr_left_bottom desk-show">
                  <img src="/images/customer.webp" alt="customer" title='customer' />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bnr_right">
                <div class="row justify-content-center">
                  <div class="col-md-12">
                    <div class="card card-outline-secondary home-form">
                      <div className="form_top">
                        <div className="poweredBy">
                          <img src="images/jd.webp" alt="poweredBy" title='poweredBy' />
                        </div>
                        <div className="form_head">
                          <h2>Get a REAL offer in seconds!</h2>
                          <p>Enter your vehicles details:</p>
                        </div>
                      </div>
                      <div class="card-body">
                        <form autocomplete="off" class="form" role="form">                  
                          <div class="form-group row">
                            <div class="col-lg-12">
                              <select class="form-control" id="user_time_zone" size="0">
                                <option value="Hawaii">
                                  Year
                                </option>
                                <option value="Alaska">
                                  (GMT-09:00) Alaska
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="form-group row">
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
                          <div class="form-group row">
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
                          <div class="form-group row">
                            <div class="col-lg-12">
                              <select class="form-control" id="user_time_zone" size="0">
                                <option value="Hawaii">
                                  Trim/Series
                                </option>
                                <option value="Alaska">
                                  (GMT-09:00) Alaska
                                </option>
                              </select>
                              <div className="toKnow">
                                <span>
                                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.3335 12.3335H8.66683V8.3335H7.3335V12.3335ZM8.00016 7.00016C8.18905 7.00016 8.3475 6.93616 8.4755 6.80816C8.60305 6.68061 8.66683 6.52239 8.66683 6.3335C8.66683 6.14461 8.60305 5.98616 8.4755 5.85816C8.3475 5.73061 8.18905 5.66683 8.00016 5.66683C7.81127 5.66683 7.65305 5.73061 7.5255 5.85816C7.3975 5.98616 7.3335 6.14461 7.3335 6.3335C7.3335 6.52239 7.3975 6.68061 7.5255 6.80816C7.65305 6.93616 7.81127 7.00016 8.00016 7.00016ZM8.00016 15.6668C7.07794 15.6668 6.21127 15.4917 5.40016 15.1415C4.58905 14.7917 3.8835 14.3168 3.2835 13.7168C2.6835 13.1168 2.20861 12.4113 1.85883 11.6002C1.50861 10.7891 1.3335 9.92239 1.3335 9.00016C1.3335 8.07794 1.50861 7.21127 1.85883 6.40016C2.20861 5.58905 2.6835 4.8835 3.2835 4.2835C3.8835 3.6835 4.58905 3.20838 5.40016 2.85816C6.21127 2.50838 7.07794 2.3335 8.00016 2.3335C8.92239 2.3335 9.78905 2.50838 10.6002 2.85816C11.4113 3.20838 12.1168 3.6835 12.7168 4.2835C13.3168 4.8835 13.7917 5.58905 14.1415 6.40016C14.4917 7.21127 14.6668 8.07794 14.6668 9.00016C14.6668 9.92239 14.4917 10.7891 14.1415 11.6002C13.7917 12.4113 13.3168 13.1168 12.7168 13.7168C12.1168 14.3168 11.4113 14.7917 10.6002 15.1415C9.78905 15.4917 8.92239 15.6668 8.00016 15.6668ZM8.00016 14.3335C9.47794 14.3335 10.7364 13.8142 11.7755 12.7755C12.8142 11.7364 13.3335 10.4779 13.3335 9.00016C13.3335 7.52239 12.8142 6.26394 11.7755 5.22483C10.7364 4.18616 9.47794 3.66683 8.00016 3.66683C6.52239 3.66683 5.26416 4.18616 4.2255 5.22483C3.18638 6.26394 2.66683 7.52239 2.66683 9.00016C2.66683 10.4779 3.18638 11.7364 4.2255 12.7755C5.26416 13.8142 6.52239 14.3335 8.00016 14.3335Z" fill="#8D8C9D"/>
                                    </svg>                                    
                                  </span>
                                  <span>
                                    What is a Trim?
                                  </span>
                              </div>
                            </div>
                          </div>
                          <div class="form-group row">
                            <div class="col-lg-12">
                              <input class="btn btn-secondary getOfferBtn" type="reset" value="Get Instant Offer" />
                            </div>
                            <div className="col-lg-12 already_offer text-center">
                              <p>Already have an offer?  <span>Retrieve it here</span></p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bnr_left_info mob-show">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6 col-6 review_col bnr_left_points bnr_mob_btm_pts">
                      <div className="reviewRt_info">
                        <ul>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                          <li>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC000"/></svg>
                          </li>
                        </ul>
                        <div className="revDetail">
                          <span>4.9/5 in <b>Google</b> reviews</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-6 accredit_col bnr_left_points bnr_mob_btm_pts">
                      <div className="acc_left">
                        <img src="/images/accredit.png" alt="accredit" title='accredit' />
                      </div>
                      <div className="acc_right">
                        <span>
                          BBB Rating: A
                        </span>
                        <span>
                          as of 5/11/2022
                        </span>
                        <span>
                          click for profile</span>
                      </div>
                    </div>
                    <div className="col-lg-12 video_col bnr_left_points bnr_mob_btm_pts">
                      <div className="video_left">
                        <img src="/images/video.png"  alt="video" title='video'  />
                      </div>
                      <div className="acc_right">
                        <span>
                          Watch How It Works (1:23)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bnr_left_bottom mob-show bnr_left_bottom_mobile">
                    <img src="/images/customer.webp" alt="customer" title='customer' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100">
        <div className="container">
          <div className="secHd text-center">
            <span>How It Works</span>
            <h2 className='desk-show'>
              <span>Hooray!  Selling Your Car is Now </span>
              <span className="text-highlight long_line">100% HASSLE-FREE!</span>
            </h2>
            <h2 className='mob-show'>
              <span><span>Hooray! </span> <span>Selling Your Car</span> is Now 100%</span>
              <span className="text-highlight long_line"> HASSLE-FREE!</span>
            </h2>
          </div>
          <div className="secRow row pt50">
            <div className="col-lg-4">
              <div className="hiw_item">
                  <div className="hiw_head">
                    <img src="images/hiw1.png" alt="Get Instant Offer" title='Get Instant Offer'/>
                  </div>
                  <div className="hiw_body">
                    <h2>Get Instant Offer</h2>
                    <p>Enter your vehicle’s basic details and get an idea of what your vehicle is worth in seconds!</p>
                  </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hiw_item">
                  <div className="hiw_head">
                    <img src="images/hiw2.png" alt="Confirm Offer" title='Confirm Offer'/>
                  </div>
                  <div className="hiw_body">
                    <h2>Confirm Offer</h2>
                    <p>Snap a couple pics using our super-simple photo tool or enter basic condition details to verify your offer!</p>
                  </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hiw_item">
                  <div className="hiw_head">
                    <img src="images/hiw3.png" alt="SOLD" title='SOLD'/>
                  </div>
                  <div className="hiw_body">
                    <h2>SOLD!</h2>
                    <p>Accept our awesome offer and set a time & place to sell. We’re on our way to buy. That’s it!</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
            <div className="hiw">
              <div className="hiw_part1">
                <img src="/images/left_man_money.svg" alt="money" title='money'/>
              </div>
              <div className="hiw_part2">
                <img src="/images/vehicle.svg" alt="vehicle" title='vehicle'/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-sell-to-whipflip pt100">
          <div className="easy-sell desk-show">
            <img src="/images/easy-sell.svg" alt="easy sell" title='easy sell'/>
          </div>
          <div className="container">
            <div className="secHd text-left">
              <h2>
                <span>Why Sell to WhipFlip?</span>
              </h2>
              <span>WhipFlip is here to put an end to the inconvenience, time-waste, and risk you face when selling one of the most expensive and difficult assets you own….A CAR!</span>
            </div>
            <div className="row wstwRow">
              <div className="col-lg-7">
                <div className="row servicesRow">
                  <div className="col-lg-6 siCol">
                    <div className="service-item">
                      <div className="si-head">
                        <img src="/images/uc.svg" alt="Ultimate Convenience" title='Ultimate Convenience'/>
                      </div>
                      <div className="si-body">
                        <h2>Ultimate Convenience</h2>
                        <p>No more traveling to dealers and months spent wasting time with tire-kickers.  We come to you.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 siCol">
                    <div className="service-item">
                    <div className="si-head">
                        <img src="/images/bp.svg" alt="The Best Price" title='The Best Price'/>
                      </div>
                      <div className="si-body">
                        <h2>The Best Price</h2>
                        <p>We are digital and pass our savings onto you.  Our real-time pricing engine ensures you get a great market price.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 siCol">
                    <div className="service-item">
                    <div className="si-head">
                        <img src="/images/fgp.svg" alt="Fast & Guaranteed Payment" title='Fast & Guaranteed Payment' />
                      </div>
                      <div className="si-body">
                        <h2>Fast & Guaranteed Payment</h2>
                        <p>Sell and get paid as soon as today in 3 quick and easy steps! Guaranteed payment on the spot before we take the keys!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 siCol">
                    <div className="service-item">
                      <div className="si-head">
                        <img src="/images/ts.svg" alt="Trusted & Saf" title='Trusted & Saf'/>
                      </div>
                      <div className="si-body">
                        <h2>Trusted & Safe</h2>
                        <p>No 3rd parties, we are with you all the way. Full breakdown of how your final offer was made and ways to maximize it.  No more "fuzzy" trade-in math! Meet some of our Concierges!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mob-easy-sell">
              <div className="easy-sell-mob mob-show">
                <img src="/images/easy-sell.svg" alt="easy sell" title='easy sell'/>
              </div>
              </div>
            </div>
          </div>
      </div>
      <div className="happy-customers pt100 pb100">
          <div className="secHd text-center">
            <div className="stars">
              <img src="/images/stars.svg" alt="stars" title='stars'/>
            </div>
            <span>WhipFlip has earned 4.9 stars in <span><img src="/images/google.svg" alt="Goole" title='Google'/></span> certified reviews</span>
            <h2 className='desk-show'>
              <span>Thousands of </span>
              <span className="text-highlight long_line happy_customer"> HAPPY CUSTOMERS</span>
            </h2>
            <h2 className='mob-show'>
              <span>Thousands of </span>
              <span className="text-highlight long_line happy_customer"> HAPPY</span>
              <span className="text-highlight long_line happy_customer">CUSTOMERS</span>
            </h2>
          </div>
          <HappyCustomersSlider/>
          <div className="moreReviews text-center">
            <span>Want to see more raving reviews? Visit our <a href="#">customers reviews page</a></span>
          </div>
      </div>
      <div className="faq">
        <div className="faqLogo text-center">
          <img src="/images/faq.svg" alt="FAQ" title='faq'/>
        </div>
          <div className="secHd text-center mt25">
            <h2>
              <span>Frequently Asked Questions</span>
            </h2>
          </div>
          <div className="faqWrapper">
            <div className="container">
              <Faq/>
              <div className="moreReviews text-center moreLoad">
                <span>Looking for more? Visit our  <a href="#">FAQs page</a> or  <a href="#">Contact us</a></span>
              </div>
            </div>
          </div>
      </div>
      <div className="ready-to-sell">
        <div className="container h100">
          <div className="row h100">
            <div className="col-lg-7 align-self-center">
              <div className="relHd">
                <h2>Ready to Sell?</h2>
                <p>We are ready to buy now, at your door, and on your time!</p>
                <button className='sell_car_btn'>Sell Your Car Now!</button>
              </div>              
            </div>
            <div className="col-lg-5 align-self-end">
              <div className="rts-rtImg">
                <img src="/images/sell_to_customer.png" alt="Ready to Sell" title='Ready to Sell'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sell-car-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 colsciLeft">
              <div className="sciLeft">
                <h2>There has to be a better way to sell my car!</h2>
                <p>The process of selling a car still remains very difficult and I never understood why with all of the great technology we have in the modern world.  We are consumers too that have sold a few cars ourselves and went though the same struggles you may have faced with wasting precious time with tire-kickers, scammers, and endless travel to receive lowball trade-in offers.</p> 
                <p>So our thought was simple and our mission was clear – What if there was a way anyone, anywhere could sell their vehicle as fast and as easy as ordering a pizza from a mobile device? </p> <p>No stress, no travel, no risk, no inconvenience.  Well, I believe we have created it and it’s here at your fingertips.Go ahead and give us a try! </p>
                <p>We welcome you join the thousands of other customers who deserved a much better way to sell by using WhipFlip.</p>
              </div>
              <div className="arrowPoint desk-show">
                <svg width="65" height="57" viewBox="0 0 65 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.5 55C63.5 55 31.0635 23 2.5 23V2C36.3889 2 63.5 55 63.5 55Z" fill="white" stroke="#8AB0D7" stroke-width="3" stroke-linejoin="round"/>
                  <rect y="3.5" width="4" height="18" fill="white"/>
                </svg>                
              </div>
              <div className="arrowPointMob mob-show">
                <svg width="56" height="65" viewBox="0 0 56 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M54.5 63.5C54.5 63.5 22.5 31.0635 22.5 2.5L1.5 2.5C1.5 36.3889 54.5 63.5 54.5 63.5Z" fill="white" stroke="#8AB0D7" stroke-width="3" stroke-linejoin="round"/>
                  <rect x="3" y="4.5" width="4" height="18" transform="rotate(-90 3 4.5)" fill="white"/>
                </svg>
              </div>
            </div>
            <div className="col-lg-2 colsciRight">
              <div className="sciRight">
                <div className="scir_hd">
                  <img src="/images/prof.png" alt="profile" title='profile'/>
                </div>
                <div className="profDetail">
                  <h3>Roger Clappe</h3>
                  <p>Founder and CEO at WhipFlip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className="container">
          <div className="row fooRow">
            <div className="col-lg-3 col-6 fooCol">
              <div className="fooColIn">
                <h2>About Whipflip</h2>
                <ul>
                  <li>About Us</li>
                  <li>Customer Reviews</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6 fooCol">
              <div className="fooColIn">
                <h2>About Whipflip</h2>
                <ul>
                  <li>About Us</li>
                  <li>Customer Reviews</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6 fooCol">
              <div className="fooColIn">
                <h2>About Whipflip</h2>
                <ul>
                  <li>About Us</li>
                  <li>Customer Reviews</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6 fooCol">
              <div className="fooColIn">
                <h2>About Whipflip</h2>
                <ul>
                  <li>About Us</li>
                  <li>Customer Reviews</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className="fooColIn">
                <h2>Follow us</h2>
                <ul className='ss-icons'>
                  <li>
                    <span>
                      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 2.5585C23.1075 2.95 22.1565 3.2095 21.165 3.3355C22.185 2.7265 22.9635 1.7695 23.3295 0.616C22.3785 1.183 21.3285 1.5835 20.2095 1.807C19.3065 0.8455 18.0195 0.25 16.6155 0.25C13.8915 0.25 11.6985 2.461 11.6985 5.1715C11.6985 5.5615 11.7315 5.9365 11.8125 6.2935C7.722 6.094 4.1025 4.1335 1.671 1.147C1.2465 1.8835 0.9975 2.7265 0.9975 3.634C0.9975 5.338 1.875 6.8485 3.183 7.723C2.3925 7.708 1.617 7.4785 0.96 7.117C0.96 7.132 0.96 7.1515 0.96 7.171C0.96 9.562 2.6655 11.548 4.902 12.0055C4.5015 12.115 4.065 12.1675 3.612 12.1675C3.297 12.1675 2.979 12.1495 2.6805 12.0835C3.318 14.032 5.127 15.4645 7.278 15.511C5.604 16.8205 3.4785 17.6095 1.1775 17.6095C0.774 17.6095 0.387 17.5915 0 17.542C2.1795 18.9475 4.7625 19.75 7.548 19.75C16.602 19.75 21.552 12.25 21.552 5.749C21.552 5.5315 21.5445 5.3215 21.534 5.113C22.5105 4.42 23.331 3.5545 24 2.5585Z" fill="#353442"/>
                      </svg>
                    </span>
                  </li>
                  <li>
                  <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z" fill="#353442"/>
                    </svg>
                  </span>
                  </li>
                  <li>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 0C2.98533 0 0 2.98533 0 6.66667V17.3333C0 21.0147 2.98533 24 6.66667 24H17.3333C21.0147 24 24 21.0147 24 17.3333V6.66667C24 2.98533 21.0147 0 17.3333 0H6.66667ZM20 2.66667C20.736 2.66667 21.3333 3.264 21.3333 4C21.3333 4.736 20.736 5.33333 20 5.33333C19.264 5.33333 18.6667 4.736 18.6667 4C18.6667 3.264 19.264 2.66667 20 2.66667ZM12 5.33333C15.6813 5.33333 18.6667 8.31867 18.6667 12C18.6667 15.6813 15.6813 18.6667 12 18.6667C8.31867 18.6667 5.33333 15.6813 5.33333 12C5.33333 8.31867 8.31867 5.33333 12 5.33333ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z" fill="#353442"/>
                    </svg>
                    </span>
                  </li>
                  <li>
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2634_129257)">
                        <path d="M2.91049 1C1.15063 1 0 2.15561 0 3.67451C0 5.15986 1.11635 6.34843 2.84296 6.34843H2.87636C4.67064 6.34843 5.78729 5.15986 5.78729 3.67451C5.75374 2.15561 4.67064 1 2.91049 1Z" fill="#353442"/>
                        <path d="M0.304101 8.46176H5.44893V23.9402H0.304101V8.46176Z" fill="#353442"/>
                        <path d="M18.077 8.09848C15.3016 8.09848 13.4405 10.7065 13.4405 10.7065V8.46176H8.29555V23.9402H13.4402V15.2964C13.4402 14.8337 13.4738 14.3717 13.6097 14.0408C13.9816 13.1167 14.828 12.1595 16.2494 12.1595C18.111 12.1595 18.8556 13.5789 18.8556 15.6597V23.9402H24V15.0651C24 10.3108 21.4617 8.09848 18.077 8.09848Z" fill="#353442"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2634_129257">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fooCopyRight">
            <div className="fcl">
              <span>Whipflip © 2022 WhipFlip, Inc. All rights reserved.</span>
            </div>
            <div className="fcr">
              <div className="fooIcons">
                <img src="/images/foo2.png" alt="accredited business" title='accredited business'/>
                <img src="/images/foo1.png" alt="chamber of commerce" title='chamber of commerce'/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default index