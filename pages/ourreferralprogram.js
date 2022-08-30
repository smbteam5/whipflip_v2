import React from "react";
import Faq from "./Componants/Faq";
import Footer from "./Componants/Footer";
import HappyCustomersSlider from "./Componants/HappyCustomersSlider";
import Header from "./Componants/Header";
function ourreferralprogram() {
  return (
    <>
      <div className="whipflip-header">
        <Header />
      </div>
      <div className="page-header referral-program d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <p>Our Referral Program</p>
              <h1>
                Refer someone and you{" "}
                <span className="text-noted">each get $150!</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100">
        <div className="container">
          <div className="row justify-content-between flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-7 col-lg-6">
              <div className="sub-title">
                <h2 className="font-weight-800">
                  Refer Your friends, colleagues, and even grandma!
                </h2>
              </div>
              <div className="body-text py-2">
                <p>
                  Welcome to a true WIN-WIN-WIN! Refer someone you think would
                  benefit from selling their car to WhipFlip. Once they sell
                  their car to us, we'll send you and them each a $150 referral
                  bonus check!
                </p>
                <p>*Referrer must be a previous customer of WhipFlip.</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-6">
              <picture>
                <source type="image/webp" srcSet="images/referral_1.webp" />
                <img
                  src="/images/referral_1.png"
                  alt="Ultimate Convenience"
                  title="Ultimate Convenience"
                  className="img-fluid"
                />
              </picture>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 text-danger">FAQ will be comes here</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ourreferralprogram;
