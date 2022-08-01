import React from 'react'
import Faq from './Componants/Faq'
import HappyCustomersSlider from './Componants/HappyCustomersSlider'
import Header from './Componants/Header'
function index() {
  return (
    <>
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
                <div className="bnr_left_info">
                  <div className="row">
                    <div className="col-lg-6 review_col bnr_left_points">
                      <article data-toggle="modal" data-target="#activeUsers" className='reviewLt_icons'>
                            <div className="c-profile__list">
                                <span className="c-profile" username="Buster">
                                  <img src="/images/rv1.png" alt="" />
                                </span>
                                <span className="c-profile" username="George Michael">
                                  <img src="/images/rv1.png" alt="" />
                                </span>
                                <span className="c-profile" username="Gob">
                                  <img src="/images/rv1.png" alt="" />
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
                        <img src="/images/accredit.png" alt="" />
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
                        <img src="/images/video.png" alt="" />
                      </div>
                      <div className="acc_right">
                        <span>
                          Watch How It Works (1:23)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bnr_left_bottom">
                  <img src="/images/customer.webp" alt="" />
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
                          <img src="images/jd.webp" alt="" />
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
            <h2>
              <span>Hooray!  Selling Your Car is Now </span>
              <span className="text-highlight long_line">100% HASSLE-FREE!</span>
            </h2>
          </div>
          <div className="secRow row pt50">
            <div className="col-lg-4">
              <div className="hiw_item">
                  <div className="hiw_head">
                    <img src="images/hiw1.png" alt="" />
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
                    <img src="images/hiw2.png" alt="" />
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
                    <img src="images/hiw3.png" alt="" />
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
                <img src="/images/left_man_money.svg" alt="" />
              </div>
              <div className="hiw_part2">
                <img src="/images/vehicle.svg" alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-sell-to-whipflip pt100">
          <div className="easy-sell">
            <img src="/images/easy-sell.svg" alt="" />
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
                        <img src="/images/uc.svg" alt="" />
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
                        <img src="/images/bp.svg" alt="" />
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
                        <img src="/images/fgp.svg" alt="" />
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
                        <img src="/images/ts.svg" alt="" />
                      </div>
                      <div className="si-body">
                        <h2>Trusted & Safe</h2>
                        <p>No 3rd parties, we are with you all the way. Full breakdown of how your final offer was made and ways to maximize it.  No more "fuzzy" trade-in math! Meet some of our Concierges!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="happy-customers pt100 pb100">
          <div className="secHd text-center">
            <div className="stars">
              <img src="/images/stars.svg" alt="" />
            </div>
            <span>WhipFlip has earned 4.9 stars in <span><img src="/images/google.svg" alt="Goole" title='Google'/></span> certified reviews</span>
            <h2>
              <span>Thousands of </span>
              <span className="text-highlight long_line happy_customer"> HAPPY CUSTOMERS</span>
            </h2>
          </div>
          <HappyCustomersSlider/>
          <div className="moreReviews text-center">
            <span>Want to see more raving reviews? Visit our <a href="#">customers reviews page</a></span>
          </div>
      </div>
      <div className="faq">
        <div className="faqLogo text-center">
          <img src="/images/faq.svg" alt="FAQ" />
        </div>
          <div className="secHd text-center mt25">
            <h2>
              <span>Frequently Asked Questions</span>
            </h2>
          </div>
          <div className="faqWrapper">
            <Faq/>
          </div>
      </div>
    </>
  )
}

export default index