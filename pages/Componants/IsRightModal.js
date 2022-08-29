import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function IsRightModal({showIsRightModal,handleCloseRightModal}) {
  return (
    <Modal show={showIsRightModal} onHide={handleCloseRightModal} className="final_easy_step_modal"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <Modal.Body className='irm_body'>
            <div className="irm_head text-center">
                <h1>Is this right?</h1>
                <p>
                    <span>You’ve entered “200” for mileage. </span>
                    <span>Do you want to double check the number?</span>
                </p>                
            </div>
            <div className="irm_btns">
                <button className='e-again-btn'>Enter Again</button>
                <button className='e-cont-btn'>Continue</button>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default IsRightModal