import React from "react";
import Footer from "./Componants/Footer";
import Header from "./Componants/Header";
import Image from 'next/image'
function privacypolicy() {
  return (
    <>
      <div className="whipflip-header">
        <Header />
      </div>
      <div className="page-header privacy d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <p>Privacy Policy</p>
              <h1>Your Privacy Matters to Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100">
        <div className="container">
          <div className="sub-title">
            <h2>Online privacy policy agreement</h2>
          </div>
          <div className="row py-5">
            <div className="col-12 pb-3">
              <p>
                {" "}
                WhipFlip, Inc. (WhipFlip) values its users' privacy. This
                Privacy Policy ("Policy") will help you understand how we
                collect and use personal information from those who visit our
                website or make use of our online facilities and services, and
                what we will and will not do with the information we collect.
                Our Policy has been designed and created to ensure those
                affiliated with WhipFlip, Inc. of our commitment and realization
                of our obligation not only to meet, but to exceed, most existing
                privacy standards.
              </p>
              <p>
                We reserve the right to make changes to this Policy at any given
                time. If you want to make sure that you are up to date with the
                latest changes, we advise you to frequently visit this page. If
                at any point in time WhipFlip, Inc. decides to make use of any
                personally identifiable information on file, in a manner vastly
                different from that which was stated when this information was
                initially collected, the user or users shall be promptly
                notified by email. Users at that time shall have the option as
                to whether to permit the use of their information in this
                separate manner.
              </p>
              <p>
                This Policy applies to WhipFlip, Inc., and it governs any and
                all data collection and usage by us. Through the use of
                whipflip.com, you are therefore consenting to the data
                collection procedures expressed in this Policy. Please note that
                this Policy does not govern the collection and use of
                information by companies that WhipFlip, Inc. does not control,
                nor by individuals not employed or managed by us. If you visit a
                website that we mention or link to, be sure to review its
                privacy policy before providing the site with information. It is
                highly recommended and suggested that you review the privacy
                policies and statements of any website you choose to use or
                frequent to better understand the way in which websites garner,
                make use of and share the information collected.
              </p>
            </div>
            <div className="col-12 mb-4">
              <h3 className="mb-4 font-weight-600">
                Specifically, this Policy will inform you of the following:
              </h3>
              <ol>
                <li>
                  What personally identifiable information is collected from you
                  through our website;
                </li>
                <li>
                  Why we collect personally identifiable information and the
                  legal basis for such collection;
                </li>
                <li>
                  How we use the collected information and with whom it may be
                  shared;
                </li>
                <li>
                  What choices are available to you regarding the use of your
                  data; and
                </li>
                <li>
                  The security procedures in place to protect the misuse of your
                  information.
                </li>
              </ol>
            </div>
            <div className="col-12 mb-4">
              <h4 className="font-weight-600">Information we collect</h4>
              <p>
                It is always up to you whether to disclose personally
                identifiable information to us, although if you elect not to do
                so, we reserve the right not to provide our services. This
                website collects various types of information, such as:
              </p>
              <ul>
                <li>
                  Voluntarily provided information which may include your name,
                  address, email address, billing and/or credit card information
                  etc. which may be used when upon completing the sale of your
                  vehicle through WhipFlip’s vehicle purchasing service.
                </li>
                <li>
                  Information automatically collected when visiting our website,
                  which may include cookies, third party tracking technologies,
                  your Internet Protocol (IP) address, and server logs.
                </li>
              </ul>
              <p>
                In addition, WhipFlip, Inc. may have the occasion to collect
                non-personal anonymous demographic information, such as age,
                gender, household income, political affiliation, race and
                religion, as well as the type of browser you are using, IP
                address, or type of operating system, which will assist us in
                providing and maintaining superior quality service.
              </p>

              <p>
                WhipFlip, Inc. may also deem it necessary, from time to time, to
                follow websites that our users may frequent to gleam what types
                of automotive related services and products may be the most
                popular to customers or the general public.
              </p>

              <p>
                Please rest assured that this site will only collect personal
                information that you knowingly and willingly provide to us by
                way of surveys, completed vehicle quotes and offers, purchase
                transactions, and emails. It is the intent of this site to use
                personal information only for the purpose for which it was
                requested, and any additional uses specifically provided for on
                this Policy.
              </p>
            </div>
            <div className="col-12 mb-4">
              <h4 className="font-weight-600">
                Why we collect information and for how long
              </h4>
              <p>We are collecting your data for several reasons:</p>
              <ul>
                <li>
                  To better understand your needs and provide you with the
                  services you have requested;
                </li>
                <li>
                  To fulfill our legitimate interest in improving our services
                  and products;
                </li>
                <li>
                  To send you promotional emails containing information we think
                  you may like when we have your consent to do so;
                </li>
                <li>
                  To contact you to fill out surveys or participate in other
                  types of market research, when we have your consent to do so;
                </li>
                <li>
                  To customize our website according to your online behavior and
                  personal preferences.
                </li>
              </ul>

              <p>
                The data we collect from you will be stored for no longer than
                necessary. The length of time we retain said information will be
                determined based upon the following criteria: the length of time
                your personal information remains relevant; the length of time
                it is reasonable to keep records to demonstrate that we have
                fulfilled our duties and obligations; any limitation periods
                within which claims might be made; any retention periods
                prescribed by law or recommended by regulators, professional
                bodies or associations; the type of contract we have with you,
                the existence of your consent, and our legitimate interest in
                keeping such information as stated in this Policy.
              </p>
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
                <button className="sell_car_btn">Sell Your Car Now!</button>
              </div>
            </div>
            <div className="col-lg-5 align-self-end">
              <div className="rts-rtImg">
                <Image 
                  src="/images/sell_to_customer.png"
                  alt="Ready to Sell"
                  title="Ready to Sell"
                  width={445} 
                  height={392}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default privacypolicy;
