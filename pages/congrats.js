import React from 'react'
import {
    useWindowSize
  } from '@react-hook/window-size'
import Header2 from './Componants/Header2';
import Image from 'next/image'
function congrats() {
const [width, height] = useWindowSize()
  console.log(width, height);
  return (    
    <div>
        <Header2/>
        <div className="congratsView">
            <div className="congrats_head_vw congrats_head_web text-center">
                    <Image 
                        src="/images/calendar.svg" 
                        alt="Calendar" 
                        title='Calendar'
                        width={50}
                        height={50}
                    />
                <h1>Congratulations!</h1>
                <p>We're coming to buy your car!</p>
            </div>
           <div className="cv_top_view">           
           <div className="container">
              <div className="congrats_top">                
                <div className="appDetail appDetail_web">                    
                    <div className="appDetail_in row align-items-center">
                        <div className="col-lg-4 appDetailLeft appDetailLeft_web">
                          <h2>Appointment Details:</h2>
                          <div className="dayLocation">
                            <div className="sell_day">
                                <span>Day and Time :</span>
                                <h3>June 17th, 2022 at 3:20 PM</h3>
                            </div>
                            <div className="sell_location">
                                <span>Location : </span>
                                <h3> <span>123 Market Street </span> <span>New York City, New York 19019</span></h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 appDetailRight appDetailRight_web">
                          <div className="mobConfirmOff">
                              <div className="confOffBody">
                                  <div className="ioCard ioCard_web">                                        
                                      <div className="offerProduct-mobi row offerProduct_web justify-content-end">
                                          <div className="ofp_left col-5 p-0">
                                              <Image 
                                                src="/images/car1.png" 
                                                alt="Car" 
                                                title='Car1'
                                                width={270}
                                                height={150}
                                             />
                                          </div>
                                          <div className="ofp_right ofp_right_web col-6">
                                                <div className="jd_op_img">
                                                  <Image 
                                                    src="/images/jd.webp" 
                                                    alt="jd power" 
                                                    title='jd power'
                                                    width={190}
                                                    height={22}
                                                  />
                                               </div>  
                                              <h2>$6,800</h2>                                                 
                                              <div className="nm_detail">
                                                    <h3>2019 Ford Ranger Sedan 4D</h3>
                                                    <div className="vehicle_info">
                                                        <span>FWD, 4-Cyl, Standard, 2.0 Liter</span>
                                                        <span>100,000 miles</span>
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
              </div>
              <div className="next_process next_process_web">
                  <h2>What you’ll need to do next:</h2>
                  <div className="np_lst row">
                      <div className="np_item col-4">
                          <div className="row np_item_row">
                              <div className="npi_wrap">
                                <div className="col-12 p-0">
                                    <div className="np_item_img">
                                        <Image 
                                          src="/images/mail.svg" 
                                          alt="mail" 
                                          title='mail'
                                          width={160}
                                          height={160}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 p-0">
                                    <div className="np_item_dec">
                                      <h2>Respond to Confirmation</h2>
                                        <p>A member of our team will contact you to confirm your appointment to sell. Please respond immediately to lock in your day/time to sell. If we haven’t heard from you, we reserve the right to cancel and rescind the offer.</p>
                                    </div>
                                </div>
                              </div>
                          </div>
                      </div>
                      {/*  */}
                      <div className="np_item col-4">
                          <div className="row np_item_row">
                              <div className="npi_wrap">
                                <div className="col-12 p-0">
                                    <div className="np_item_img">
                                        <Image 
                                          src="/images/sign.svg" 
                                          alt="sign" 
                                          title='sign'
                                          width={160}
                                          height={160}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 p-0">
                                    <div className="np_item_dec">
                                      <h2>Make Sure Everyone’s There!</h2>
                                        <p>All owners and/or co-signers must be present to sign the appropriate ownership and purchase documents.</p>
                                    </div>
                                </div>
                              </div>
                          </div>
                      </div>
                      {/*  */}
                      <div className="np_item col-4">
                          <div className="row np_item_row">
                            <div className="npi_wrap">                                
                              <div className="col-12 p-0">
                                  <div className="np_item_img">
                                      <Image 
                                        src="/images/key.svg" 
                                        alt="key" 
                                        title='key'
                                        width={160}
                                        height={160}
                                      />
                                  </div>
                              </div>
                              <div className="col-12 p-0">
                                  <div className="np_item_dec">
                                    <h2>Have Everything on Hand</h2>
                                      <p>We are buying a lot of cars on the hour. Please be on time with your title or payoff information, ID, and keys ready for our Car Concierge.</p>
                                  </div>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="what_happened_we_arrive_web">
                  <h2>What happens when we arrive to buy?</h2>
                  <div className="we_arrive_list row">
                      <div className="wa_item col-3">
                          <div className="wa_iin">
                            <div className="wa_hd">
                                <Image 
                                    src="/images/ar1.svg" 
                                    alt="quick test drive" 
                                    title='quick test drive'
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="wa_dec whwa_dec">
                                <h3>Condition Verification</h3>
                                <p>We will match the vehicle condition you entered and conduct a quick test drive.</p>
                            </div>
                          </div>
                      </div>
                      <div className="wa_item col-3">
                        <div className="wa_iin">
                          <div className="wa_hd">
                                <Image 
                                    src="/images/ar2.svg" 
                                    alt="Vehicle Purchase Agreement" 
                                    title='Vehicle Purchase Agreement'
                                    width={128}
                                    height={128}
                                />                              
                          </div>
                          <div className="wa_dec whwa_dec">
                            <h3>Paperwork & Payment</h3>
                              <p>We will complete all proper paperwork (i.e. Vehicle Purchase Agreement) and issue a check on the spot!</p>
                          </div>
                        </div>
                      </div>
                      <div className="wa_item col-3">
                        <div className="wa_iin">
                          <div className="wa_hd">
                                <Image 
                                    src="/images/ar3.svg" 
                                    alt="SOLD " 
                                    title='SOLD '
                                    width={128}
                                    height={128}
                                />   
                          </div>
                          <div className="wa_dec whwa_dec">
                              <h3>SOLD!</h3>
                              <p>In less than a few minutes of your time!</p>
                          </div>
                        </div>
                      </div>
                      <div className="wa_item col-3">
                        <div className="wa_iin">
                          <div className="wa_hd">
                            <Image 
                                src="/images/ar4.svg" 
                                alt="handle the pick up" 
                                title='handle the pick up'
                                width={128}
                                height={128}
                            />   
                          </div>
                          <div className="wa_dec whwa_dec">
                            <h3>Picked Up</h3>
                              <p>No need to worry about your car anymore. We’ll handle pick up and you do not need to be there!</p>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
             
           </div>
           </div>
           <div className="other_quiz">
                <div className="container">
                <div className="congrats_foo">
                  <div className="cf_head">
                      <h2>Any other questions?</h2>
                      <p>
                          <span>Check out our <a href="#"> FAQ,</a> email us at <a href="#">support@whipflip.com</a> or contact us at  <a href="#"> (888) 349-3189.</a></span>
                      </p>
                  </div>
                  <div className="our_disclaimer">
                      <h2>Our Disclaimer</h2>
                      <p>WhipFlip’s offers for vehicles are made in good faith, based off of real-time industry market values, and primarily based on the customers’ input of a vehicle’s details, accuracy in disclosing overall vehicle condition (mechanical, cosmetic, etc.) and being the legal owner. On WhipFlip’s end, we strive to stand behind every offer we make to the dollar. However, on some vehicles, there might not be adequate market data to derive an accurate value to purchase as well as rare instances that our vehicle value/offer generation tool fails to operate as normal, which would cause harm to WhipFlip.</p>
                      <p>If any of these instances above should occur, including deviation from the description of a customer’s vehicle valuation upon verification from a WhipFlip representative (including initial and final offers), we will work with the customer to remedy the situation to come to a reasonable resolution. WhipFlip reserves the right to fairly adjust or rescind any active offer without penalty to WhipFlip, Inc.</p>
                  </div>
                  <div className="cf_btn cf_btn_web text-center">
                      <button className='returnHomeBtn'>
                          Return to the WhipFlip Website
                      </button>
                  </div>
              </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default congrats