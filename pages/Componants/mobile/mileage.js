import React, { useState } from 'react'
import Header2 from '../Header2'
import IsRightModal from '../IsRightModal'
import StepBar from './StepBar'

function mileage() {
const [showIsRightModal,setShowIsRightModal] = useState(false)
const handleShowRightModal = (event) =>{
    event.preventDefault();
    setShowIsRightModal(true)
}
const handleCloseRightModal = () =>{
    setShowIsRightModal(false)
}
  return (
    <>
    {
        showIsRightModal &&
        <IsRightModal handleShowRightModal={handleShowRightModal} handleCloseRightModal={handleCloseRightModal} showIsRightModal={showIsRightModal}/>
    }
        <Header2/>
        <StepBar/>
        <div className="bookingcar">
            <div className="container">
                <div className="offerProduct row">
                    <div className="ofp_left col-4">
                        <img src="/images/car1.png" alt="" />
                    </div>
                    <div className="ofp_right col-8">
                        <h1>2022 Ford Ranger</h1>
                        <span>2.3L EcoBoost® I4 engine</span>
                    </div>
                </div>
                <div className="offer_block noBordBtm offer_block_mobi">
                    <div className="ob_hd">
                        <h2>Vehicle Basics</h2> 
                    </div>
                    <div class="offer_block-body">
                        <form autocomplete="off" class="form" role="form">      
                            <div class="form-group row ob_frm_row">
                                <div class="col-lg-12 p-0">
                                    <label htmlFor="">Mileage</label>
                                    <input type="text" placeholder='Enter Mileage'/>
                                </div>
                            </div> 
                            <div class="form-group row ob_frm_row">
                                <div class="col-lg-12 p-0 text-center">
                                    <button className='continueBtn' onClick={handleShowRightModal}>Continue 
                                        <span>
                                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6.8151L0 1.8151L1.16667 0.648438L5 4.48177L8.83333 0.648438L10 1.8151L5 6.8151Z" fill="white"/></svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default mileage