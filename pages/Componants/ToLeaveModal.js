import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function ToLeaveModal({show,handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className="to_leave_modal">
        <Modal.Header closeButton>
            <h2>Need to Leave?</h2>
        </Modal.Header>
        <Modal.Body className='nl_body'>
            <div className="nl_text">
                <p>We hope you come back soon!  We are always here!  Simply pick up where you left off with any of the options below:</p>
            </div>
            <div className="nl_list">
                <div className="nl_item">
                    <div className="nl_item_left">
                        <img src="/images/nl1.svg" alt="" />
                    </div>
                    <div className="nl_item_right">
                        <p>Revisit the homepage of whipflip.com. We’ll keep it there for 5 days!</p>
                    </div>
                </div>
                <div className="nl_item">
                    <div className="nl_item_left">
                        <img src="/images/nl2.svg" alt="" />
                    </div>
                    <div className="nl_item_right">
                        <p>Select the “Retrieve Offer” Option in the menu of WhipFlip.com if it’s been over 5 days.</p>
                    </div>
                </div>
                <div className="nl_item">
                    <div className="nl_item_left">
                        <img src="/images/nl2.svg" alt="" />
                    </div>
                    <div className="nl_item_right">
                        <p>Access the offer link we emailed you.</p>
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default ToLeaveModal