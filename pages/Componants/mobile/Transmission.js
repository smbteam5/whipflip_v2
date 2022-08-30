import React from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'
import Image from 'next/image'
function Transmission() {
  return (
    <>
        <Header2/>
        <StepBar/>
        <div className="container">
            <div className="itemSelected text-center">
                <span>2014 Ford Focus</span>
            </div>
            <div className="offer_block noBordBtm offer_block_mobi">
                <div className="ob_hd">
                    <h2>Vehicle Basics</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">      
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">Transmission</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item chooseItem col-6 p-0">
                                        <input type="radio" id="radio1" name="selector" className="selector-item_radio" defaultChecked  />
                                        <label htmlFor="radio1" className="selector-item_label flex-selector"><span>
                                            <Image 
                                                src="/images/auto.svg" 
                                                alt="Automatic" 
                                                title='Automatic'
                                                width={50}
                                                height={50}
                                            />
                                            </span><span>Automatic</span>
                                        </label>
                                    </div>
                                    <div className="selecotr-item chooseItem col-6 pr-0">
                                        <input type="radio" id="radio2" name="selector" className="selector-item_radio" />
                                        <label htmlFor="radio2" className="selector-item_label flex-selector">
                                            <span>
                                                <Image 
                                                    src="/images/manual.svg" 
                                                    alt="manual" 
                                                    title='manual'
                                                    width={50}
                                                    height={50}
                                                />
                                            </span>
                                            <span>Manual (i.e. Stick Shift)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Transmission