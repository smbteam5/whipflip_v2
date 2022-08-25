import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
function PortraitModal({showPortrait,handleOpen}) {
  return (
    <div>
        <div className='portrait_body'> 
                <div className="chatQuick">
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.95768 14.9974C10.2493 14.9974 10.496 14.8966 10.6977 14.6949C10.8988 14.4938 10.9993 14.2474 10.9993 13.9557C10.9993 13.6641 10.8988 13.4177 10.6977 13.2166C10.496 13.0149 10.2493 12.9141 9.95768 12.9141C9.66602 12.9141 9.41935 13.0149 9.21768 13.2166C9.01657 13.4177 8.91602 13.6641 8.91602 13.9557C8.91602 14.2474 9.01657 14.4938 9.21768 14.6949C9.41935 14.8966 9.66602 14.9974 9.95768 14.9974ZM9.20768 11.7891H10.7493C10.7493 11.3307 10.8016 10.9696 10.906 10.7057C11.0099 10.4418 11.3049 10.0807 11.791 9.6224C12.1521 9.26129 12.4368 8.9174 12.6452 8.59073C12.8535 8.26462 12.9577 7.8724 12.9577 7.41406C12.9577 6.63628 12.673 6.03906 12.1035 5.6224C11.5341 5.20573 10.8605 4.9974 10.0827 4.9974C9.29102 4.9974 8.64879 5.20573 8.15602 5.6224C7.66268 6.03906 7.31879 6.53906 7.12435 7.1224L8.49935 7.66406C8.56879 7.41406 8.72518 7.14323 8.96852 6.85156C9.21129 6.5599 9.58268 6.41406 10.0827 6.41406C10.5271 6.41406 10.8605 6.53545 11.0827 6.77823C11.3049 7.02156 11.416 7.28906 11.416 7.58073C11.416 7.85851 11.3327 8.11878 11.166 8.36156C10.9993 8.6049 10.791 8.83073 10.541 9.03906C9.9299 9.58073 9.5549 9.99045 9.41602 10.2682C9.27713 10.546 9.20768 11.053 9.20768 11.7891ZM9.99935 18.3307C8.86046 18.3307 7.78407 18.1118 6.77018 17.6741C5.75629 17.2368 4.87102 16.6432 4.11435 15.8932C3.35713 15.1432 2.7599 14.2613 2.32268 13.2474C1.8849 12.2335 1.66602 11.1502 1.66602 9.9974C1.66602 8.84462 1.8849 7.76129 2.32268 6.7474C2.7599 5.73351 3.35713 4.85156 4.11435 4.10156C4.87102 3.35156 5.75629 2.75767 6.77018 2.3199C7.78407 1.88267 8.86046 1.66406 9.99935 1.66406C11.166 1.66406 12.2563 1.88267 13.2702 2.3199C14.2841 2.75767 15.166 3.35156 15.916 4.10156C16.666 4.85156 17.2563 5.73351 17.6868 6.7474C18.1174 7.76129 18.3327 8.84462 18.3327 9.9974C18.3327 11.1502 18.1174 12.2335 17.6868 13.2474C17.2563 14.2613 16.666 15.1432 15.916 15.8932C15.166 16.6432 14.2841 17.2368 13.2702 17.6741C12.2563 18.1118 11.166 18.3307 9.99935 18.3307ZM9.99935 16.6641C11.8605 16.6641 13.4368 16.0149 14.7285 14.7166C16.0202 13.4177 16.666 11.8446 16.666 9.9974C16.666 8.15017 16.0202 6.57712 14.7285 5.27823C13.4368 3.9799 11.8605 3.33073 9.99935 3.33073C8.1799 3.33073 6.61379 3.9799 5.30102 5.27823C3.98879 6.57712 3.33268 8.15017 3.33268 9.9974C3.33268 11.8446 3.98879 13.4177 5.30102 14.7166C6.61379 16.0149 8.1799 16.6641 9.99935 16.6641Z" fill="white"/>
                        </svg>
                    </span>
                    <span>Chat</span>
                </div>    
                <div className="pb_inside">
                    <div className="pb_headd">
                        <div className="pb_img">
                            <img src="/images/cam.svg" alt="rotate" title='rotate'/>
                        </div>
                    </div>
                    <div className="pb_rotate_info">
                        <div className="pbr_hd">
                            <h2>Please rotate your phone</h2>
                        </div>
                        <div className="pbr_dec">
                            <p>If you are unable to access the camera please enable screen rotation in the access control center.</p>
                        </div>
                        <div className="pbr_foo_links">
                            <a href="#" onClick={handleOpen}>Still having issues?</a>
                            <a href="#">Chat with us using the button below</a>
                        </div>
                    </div>
                </div>       
            </div>
    </div>
  )
}

export default PortraitModal