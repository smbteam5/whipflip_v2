import React from 'react'
import { useState } from 'react';
import { Button, Modal,Form  } from 'react-bootstrap';
import AccessCamModal from './AccessCamModal';
import PortraitModal from './PortraitModal';
function CameraReadyModal({showCamera,handleCloseCamera}) {
 const [showPortrait,setShowPortrait] = useState(false);
 const [show, setShow] = React.useState(false)
    const handleClose = () =>{
        setShow(false);
    }
    const handleOpen = (e) =>{
        e.preventDefault();
        setShow(true);
    }

 const handleshowPortrait =(e)=>{
    e.preventDefault();
    setShowPortrait(true);
 }

  return (
    <>
    {
            show &&
            <AccessCamModal handleClose={handleClose} handleOpen={handleOpen} show={show}/>
    }
    
    <Modal show={showCamera} onHide={handleCloseCamera} className="camera_ready_modal">
        <Modal.Header closeButton>
        </Modal.Header>
        {
            !showPortrait &&
            <Modal.Body className='cr_body'>
            <div className="cr_body_in">
                <div className="cr_head_dec">
                    <div className="cr_hd_img">
                        <img src="/images/cam.svg" alt="rotate" title='rotate'/>
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
                    <button className='cr_ready_btn' onClick={handleshowPortrait}>
                        I’m Ready
                    </button>
                    <a href="#" className='skipHref'>Skip Taking Photos</a>
                </div>
            </div>
            </Modal.Body>
        }
        {
            showPortrait &&
            <PortraitModal showPortrait={showPortrait} handleOpen={handleOpen} setShow={setShow} show={show}/>
        }
        
    </Modal>
    </>
  )
}

export default CameraReadyModal