import React from 'react'
import Header2 from '../Header2'

function Congrats() {
  return (
    <div>
        <Header2/>
        <div className="congratsView">
           <div className="container">
            <div className="cv_top">
                    <div className="cv_head">
                        <img src="/images/calendar.svg" alt="Calendar" title='Calendar'/>
                        <h1>Congratulations!</h1>
                        <p>You’re all set to sell your car!</p>
                    </div>
                    <div className="appDetail">
                        <h2>Appointment Details:</h2>
                        <div className="appDetail_in">
                            <div className="sell_day">
                                <span>Day and Time</span>
                                <h3>June 17th, 2022 at 3:20 PM</h3>
                            </div>
                            <div className="sell_location">
                                <span>Location</span>
                                <h3> <span>123 Market Street </span> <span>New York City, New York 19019</span></h3>
                            </div>
                            <div className="mobConfirmOff">
                                <div className="confOffBody">
                                    <div className="ioCard">
                                        <h2>Your offer: $6,800</h2>     
                                        <div className="offerProduct-mobi row">
                                            <div className="ofp_left col-4 p-0">
                                                <img src="/images/car1.png" alt="" />
                                            </div>
                                            <div className="ofp_right col-8">
                                                <h3>2022 Ford Ranger</h3>
                                                <span>2.3L EcoBoost® I4 engine</span>
                                            </div>
                                        </div>  
                                        <div class="jd_op_img">
                                            <img src="/images/jd.webp" alt="jd power" title="jd power" />
                                        </div>             
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="next_process">
                <h2>What you’ll need to do next:</h2>
                <div className="np_lst">
                    <div className="np_item">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <div className="np_item_img">
                                    <img src="/images/mail.svg" alt="mail" title='mail'/>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="np_item_dec">
                                    <p>We will contact you to confirm your appointment.  Please respond to lock in your day/time to sell.  If we haven’t heard from you, we reserve the right to cancel and rescind the offer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="np_item">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <div className="np_item_img">
                                    <img src="/images/sign.svg" alt="sign" title='sign' />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="np_item_dec">
                                    <p>We will contact you to confirm your appointment.  Please respond to lock in your day/time to sell.  If we haven’t heard from you, we reserve the right to cancel and rescind the offer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="np_item">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <div className="np_item_img">
                                    <img src="/images/key.svg" alt="key" title='key' />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="np_item_dec">
                                    <p>We will contact you to confirm your appointment.  Please respond to lock in your day/time to sell.  If we haven’t heard from you, we reserve the right to cancel and rescind the offer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="what_happened_we_arrive">
                <h2>What happens when we arrive?</h2>
                <div className="we_arrive_list">
                    <div className="wa_item">
                        <div className="wa_hd">
                            <img src="/images/wa1.svg" alt="" />
                        </div>
                        <div className="wa_dec">
                            <p>We will match the vehicle condition you entered and conduct a quick test drive.</p>
                        </div>
                    </div>
                    <div className="wa_item">
                        <div className="wa_hd">
                            <img src="/images/wa2.svg" alt="" />
                        </div>
                        <div className="wa_dec">
                            <p>We will complete all proper paperwork (i.e. Vehicle Purchase Agreement) and issue a check on the spot!</p>
                        </div>
                    </div>
                    <div className="wa_item">
                        <div className="wa_hd">
                            <img src="/images/wa3.svg" alt="" />
                        </div>
                        <div className="wa_dec">
                            <h2>That’s it! SOLD!</h2>
                            <p>In less than a few minutes of your time!</p>
                        </div>
                    </div>
                    <div className="wa_item">
                        <div className="wa_hd">
                            <img src="/images/wa4.svg" alt="" />
                        </div>
                        <div className="wa_dec">
                            <p>No need to worry about your car anymore. We’ll handle the pick up!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="congrats_foo">
                <div className="cf_head">
                    <h2>Any other questions?</h2>
                    <p>
                        <span>Check out our <a href="#"> FAQ,</a> email us at </span>
                        <span><a href="#">support@whipflip.com</a> or contact us at </span>
                        <span>(888) 349-3189.</span>
                    </p>
                </div>
                <div className="our_disclaimer">
                    <h2>Our Disclaimer</h2>
                    <p>WhipFlip’s offers for vehicles are made in good faith, based off of real-time industry market values, and primarily based on the customers’ input of a vehicle’s details, accuracy in disclosing overall vehicle condition (mechanical, cosmetic, etc.) and being the legal owner. On WhipFlip’s end, we strive to stand behind every offer we make to the dollar. However, on some vehicles, there might not be adequate market data to derive an accurate value to purchase as well as rare instances that our vehicle value/offer generation tool fails to operate as normal, which would cause harm to WhipFlip.</p>
                    <p>If any of these instances above should occur, including deviation from the description of a customer’s vehicle valuation upon verification from a WhipFlip representative (including initial and final offers), we will work with the customer to remedy the situation to come to a reasonable resolution. WhipFlip reserves the right to fairly adjust or rescind any active offer without penalty to WhipFlip, Inc.</p>
                </div>
                <div className="cf_btn">
                    <button className='returnHomeBtn'>
                        Return to the WhipFlip Website
                    </button>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Congrats