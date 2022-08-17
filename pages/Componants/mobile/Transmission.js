import React from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'

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
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">      
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">Transmission</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item chooseItem col-6 p-0">
                                        <input type="radio" id="radio1" name="selector" class="selector-item_radio" defaultChecked  />
                                        <label for="radio1" class="selector-item_label flex-selector"><span><img src="/images/auto.svg" alt="Automatic" title='Automatic'/></span><span>Automatic</span></label>
                                    </div>
                                    <div class="selecotr-item chooseItem col-6 pr-0">
                                        <input type="radio" id="radio2" name="selector" class="selector-item_radio" />
                                        <label for="radio2" class="selector-item_label flex-selector"><span><img src="/images/manual.svg" alt="Manual" title='Manual'/></span><span>Manual (i.e. Stick Shift)</span></label>
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