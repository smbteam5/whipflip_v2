import React,{useState} from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function HigherOfferModalWeb({showHigherOffer,handleCloseHigherOffer}) {
 const [show, setShow] = useState(false)
 const handleShow = () =>{
    setShow(true);
    // console.log("show",show)
 }
  return (
    <Modal show={showHigherOffer} onHide={handleCloseHigherOffer} className="higher_offer_modal higher_offer_modal_web">
        {
            show === false &&
            <>
                <Modal.Header closeButton>
            <h1>Let us match it and you get a $250 bonus!</h1>
        </Modal.Header>
        <Modal.Body className='hom_body bonus_body'>
            <h2>To quality as a competing offer:</h2>
            <ul>
                <li>The offer must come from another dealer or car buying company. Quotes, estimates, or offers made by private party (ex. facebook, craigslist) do not qualify.</li>
                <li>The offer is based off a full in-person inspection of your vehicle by the competing company, not just a site unseen online quote or “offer.”</li>
                <li>The $250 bonus will be applied to the matched offer and is valid for 5 days. Expired offers from the competing company do not qualify.</li>
            </ul>
            <p>Simply provide the details below.  We will respond quickly.  You can’t lose!</p>
            <div className="offer_block noBorder offHoblock">
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-4 p-1 sacol">    
                                <label htmlFor="">Who is the Company?
                                <span className='infoBx'><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.3335 12.3335H8.66683V8.3335H7.3335V12.3335ZM8.00016 7.00016C8.18905 7.00016 8.3475 6.93616 8.4755 6.80816C8.60305 6.68061 8.66683 6.52239 8.66683 6.3335C8.66683 6.14461 8.60305 5.98616 8.4755 5.85816C8.3475 5.73061 8.18905 5.66683 8.00016 5.66683C7.81127 5.66683 7.65305 5.73061 7.5255 5.85816C7.3975 5.98616 7.3335 6.14461 7.3335 6.3335C7.3335 6.52239 7.3975 6.68061 7.5255 6.80816C7.65305 6.93616 7.81127 7.00016 8.00016 7.00016ZM8.00016 15.6668C7.07794 15.6668 6.21127 15.4917 5.40016 15.1415C4.58905 14.7917 3.8835 14.3168 3.2835 13.7168C2.6835 13.1168 2.20861 12.4113 1.85883 11.6002C1.50861 10.7891 1.3335 9.92239 1.3335 9.00016C1.3335 8.07794 1.50861 7.21127 1.85883 6.40016C2.20861 5.58905 2.6835 4.8835 3.2835 4.2835C3.8835 3.6835 4.58905 3.20838 5.40016 2.85816C6.21127 2.50838 7.07794 2.3335 8.00016 2.3335C8.92239 2.3335 9.78905 2.50838 10.6002 2.85816C11.4113 3.20838 12.1168 3.6835 12.7168 4.2835C13.3168 4.8835 13.7917 5.58905 14.1415 6.40016C14.4917 7.21127 14.6668 8.07794 14.6668 9.00016C14.6668 9.92239 14.4917 10.7891 14.1415 11.6002C13.7917 12.4113 13.3168 13.1168 12.7168 13.7168C12.1168 14.3168 11.4113 14.7917 10.6002 15.1415C9.78905 15.4917 8.92239 15.6668 8.00016 15.6668ZM8.00016 14.3335C9.47794 14.3335 10.7364 13.8142 11.7755 12.7755C12.8142 11.7364 13.3335 10.4779 13.3335 9.00016C13.3335 7.52239 12.8142 6.26394 11.7755 5.22483C10.7364 4.18616 9.47794 3.66683 8.00016 3.66683C6.52239 3.66683 5.26416 4.18616 4.2255 5.22483C3.18638 6.26394 2.66683 7.52239 2.66683 9.00016C2.66683 10.4779 3.18638 11.7364 4.2255 12.7755C5.26416 13.8142 6.52239 14.3335 8.00016 14.3335Z" fill="#8D8C9D"></path></svg></span>
                                </label>                            
                                <input type="text" placeholder='Company Name'/>
                            </div>
                            <div className="col-lg-4 p-1 sacol">                 
                                <label htmlFor="">Final Offer Amount</label>                  
                                <input type="text" placeholder='Enter Amount'/>
                            </div>
                            <div className="col-lg-4 p-1 sacol">      
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
                <button className='subBtn' onClick={handleShow}>Submit</button>
            </div>
        </div>
            </>
        }
        {
            show === true &&
            <>
                <Modal.Header closeButton>
            <h1>Let us match it and you get a $250 bonus!</h1>
        </Modal.Header>
        <Modal.Body className='hom_body hofferBody'>
            <h2>Thanks!</h2>            
            <p>We’ll get in touch shortly to try to match the offer and add that sweet $250 bonus!</p>            
        </Modal.Body>
        <div className="thanks_block_foo">
            <div className="form-group hoBtnsFooGrp hoBtnsFooGrp_web thanks_btn">
                <button className='subBtn'>Got it!</button>
            </div>
        </div>
            </>
        }
    </Modal>
  )
}

export default HigherOfferModalWeb