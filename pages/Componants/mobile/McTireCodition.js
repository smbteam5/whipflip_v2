import React,{useState} from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'
function McTireCodition() {
    const [status, setStatus] = React.useState(1)
    const radioHandler = (status) => {
        setStatus(status);
    };
  return (    
    <div>
        <Header2/>
        <StepBar/>
        <div className="container">
            <div className="itemSelected text-center">
                <span>Initial offer: $7,000</span>
            </div>
            <div className="offer_block noBordBtm offer_block_mobi">
                <div className="ob_hd">
                    <h2>Mechanical Condition</h2> 
                </div>
                <div class="offer_block-body">
                        <form autocomplete="off" class="form" role="form">                                        
                            <div class="form-group row ob_frm_row">
                                <div class="col-lg-12 p-0">
                                    <label htmlFor="">Tire condition:</label>
                                    <div className="chooseBlock selectorRow rowSell tireconditions">
                                        <div class="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc1" name="tc" class="selector-item_radio" defaultChecked  />
                                            <label for="tc1" class="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <img src="/images/plenty-thread.svg" alt="" />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>Plenty of Tread</h3>
                                                    <span>Recently replaced tires</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc2" name="tc" class="selector-item_radio" />
                                            <label for="tc2" class="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <img src="/images/some-thread.svg" alt="" />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>Some Tread</h3>
                                                    <span>Average wear, but passes inspection</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc3" name="tc" class="selector-item_radio" />
                                            <label for="tc3" class="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <img src="/images/bald.svg" alt="" />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>Bald</h3>
                                                    <span>Little tread left, steel belts showing</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default McTireCodition