import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function AccessCamModal({show,handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className="modal_accessCam" aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Header className='mac_head'>
            <h2><span>“Whipflip.com” Would Like to</span><span>Access the Camera</span></h2>
        </Modal.Header>
        <Modal.Body className='mac_body'>
            <span onClick={handleClose}>Cancel</span>
            <span>Allow</span>
        </Modal.Body>
    </Modal>
  )
}

export default AccessCamModal