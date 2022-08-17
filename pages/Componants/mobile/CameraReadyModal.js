import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function CameraReadyModal({showCamera,handleCloseCamera}) {
  return (
    <Modal show={showCamera} onHide={handleCloseCamera} className="camera_ready_modal">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='cr_body'>
            <div className="cr_body_in">
                <div className="cr_head_dec">
                    <div className="cr_hd_img">
                        <img src="/images/cam.svg" alt="" />
                    </div>
                    <div className="cr_hd_dec">
                        <h2>Tilt phone to landscape mode and fit each FULL vehicle side inside the outline</h2>
                    </div>
                </div>
                <div className="cr_middle">
                    <div className="crm_head">
                        <span>To ensure you get the best offer:</span>
                    </div>
                    <div className="crm_offer_info">
                        <div className="crm_info_item">
                            <div className="info_left">
                                <div className="il_image">
                                    <img src="/images/clear-away.svg" alt="" />
                                </div>
                            </div>
                            <div className="info_right">
                                <span>Make sure the vehicle is clear from obstructions</span>
                            </div>
                        </div>
                        <div className="crm_info_item">
                            <div className="info_left">
                                <div className="il_image">
                                    <img src="/images/eye.svg" alt="" />
                                </div>
                            </div>
                            <div className="info_right">
                                <span>Make sure the vehicle is clear from obstructions</span>
                            </div>
                        </div>
                        <div className="crm_info_item">
                            <div className="info_left">
                                <div className="il_image">
                                    <img src="/images/take-pic.svg" alt="" />
                                </div>
                            </div>
                            <div className="info_right">
                                <span>Make sure the vehicle is clear from obstructions</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cr_foo">
                    <button className='cr_ready_btn'>
                        I’m Ready
                    </button>
                    <a href="#" className='skipHref'>Skip Taking Photos</a>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default CameraReadyModal