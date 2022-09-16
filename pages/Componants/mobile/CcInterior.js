import React,{useState} from 'react'
import Header2 from '../Header2'
import EasyModalMobi from './EasyModalMobi'
import StepBar from './StepBar'
import Image from 'next/image'
function CcInterior() {
    const [show, setShow] = React.useState(false)
    const handleClose = () =>{
        setShow(false);
    }
    const handleOpen = (e) =>{
        e.preventDefault();
        setShow(true);
    }
  return (    
    <div>
        {
            show &&
            <EasyModalMobi show={show} handleClose={handleClose}/>
        }
        <Header2/>
        <StepBar/>
        <div className="container">
            <div className="itemSelected text-center">
                <span>Initial offer: $7,000</span>
            </div>
            <div className="offer_block noBordBtm offer_block_mobi">
                <div className="ob_hd">
                    <h2>Cosmetic Condition</h2> 
                </div>
                <div className="offer_block-body">
                        <form autoComplete="off" className="form" role="form">                                        
                            <div className="form-group row ob_frm_row">
                                <div className="col-lg-12 p-0">
                                    <label htmlFor="" className='labelForci'>How would you honestly rate your vehicle’s <b>INTERIOR</b> condition?</label>
                                    <div className="chooseBlock selectorRow rowSell tireconditions">
                                        <div className="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc1" name="tc" className="selector-item_radio" defaultChecked  />
                                            <label htmlFor="tc1" className="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                <Image src="/images/great.svg" 
                                                    alt="GREAT"
                                                    title='GREAT'
                                                    width={50}
                                                    height={50}
                                                 />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>FLIPPIN’ GREAT!</h3>
                                                    <span>It might not have the new car smell, but the interior is super clean and there are no signs of wear.</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc2" name="tc" className="selector-item_radio" />
                                            <label htmlFor="tc2" className="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <Image src="/images/average.svg" 
                                                        alt="average"
                                                        title='average'
                                                        width={50}
                                                        height={50}
                                                    />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>Just Average</h3>
                                                    <span>Some wear or small stains exists on the dash, seats, or armrests but nothing needing significant repair or replacing.</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc3" name="tc" className="selector-item_radio" />
                                            <label htmlFor="tc3" className="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <Image src="/images/rough.svg" 
                                                        alt="rough"
                                                        title='rough'
                                                        width={50}
                                                        height={50}
                                                    />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>It’s Rough...</h3>
                                                    <span>Tears, excessive wear, heavily stained seats and carpet, damaged interior parts, and/or significant odor.</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 p-0 mt-5">
                                    <button className='continue-btn' onClick={handleOpen}>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default CcInterior