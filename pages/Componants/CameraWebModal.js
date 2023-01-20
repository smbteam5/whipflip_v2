import React from 'react'
import { useState } from 'react';
import { Button, Modal,Form  } from 'react-bootstrap';
import Image from 'next/image'
import PortraitModal from './mobile/PortraitModal';
import AccessCamModal from './mobile/AccessCamModal';
function CameraWebModal({showCamera,handleCloseCamera}) {
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
    
    <Modal show={showCamera} onHide={handleCloseCamera} className="camera_ready_modal camera_ready_modal_web">
        <Modal.Header closeButton>
        </Modal.Header>
        {
            !showPortrait &&
            <Modal.Body className='cr_body cr_body_web'>
            <div className="cr_body_in">
                <div className="cr_head_dec">
                    <div className="cr_hd_img">
                        <Image 
                            src="/images/tilt.svg" 
                            alt="rotate"
                            title='rotate'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="cr_hd_dec">
                        <h2>Fit your vehicle within the outline as best as you can and we will take care of the rest!</h2>
                    </div>
                </div>
                <div className="cr_middle cr_middle_web">
                    <div className="crm_offer_info">
                        <div className="crm_info_item">
                            <div className="info_left">
                                <div className="il_image">
                                    <Image 
                                        src="/images/c1.svg" 
                                        alt="clear"
                                        title='clear'
                                        width={60}
                                        height={60}
                                    />
                                </div>
                            </div>
                            <div className="info_right">
                                <span>Make sure the vehicle is clear from obstructions</span>
                            </div>
                        </div>
                        <div className="crm_info_item">
                            <div className="info_left">
                                <div className="il_image">
                                    <Image 
                                        src="/images/c2.svg" 
                                        alt="eye"
                                        title='eye'
                                        width={60}
                                        height={60}
                                    />
                                </div>
                            </div>
                            <div className="info_right">
                                <span>Make sure the vehicle is clear from obstructions</span>
                            </div>
                        </div>
                        <div className="crm_info_item">
                            <div className="info_left">
                                <div className="il_image">
                                    <Image 
                                        src="/images/c3.svg" 
                                        alt="take pic"
                                        title='take pic'
                                        width={60}
                                        height={60}
                                    />
                                </div>
                            </div>
                            <div className="info_right">
                                <span>Make sure the vehicle is clear from obstructions</span>
                            </div>
                        </div>
                    </div>
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

export default CameraWebModal