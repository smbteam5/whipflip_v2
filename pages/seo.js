import React from "react";
import Faq from "./Componants/Faq";
import Footer from "./Componants/Footer";
import HappyCustomersSlider from "./Componants/HappyCustomersSlider";
import Header from "./Componants/Header";
import Link from "next/link";
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function seo() {
  return (
    <>
      <div className="whipflip-header">
        <Header />
      </div>
      <div className="seo_banner">
        <div className="row seo-row m-0">
            <div className="col-lg-5 p-0 seo_banner_left h-100">
                <img src="/images/seo-banner.png" alt="" />
            </div>
            <div className="col-lg-7 align-self-center">
                <div className="bnr_rt_wrap">
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

export default seo