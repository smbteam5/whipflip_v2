import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function FindVinModal({show,handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className="to_leave_modal">
        <Modal.Header closeButton>
            <h2>Finding Your VIN #</h2>
        </Modal.Header>
        <Modal.Body className='fyv_body'>
            <div className="fyv_img text-center">
                <img src="/images/fyi.svg" alt="" />
            </div>
            <div className="fyv_text">
                <p>We hope you come back soon!  We are always here!  Simply pick up where you left off with any of the options below:</p>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default FindVinModal