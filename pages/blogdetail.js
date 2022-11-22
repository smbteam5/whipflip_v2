import React from 'react'
import Footer from "./Componants/Footer";
import Header from "./Componants/Header";
import Link from "next/link";

function blogdetail() {
  return (
    <div>
        <div className="whipflip-header">
        <Header />
      </div>
      <div className="page-header faq d-flex align-items-center">
        <div className="container">
          <div className="row">
          </div>
        </div>
      </div>
      <div className="blog_detail">
        <div className="bd_wrapper">
            <div className="container">
            <div className="row bd_row">
                <div className="col-lg-9">
                    <div className="bd_lft">
                        <div className="back_btn">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 476.213 476.213" ><polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5   57.427,253.107 476.213,253.107 "/></svg>
                            </span>
                            <span>Back to Blog</span>
                        </div>
                        <div className="bd_detail_block">
                            <div className="bdd_top">
                                <div className="bd_img">
                                    <img src="./images/blog.png" alt="" />
                                </div>
                                <div className="readTime">
                                    <span>Buying a car - 8 min read</span>
                                </div>
                                <div className="head_nd_tag">
                                    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                    <span>By Mike T - jul 16,2019</span>
                                </div>
                            </div>
                            <div className="bdd_body">
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <img src="./images/blog.png" alt="" />
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <img src="./images/blog.png" alt="" />
                            </div>
                            <div className="bdd_foo">
                                <h2>Footer Note</h2>
                                <ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="right_list_in">
                <div className="share_right">
                <h2>Share</h2>
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
                                    <g clipPath="url(#clip0_2634_129257)">
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
                <div className="tag_list">
                    <div className="tag_single">
                        <span>#car</span>
                    </div>
                    <div className="tag_single">
                        <span>#buy</span>
                    </div>
                    <div className="tag_single">
                        <span>#tips</span>
                    </div>
                    <div className="tag_single">
                        <span>#downpayment</span>
                    </div>
                    <div className="tag_single">
                        <span>#inspection</span>
                    </div>
                    <div className="tag_single">
                        <span>#mileage</span>
                    </div>
                </div>
                <div className="read_nxt">
                    <h2>Read Next</h2>
                    <div className="rn_list">
                        <div className="rn_item">
                            <span className='hd_rd_time'>Buying a car - 8 min</span>
                            <h3>5 tips for buying a car the smart way</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <span className='writer_date'>By Mike T - jul 16, 2019</span>
                        </div>
                        <div className="rn_item">
                            <span className='hd_rd_time'>Buying a car - 8 min</span>
                            <h3>5 tips for buying a car the smart way</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <span className='writer_date'>By Mike T - jul 16, 2019</span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="quote_car">
                  <h2>Get a quote for your car now</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <button>Get a Quote</button>
                </div>
              </div>
                </div>
            </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default blogdetail