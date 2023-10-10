import React from "react";
import Faq from "./Componants/Faq";
import Footer from "./Componants/Footer";
import HappyCustomersSlider from "./Componants/HappyCustomersSlider";
import Header from "./Componants/Header";
import Link from "next/link";
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function seo2() {
  return (
    <>
      <div className="whipflip-header">
        <Header />
      </div>
      <div className="seo_banner seo_banner2">
        <div className="row seo-row seo-row2 m-0">
            <div className="col-lg-8 p-0 seo_banner_left h-100">
                <img src="/images/seo-banner.png" alt="" />
                <div className="bnr_rt_wrap bnr_lt_wrap">
                    <div className="seo_bnr_hd">
                        <span>Need To Sell Your </span>
                        <h1>Toyota Sequoia?</h1>
                    </div>
                    <div className="bnr_dec">
                        <span>Selling your car will now be 100% hassle-free with WhipFlip.</span>
                        <p> Get an instant offer in minutes on your Toyota Sequoia book and appointment to sell. Our friendly car concierge will come to your driveway to pay & pick up your car for free! Ready to sell?</p>
                        <button>
                            <span><svg width="21.177" height="16.639" viewBox="0 0 21.177 16.639"><path id="go-svgrepo-com" d="M15.927,21.2l6.807-6.807a1.512,1.512,0,0,0,0-2.139L15.927,5.443a1.512,1.512,0,1,0-2.139,2.139l4.225,4.225H3.513a1.513,1.513,0,0,0,0,3.025h14.5l-4.225,4.225A1.512,1.512,0,0,0,15.927,21.2Z" transform="translate(-2 -5)" fill="#272424"/></svg></span>
                            Get Instant Offer
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 align-self-center seo_banner_rt">
                  <div className="row justify-content-center m-0">
                    <div className="col-md-12 p-0">
                      <div className="card card-outline-secondary home-form home-form--seo">
                      <div className="get_offer_banner">
                            <div className="form_top">
                              <div className="poweredBy">
                                <Image
                                  src="/images/jd.svg"
                                  alt="poweredBy"
                                  title="poweredBy"
                                  width={180}
                                  height={20}
                                />
                              </div>
                              <div className="form_head">
                                <h2>Get a REAL offer in seconds!</h2>
                                <p>Enter your vehicles details:</p>
                              </div>
                            </div>
                            <div className="card-body">
                              <form
                                autoComplete="off"
                                className="form"
                                role="form"
                              >
                                <div className="form-group row">
                                  <div className="col-lg-12">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Year</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <div className="col-lg-12">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Make</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <div className="col-lg-12">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Model</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <div className="col-lg-12">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">
                                        Trim/Series
                                      </option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                    <div className="toKnow">
                                      <span>
                                        <svg
                                          width="16"
                                          height="18"
                                          viewBox="0 0 16 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M7.3335 12.3335H8.66683V8.3335H7.3335V12.3335ZM8.00016 7.00016C8.18905 7.00016 8.3475 6.93616 8.4755 6.80816C8.60305 6.68061 8.66683 6.52239 8.66683 6.3335C8.66683 6.14461 8.60305 5.98616 8.4755 5.85816C8.3475 5.73061 8.18905 5.66683 8.00016 5.66683C7.81127 5.66683 7.65305 5.73061 7.5255 5.85816C7.3975 5.98616 7.3335 6.14461 7.3335 6.3335C7.3335 6.52239 7.3975 6.68061 7.5255 6.80816C7.65305 6.93616 7.81127 7.00016 8.00016 7.00016ZM8.00016 15.6668C7.07794 15.6668 6.21127 15.4917 5.40016 15.1415C4.58905 14.7917 3.8835 14.3168 3.2835 13.7168C2.6835 13.1168 2.20861 12.4113 1.85883 11.6002C1.50861 10.7891 1.3335 9.92239 1.3335 9.00016C1.3335 8.07794 1.50861 7.21127 1.85883 6.40016C2.20861 5.58905 2.6835 4.8835 3.2835 4.2835C3.8835 3.6835 4.58905 3.20838 5.40016 2.85816C6.21127 2.50838 7.07794 2.3335 8.00016 2.3335C8.92239 2.3335 9.78905 2.50838 10.6002 2.85816C11.4113 3.20838 12.1168 3.6835 12.7168 4.2835C13.3168 4.8835 13.7917 5.58905 14.1415 6.40016C14.4917 7.21127 14.6668 8.07794 14.6668 9.00016C14.6668 9.92239 14.4917 10.7891 14.1415 11.6002C13.7917 12.4113 13.3168 13.1168 12.7168 13.7168C12.1168 14.3168 11.4113 14.7917 10.6002 15.1415C9.78905 15.4917 8.92239 15.6668 8.00016 15.6668ZM8.00016 14.3335C9.47794 14.3335 10.7364 13.8142 11.7755 12.7755C12.8142 11.7364 13.3335 10.4779 13.3335 9.00016C13.3335 7.52239 12.8142 6.26394 11.7755 5.22483C10.7364 4.18616 9.47794 3.66683 8.00016 3.66683C6.52239 3.66683 5.26416 4.18616 4.2255 5.22483C3.18638 6.26394 2.66683 7.52239 2.66683 9.00016C2.66683 10.4779 3.18638 11.7364 4.2255 12.7755C5.26416 13.8142 6.52239 14.3335 8.00016 14.3335Z"
                                            fill="#8D8C9D"
                                          />
                                        </svg>
                                      </span>
                                      <span>What is a Trim?</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row mb-0">
                                  <div className="col-lg-12">
                                    <button
                                      className="getOfferBtn"
                                    >
                                      <span>Get Instant Offer</span>
                                    </button>
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
     <div className="cta_flows">
        <div className="container">
        <div className="off_flow row m-0">
           <div className="col-lg-5 off_col align-self-center p-0">
                <h2>
                    <span>Hooray! </span>
                    <span>Selling Your Car Is </span>
                    <span className="highlight-text">Now100% HASSLE-FREE!</span>
                </h2>
           </div>
           <div className="col-lg-7">
                <div className="flow_row row">
                    <div className="col-lg-4 text-center">
                    <div className="flow_item">
                        <div className="flow_head">
                            <img src="/images/hiw1.png" alt="" />
                        </div>
                        <div className="flow_body">
                            <h2>Get Instant Offer</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 text-center">
                    <div className="flow_item">
                        <div className="flow_head">
                        <img src="/images/hiw2.png" alt="" />
                        </div>
                        <div className="flow_body">
                        <h2>Confirm Offer</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 text-center">
                    <div className="flow_item">
                        <div className="flow_head">
                        <img src="/images/hiw3.png" alt="" />
                        </div>
                        <div className="flow_body">
                        <h2>SOLD!</h2>
                        </div>
                    </div>
                    </div>
                </div>
           </div>
          </div>
        </div>
     </div>
     <div className="reviews_carsold">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-rc">
                    <h2>5,000 cars sold this month</h2>
                    <div className="sl_wrap">
                        <div className="sold_list">
                            <div className="sold_item">
                                <div className="row">
                                    <div className="col-lg-4 sold_item_img">
                                        <img src="/images/sv1.png" alt="" />
                                    </div>
                                    <div className="col-lg-8 sol_vh_detail">
                                        <div className="svd_detail">
                                            <div className="sv_name">
                                                <span>2018</span>
                                                <h3>Toyota Camry</h3>
                                            </div>
                                            <div className="sold_price">
                                                <span>Sold at : <b>$300</b></span>
                                            </div>
                                        </div>
                                        <div className="svd_location">
                                            <span>
                                                <svg width="17.5" height="21.52" viewBox="0 0 17.5 21.52">
                                                <g id="map-point-svgrepo-com" transform="translate(0.75 0.75)">
                                                    <path id="Path_17316" data-name="Path 17316" d="M4,10.143A8.073,8.073,0,0,1,12,2a8.073,8.073,0,0,1,8,8.143c0,4.462-2.553,9.669-6.537,11.531a3.449,3.449,0,0,1-2.926,0C6.553,19.812,4,14.606,4,10.143Z" transform="translate(-4 -2)" fill="none" stroke="#272424" stroke-width="1.5"/>
                                                    <circle id="Ellipse_113" data-name="Ellipse 113" cx="3" cy="3" r="3" transform="translate(4.84 5)" fill="none" stroke="#272424" stroke-width="1.5"/>
                                                </g>
                                                </svg>
                                            </span>
                                            <span>
                                                Princeton, NJ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sold_item">
                                <div className="row">
                                    <div className="col-lg-4 sold_item_img">
                                        <img src="/images/sv1.png" alt="" />
                                    </div>
                                    <div className="col-lg-8 sol_vh_detail">
                                        <div className="svd_detail">
                                            <div className="sv_name">
                                                <span>2018</span>
                                                <h3>Toyota Camry</h3>
                                            </div>
                                            <div className="sold_price">
                                                <span>Sold at : <b>$300</b></span>
                                            </div>
                                        </div>
                                        <div className="svd_location">
                                            <span>
                                                <svg width="17.5" height="21.52" viewBox="0 0 17.5 21.52">
                                                <g id="map-point-svgrepo-com" transform="translate(0.75 0.75)">
                                                    <path id="Path_17316" data-name="Path 17316" d="M4,10.143A8.073,8.073,0,0,1,12,2a8.073,8.073,0,0,1,8,8.143c0,4.462-2.553,9.669-6.537,11.531a3.449,3.449,0,0,1-2.926,0C6.553,19.812,4,14.606,4,10.143Z" transform="translate(-4 -2)" fill="none" stroke="#272424" stroke-width="1.5"/>
                                                    <circle id="Ellipse_113" data-name="Ellipse 113" cx="3" cy="3" r="3" transform="translate(4.84 5)" fill="none" stroke="#272424" stroke-width="1.5"/>
                                                </g>
                                                </svg>
                                            </span>
                                            <span>
                                                Princeton, NJ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sold_item">
                                <div className="row">
                                    <div className="col-lg-4 sold_item_img">
                                        <img src="/images/sv1.png" alt="" />
                                    </div>
                                    <div className="col-lg-8 sol_vh_detail">
                                        <div className="svd_detail">
                                            <div className="sv_name">
                                                <span>2018</span>
                                                <h3>Toyota Camry</h3>
                                            </div>
                                            <div className="sold_price">
                                                <span>Sold at : <b>$300</b></span>
                                            </div>
                                        </div>
                                        <div className="svd_location">
                                            <span>
                                                <svg width="17.5" height="21.52" viewBox="0 0 17.5 21.52">
                                                <g id="map-point-svgrepo-com" transform="translate(0.75 0.75)">
                                                    <path id="Path_17316" data-name="Path 17316" d="M4,10.143A8.073,8.073,0,0,1,12,2a8.073,8.073,0,0,1,8,8.143c0,4.462-2.553,9.669-6.537,11.531a3.449,3.449,0,0,1-2.926,0C6.553,19.812,4,14.606,4,10.143Z" transform="translate(-4 -2)" fill="none" stroke="#272424" stroke-width="1.5"/>
                                                    <circle id="Ellipse_113" data-name="Ellipse 113" cx="3" cy="3" r="3" transform="translate(4.84 5)" fill="none" stroke="#272424" stroke-width="1.5"/>
                                                </g>
                                                </svg>
                                            </span>
                                            <span>
                                                Princeton, NJ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="load_mre">
                            <button>
                                <span>more</span>
                                <span>
                                    <svg width="7" height="10" viewBox="0 0 9.276 15.698"><path id="go-svgrepo-com" d="M15.781,20.28,22.2,13.858a1.427,1.427,0,0,0,0-2.018L15.781,5.418a1.427,1.427,0,0,0-2.018,2.018c1.335,1.543,5.392,5.236,5.325,5.379,0,0-3.891,3.671-5.325,5.448a1.427,1.427,0,1,0,2.018,2.018Z" transform="translate(-13.345 -5)" fill="#272424" opacity="0.61"/></svg></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-review">
                <h2>Verified Reviews</h2>
                    <div className="rev_list">
                        <div className="rev_item">
                            <div className="prof">
                                <div className="p_left">
                                    <img src="/images/profile.png" alt="" />
                                </div>
                                <div className="p_right">
                                    <h3>George</h3>
                                    <span>3 months ago</span>
                                </div>
                            </div>
                            <div className="rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div className="rev_comment">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum, mauris mollis placerat poorem ipsum dolor consectetur adipiscing elit. Donec elementum, mauris mollis placerat poorem ipsum
                                </p>
                            </div>
                        </div>
                        <div className="rev_item">
                            <div className="prof">
                                <div className="p_left">
                                    <img src="/images/profile.png" alt="" />
                                </div>
                                <div className="p_right">
                                    <h3>George</h3>
                                    <span>3 months ago</span>
                                </div>
                            </div>
                            <div className="rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div className="rev_comment">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum, mauris mollis placerat poorem ipsum dolor consectetur adipiscing elit. Donec elementum, mauris mollis placerat poorem ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
      <div className="how-it-works pt100 pb-5 body-text">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 col-lg-12 faq right_sidebar_faq">
              <div className="faqWrapper pagefaqWrapper faq_seo">
                <div className="faq_for_each text-center">
                  <h3 className="font-weight-600">Frequently Asked Questions</h3>
                  
                  <Tabs
      defaultActiveKey="h1"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="h1" title="HOW IT WORKS">
        <Faq />
      </Tab>
      <Tab eventKey="h2" title=" WHAT WE BUY ">
        <Faq />
      </Tab>
      <Tab eventKey="h3" title="INITIAL & FINAL OFFER ">
        <Faq />
      </Tab>
      <Tab eventKey="h4" title=" APPOINTMENT K">
        <Faq />
      </Tab>
      <Tab eventKey="h5" title="PAYMENTS  ">
        <Faq />
      </Tab>
      <Tab eventKey="h6" title="FEEDBACK ">
        <Faq />
      </Tab>
    </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="read_all">
        <div className="read_hd text-center">
            <h2>Read all about it</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                   <div className="row m-0 rd_row">
                        <div className="col-lg-4 rdcol-left p-0">
                            <img src="/images/rd1.png" alt="" />
                        </div>
                        <div className="col-lg-8 rdcol-right">
                            <div className="rd_wrap">
                                <p>Published On Jul 02, 2023</p>
                                <h3>Opinion: Crossovers vs Upright SUVs</h3>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="col-lg-4">
                   <div className="row m-0 rd_row">
                        <div className="col-lg-4 rdcol-left p-0">
                            <img src="/images/rd1.png" alt="" />
                        </div>
                        <div className="col-lg-8 rdcol-right">
                            <div className="rd_wrap">
                                <p>Published On Jul 02, 2023</p>
                                <h3>Opinion: Crossovers vs Upright SUVs</h3>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="col-lg-4">
                   <div className="row m-0 rd_row">
                        <div className="col-lg-4 rdcol-left p-0">
                            <img src="/images/rd1.png" alt="" />
                        </div>
                        <div className="col-lg-8 rdcol-right">
                            <div className="rd_wrap">
                                <p>Published On Jul 02, 2023</p>
                                <h3>Opinion: Crossovers vs Upright SUVs</h3>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div className="load_mre">
                <button>
                    <span>View full blog</span>
                    <span>
                        <svg width="7" height="10" viewBox="0 0 9.276 15.698"><path id="go-svgrepo-com" d="M15.781,20.28,22.2,13.858a1.427,1.427,0,0,0,0-2.018L15.781,5.418a1.427,1.427,0,0,0-2.018,2.018c1.335,1.543,5.392,5.236,5.325,5.379,0,0-3.891,3.671-5.325,5.448a1.427,1.427,0,1,0,2.018,2.018Z" transform="translate(-13.345 -5)" fill="#272424" opacity="0.61"/></svg></span>
                </button>
            </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default seo2