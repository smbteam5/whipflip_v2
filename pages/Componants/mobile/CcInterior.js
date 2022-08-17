import React,{useState} from 'react'
import Header2 from '../Header2'
import EasyModalMobi from './EasyModalMobi'
import StepBar from './StepBar'
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
                <div class="offer_block-body">
                        <form autocomplete="off" class="form" role="form">                                        
                            <div class="form-group row ob_frm_row">
                                <div class="col-lg-12 p-0">
                                    <label htmlFor="">How would you honestly rate your vehicle’s <b>INTERIOR</b> condition?</label>
                                    <div className="chooseBlock selectorRow rowSell tireconditions">
                                        <div class="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc1" name="tc" class="selector-item_radio" defaultChecked  />
                                            <label for="tc1" class="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                <img src="/images/great.svg" alt="GREAT" title='GREAT'/>
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>FLIPPIN’ GREAT!</h3>
                                                    <span>Truly in showroom condition. May only have a few barely visible imperfections.</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc2" name="tc" class="selector-item_radio" />
                                            <label for="tc2" class="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <img src="/images/average.svg" alt="Average" title='Average' />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>Just Average</h3>
                                                    <span>A few SMALL dings, dents, or scratches on the body, but nothing needing significant repair.</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc3" name="tc" class="selector-item_radio" />
                                            <label for="tc3" class="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <img src="/images/rough.svg" alt="Rough" title='Rough' />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>It’s Rough...</h3>
                                                    <span>Medium to large dents, several scratches, cracked bumper, and/or heavy rust.</span>
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