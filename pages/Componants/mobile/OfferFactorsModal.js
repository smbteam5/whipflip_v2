import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function OfferFactorsModal({showOfmodal,handleCloseOfmodal}) {
  return (
    <Modal show={showOfmodal} onHide={handleCloseOfmodal} className="offer_factors_modal">
        <Modal.Header closeButton>
            <h2>Offer Factors</h2>
        </Modal.Header>
        <Modal.Body className='of_body'>
            <div className="of_list">
                <div className="of_item">
                    <h2>Cosmetic:</h2>
                    <p>Factors in cosmetic imperfections such as dents, scratches, tears, or general refurbishing.</p>
                </div>
                <div className="of_item">
                    <h2>Mechanical:</h2>
                    <p>Factors in any warning lights, engine or drivetrain issues, aftermarket parts, etc.</p>
                </div>
                <div className="of_item">
                    <h2>Vehicle History:</h2>
                    <p>Factors in what may be reported Carfax and other vehicle history reports that pertain to accident history, rental or fleet use, or severe history issues such as salvage, flood, and odometer rollbacks.</p>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default OfferFactorsModal