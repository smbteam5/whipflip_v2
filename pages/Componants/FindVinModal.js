import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
import Image from 'next/image'
function FindVinModal({show,handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className="to_leave_modal">
        <Modal.Header closeButton>
            <h2>Finding Your VIN #</h2>
        </Modal.Header>
        <Modal.Body className='fyv_body'>
            <div className="fyv_img text-center">
                <Image 
                    src="/images/fyi.svg" 
                    alt="Finding Your VIN" 
                    title='Finding Your VIN'
                    width={265}
                    height={125}
                />
            </div>
            <div className="fyv_text">
                <p>You can find your 17-digit VIN # on the windshield beneath the drivers side or in the driver’s side door jamb.</p>
                
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default FindVinModal