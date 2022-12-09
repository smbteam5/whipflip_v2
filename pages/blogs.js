import React from 'react'
import Footer from "./Componants/Footer";
import Header from "./Componants/Header";
import Link from "next/link";
function blogs() {
  return (
    <>
      <div className="whipflip-header">
        <Header />
      </div>
      <div className="page-header faq d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title">
              <div className="pt_top">
                <p className="pt-4">Blog</p>
                <h1>WhipFlip News</h1>
                <p>Subscribe and get free tips and advice on selling or buying a car</p>
              </div>
              <div className="pt-4">
                <form className="form-row">
                  <div className="form-group col-9 col-sm-7">
                    <input
                      type="text"
                      className="form-control form-control-lg input-faq"
                      id="inputSearchfaq"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="col-3 col-lg-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 btn-yellow"
                    >
                      <span className="d-none d-sm-inline">Subscribe</span>
                      <i className="bi bi-search d-sm-none"></i>
                    </button>
                  </div>
                </form>
                <span>We care about your <Link href="">privacy</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100 pb-5 body-text">
        <div className="container">
          <div className="row mb-5 bl_row">
            <div className="col-lg-9">
              <div className="row blog_list_row">
                <div className="col-lg-12">
                  <div className="row blog_single_row">
                    <div className="col-lg-7">
                      <div className="news_item_left">
                        <img src="./images/blog.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="news_item__right">
                        <span className='tag_read_time'>Buying a car - 8MIN READ</span>
                        <div className="ni_body">
                          <h2><Link href="#">5 tips for buying a car the smart way</Link></h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                          <span className='writer-date'>By Mike T - jul 16,2019</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row blog_single_row">
                    <div className="col-lg-12">
                      <div className="news_item_left">
                        <img src="./images/blog.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="news_item__right news_item__right_bd">
                        <span className='tag_read_time'>Buying a car - 8MIN READ</span>
                        <div className="ni_body">
                          <h2><Link href="#">5 tips for buying a car the smart way</Link></h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                          <span className='writer-date'>By Mike T - jul 16,2019</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row blog_single_row">
                    <div className="col-lg-12">
                      <div className="news_item_left">
                        <img src="./images/blog.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="news_item__right news_item__right_bd">
                        <span className='tag_read_time'>Buying a car - 8MIN READ</span>
                        <div className="ni_body">
                          <h2><Link href="#">5 tips for buying a car the smart way</Link></h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                          <span className='writer-date'>By Mike T - jul 16,2019</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 right_list">
              <div className="right_list_in">
                <form className="form-row">
                  <div className="form-group form_blog_search">
                    <input
                      type="text"
                      className="form-control form-control-lg input-faq"
                      id="inputSearchfaq"
                      placeholder="Search"
                    />
                    <span className='span_srch'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.5" viewBox="0 0 13.5 13.5">
                      <path id="Path_18470" data-name="Path 18470" d="M1021.7,610.75l-4.72-4.725a4.608,4.608,0,0,1-2.86.975,4.893,4.893,0,1,1,4.62-3.319,4.6,4.6,0,0,1-.72,1.294l4.73,4.725Zm-7.58-5.25a3.353,3.353,0,1,0-2.39-.984A3.278,3.278,0,0,0,1014.12,605.5Z" transform="translate(-1009.25 -597.25)" fill="#353442"/></svg>
                    </span>
                  </div>
                </form>
                <div className="rt_ul">
                <ul>
                  <li>
                    <Link href="#">How It Works</Link>
                  </li>
                  <li>
                    <Link href="#">What We Buy</Link>
                  </li>
                  <li>
                    <Link href="#">Quotes & Offers</Link>
                  </li>
                  <li>
                    <Link href="#">Appointments</Link>
                  </li>
                  <li>
                    <Link href="#">Payments</Link>
                  </li>
                  <li>
                    <Link href="#">Feedback</Link>
                  </li>
                </ul>
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
      <Footer />
    </>
  )
}

export default blogs