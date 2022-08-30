import React,{useState} from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'
import Image from 'next/image'
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
                <div className="offer_block-body">
                        <form autoComplete="off" className="form" role="form">                                        
                            <div className="form-group row ob_frm_row">
                                <div className="col-lg-12 p-0">
                                    <label htmlFor="">Tire condition:</label>
                                    <div className="chooseBlock selectorRow rowSell tireconditions">
                                        <div className="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc1" name="tc" className="selector-item_radio" defaultChecked  />
                                            <label htmlFor="tc1" className="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <Image 
                                                        src="/images/plenty-thread.svg" 
                                                        alt="plenty" 
                                                        title='plenty'
                                                        width={50}
                                                        height={50}
                                                    />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>Plenty of Tread</h3>
                                                    <span>Recently replaced tires</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc2" name="tc" className="selector-item_radio" />
                                            <label htmlFor="tc2" className="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <Image 
                                                        src="/images/some-thread.svg" 
                                                        alt="thread" 
                                                        title='thread'
                                                        width={50}
                                                        height={50}
                                                    />
                                                </span>
                                                <span className='bodyTc'>
                                                    <h3>Some Tread</h3>
                                                    <span>Average wear, but passes inspection</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="sellItemChoose tirecondition tireconditionMobi">
                                            <input type="radio" id="tc3" name="tc" className="selector-item_radio" />
                                            <label htmlFor="tc3" className="selector-item_label labelflexCenter tclabel tclabelMobi">
                                                <span>
                                                    <Image 
                                                        src="/images/bald.svg" 
                                                        alt="bald" 
                                                        title='bald'
                                                        width={50}
                                                        height={50}
                                                    />
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