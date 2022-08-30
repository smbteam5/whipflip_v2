import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function HigherOfferModal({showHigherOffer,handleCloseHigherOffer}) {
  return (
    <Modal show={showHigherOffer} onHide={handleCloseHigherOffer} className="higher_offer_modal">
        <Modal.Header closeButton>
            <h1>Let us match it and you get a $250 bonus check!</h1>
        </Modal.Header>
        <Modal.Body className='hom_body'>
            <h2>To quality as a competing offer:</h2>
            <ul>
                <li>The offer must come from another dealer or car buying company. Quotes, estimates, or offers made by private party (ex. facebook, craigslist) do not qualify.</li>
                <li>The offer is based off a full in-person inspection of your vehicle by the competing company, not just a site unseen online quote or “offer.”</li>
            </ul>
            <p>Simply provide the details below.  We will respond quickly.  You can’t lose!</p>
            <div className="offer_block noBorder offHoblock">
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='Who is the company?'/>
                            </div>
                            <div className="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='Final Offer Amount'/>
                            </div>
                            <div className="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='Your Phone Number'/>
                            </div>
                        </div> 
                        <div className="form-group hoBtnsFooGrp">
                            <button className='cancelBtn'>Cancel</button>
                            <button className='subBtn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default HigherOfferModal