import React from "react";
import Faq from "./Componants/Faq";
import Footer from "./Componants/Footer";
import HappyCustomersSlider from "./Componants/HappyCustomersSlider";
import Header from "./Componants/Header";
import Link from "next/link";

function pagefaq() {
  return (
    <>
      {/* <div className="whipflip-header">
        <Header />
      </div> */}
      <div className="page-header faq d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <p className="pt-4">How can we help you?</p>
              <h1>Frequently asked questions</h1>
              <div className="pt-4">
                <form class="form-row justify-content-center">
                  <div class="form-group col-9 col-sm-7">
                    <input
                      type="text"
                      class="form-control form-control-lg input-faq"
                      id="inputSearchfaq"
                      placeholder="Search Questions"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg w-100 btn-yellow"
                    >
                      <span className="d-none d-sm-inline">Search</span>
                      <i class="bi bi-search d-sm-none"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100 pb-5 body-text">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 col-lg-3 faq-topics mb-4">
              <h6 className="font-weight-600">Topics</h6>
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
            <div className="col-md-8 col-lg-9 faq">
              <div className="faqWrapper">
                <div>
                  <h3 className="font-weight-600">How It Works</h3>
                  <Faq />
                </div>
                <div className="my-4">
                  <h3 className="font-weight-600">What We Buy</h3>
                  <Faq />
                </div>
                <div className="my-4">
                  <h3 className="font-weight-600">Quotes & Offers</h3>
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default pagefaq;
