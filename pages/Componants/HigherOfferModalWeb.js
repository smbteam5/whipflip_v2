import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function HigherOfferModalWeb({showHigherOffer,handleCloseHigherOffer}) {
  return (
    <Modal show={showHigherOffer} onHide={handleCloseHigherOffer} className="higher_offer_modal higher_offer_modal_web">
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
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-4 p-1 sacol">    
                                <label htmlFor="">Who is the Company?</label>                            
                                <input type="text" placeholder='Company Name'/>
                            </div>
                            <div class="col-lg-4 p-1 sacol">                 
                                <label htmlFor="">Final Offer Amount</label>                  
                                <input type="text" placeholder='Enter Amount'/>
                            </div>
                            <div class="col-lg-4 p-1 sacol">      
                                <label htmlFor="">Your Phone Number</label>                             
                                <input type="text" placeholder='Enter Here'/>
                            </div>
                        </div> 
                        
                    </form>
                </div>
            </div>
        </Modal.Body>
        <div className="off_block_foo">
            <div className="form-group hoBtnsFooGrp hoBtnsFooGrp_web">
                <button className='cancelBtn'>Cancel</button>
                <button className='subBtn'>Submit</button>
            </div>
        </div>
    </Modal>
  )
}

export default HigherOfferModalWeb