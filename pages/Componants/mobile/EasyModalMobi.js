import React,{useState} from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
import CameraReadyModal from './CameraReadyModal';
import Image from 'next/image'
function EasyModalMobi({show,handleClose}) {
    const [showCamera, setShowCamera] = React.useState(false)
    const handleCloseCamera = () =>{
        setShowCamera(false);
    }
    const handleOpenCamera = (e) =>{
        e.preventDefault();
        setShowCamera(true);
    }
  return (
    <>
    {
        showCamera &&
        <CameraReadyModal handleCloseCamera={handleCloseCamera} showCamera={showCamera}/>
    }
    <Modal show={show} onHide={handleClose} className="final_easy_step_modal">
        <Modal.Header>
        <Modal.Title className='finalMobiHd'>One Final Easy Step!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fesBody fesBodyMobi'>
            <div className="fesBody_in">
                <div className="fesBody_in_row row">
                    <div className="col-lg-4 fes_col fes_col_left">
                        <div className="fes_col_left_in text-center">
                            <Image 
                                src="/images/easy-final.svg" 
                                alt="easy final" 
                                title='easy final'
                                width={160}
                                height={160}
                            />
                        </div>
                    </div>
                    <div className="col-lg-8 fes_col fes_col_right p-0">
                        <div className="fes_col_right_in">                            
                            <div className="fcr_head">
                                <h2>Use our awesome photo tool!</h2>
                            </div>
                            <div className="fcr_list">
                                <ul>
                                    <li>Fully guided and super-duper easy!</li>
                                    <li>Takes less than a minute using a smartphone or tablet!</li>
                                    <li>Lasers in exact value so no money is left on the table!</li>
                                </ul>
                            </div>
                            <button className='photosBtn' onClick={handleOpenCamera}>
                                Start Taking Photos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fesFooter">
                <h2>Can’t take the photos right now?</h2>
                <div className="fesFooter_body">
                    <div className="fesFooter_list">
                        <ul>
                            <li>Instant offer is click away</li>
                            <li>We'll confirm the exact condition at your driveway</li>
                            <li>final value might change</li>
                        </ul>
                    </div>
                    <button className='instantOfferBtn'>Skip to Instant Offer</button>
                </div>
                <div className="review_vehicle">
                    <a href="#">
                        Review Vehicle Details
                    </a>
                </div>
            </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default EasyModalMobi