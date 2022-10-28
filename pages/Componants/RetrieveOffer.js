import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function RetrieveOffer({showRetriveOffer,handleCloseRetriveOffer}) {
  return (
    <Modal show={showRetriveOffer} onHide={handleCloseRetriveOffer} className="higher_offer_modal higher_offer_modal_web">
        {
        <>
        <Modal.Header closeButton>
            <h1>Retrieve Offer</h1>
        </Modal.Header>
        <Modal.Body className='hom_body bonus_body'>
            <div className="offer_block noBorder offHoblock">
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-1 sacol">    
                                <label htmlFor="">Enter your email address to Retrieve Offer</label>                            
                                <input type="text" placeholder='Enter your Email'/>
                            </div>
                        </div> 
                        <div className="retBtns">
                            <button className='retCancelBtn'>Cancel</button>
                            <button className='retCancelBtn'>Retrieve my offer</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal.Body>
        </>
        }
    </Modal>
  )
}

export default RetrieveOffer