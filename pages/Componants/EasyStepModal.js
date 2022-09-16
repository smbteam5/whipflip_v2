import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
import Image from 'next/image'
function EasyStepModal({show,handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className="final_easy_step_modal">
        <Modal.Header closeButton>
        <Modal.Title>One Final Easy Step!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fesBody'>
            <div className="fesBody_in">
                <div className="fesBody_in_row row">
                    <div className="col-lg-4 fes_col fes_col_left">
                        <div className="fes_col_left_in">
                            <Image
                                src="/images/easy-final.svg" 
                                alt=""
                                title='easy final'
                                width={160} 
                                height={160}
                            />
                        </div>
                    </div>
                    <div className="col-lg-8 fes_col fes_col_right">
                        <div className="fes_col_right_in">
                            <div className="tag">
                                <span>Highly Recommended!</span>
                            </div>
                            <div className="fcr_head">
                                <h2>Use our awesome photo tool!</h2>
                            </div>
                            <div className="fcr_list">
                                <ul>
                                    <li>Fully guided and super-duper easy!</li>
                                    <li>Takes less than a minute using a smartphone or tablet!</li>
                                    <li>Lasers in exact value so no money is left on the table!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fes_middle">
                    <div className="fesm_hd">
                        <h2>On your phone, do one of the following:</h2>
                    </div>
                    <div className="fesCon">
                        <div className="fesConItem">
                            <div className="fesConItemRow align-items-center">
                                <div className="fesCon_left">
                                    <div className="fesConItem_img">
                                        <Image
                                            src="/images/access-email.svg" 
                                            alt="easy final"
                                            title='easy final'
                                            width={60} 
                                            height={60}
                                        />
                                    </div>
                                </div>
                                <div className="fesCon_right">
                                    <div className="fesConItem_detail">
                                        <h3>Access the photo tool via email</h3>
                                        <p>We’ve sent you an email! Open the email on your phone and tap the link.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="seprator">
                            <span>-OR</span>
                        </div>
                        <div className="fesConItem">
                            <div className="fesConItemRow align-items-center">
                                <div className="fesCon_left">
                                    <div className="fesConItem_img">
                                        <Image
                                            src="/images/url.svg" 
                                            alt="Access the photo"
                                            title='Access the photo'
                                            width={60} 
                                            height={60}
                                        />
                                    </div>
                                </div>
                                <div className="fesCon_right">
                                    <div className="fesConItem_detail">
                                        <h3>Go to www.whipflip.com on your phone</h3>
                                        <p>Tap the “Retrieve Offer” button and enter your email address.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fesFooter">
                <h2>Can’t take the photos right now?</h2>
                <div className="fesFooter_body">
                    <p>Your instant offer is a click away! We’ll confirm the exact condition at your driveway. The final value might change.</p>
                    <button className='instantOfferBtn'>Skip to Instant Offer</button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default EasyStepModal