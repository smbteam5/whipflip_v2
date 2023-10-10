import React from 'react'

const CosmeticCondition = () => {
  return (
    <div>
        <div className="offer_block">
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">                                        
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">How would you honestly rate your vehicle’s <b className='underline'>EXTERIOR</b> condition?</label>
                                <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="cc1" name="cc" className="selector-item_radio" defaultChecked  />
                                        <label htmlFor="cc1" className="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <Image 
                                                    src="/images/great.svg" 
                                                    alt="great" 
                                                    title='great'
                                                    width={50}
                                                    height={50}
                                                />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>FLIPPIN’ GREAT!</h3>
                                                <span>Truly in showroom condition. May only have a few barely visible imperfections.</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="cc2" name="cc" className="selector-item_radio" />
                                        <label htmlFor="cc2" className="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <Image 
                                                    src="/images/average.svg" 
                                                    alt="average" 
                                                    title='average'
                                                    width={50}
                                                    height={50}
                                                />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>Just Average</h3>
                                                <span>A few SMALL dings, dents, or scratches on the body, but nothing needing significant repair.</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="cc3" name="cc" className="selector-item_radio" />
                                        <label htmlFor="cc3" className="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <Image 
                                                    src="/images/rough.svg" 
                                                    alt="rough" 
                                                    title='rough'
                                                    width={50}
                                                    height={50}
                                                />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>It’s Rough...</h3>
                                                <span>Medium to large dents, several scratches, cracked bumper, and/or heavy rust.</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">How would you honestly rate your vehicle’s <b className='underline'>INTERIOR</b> condition?</label>
                                <div className="chooseBlock selector row selectorRow rowSell tireconditions cosmicconditions">
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="cc11" name="cc11" className="selector-item_radio" defaultChecked  />
                                        <label htmlFor="cc11" className="selector-item_label labelflexCenter tclabel cclabel">
                                            <span>
                                                <Image 
                                                    src="/images/great.svg" 
                                                    alt="great" 
                                                    title='great'
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
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="cc22" name="cc11" className="selector-item_radio" />
                                        <label htmlFor="cc22" className="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <Image 
                                                    src="/images/average.svg" 
                                                    alt="average" 
                                                    title='average'
                                                    width={50}
                                                    height={50}
                                                />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>Just Average</h3>
                                                <span>A little dirty but nothing a good detail can’t fix. Some wear and tear, but no need for significant repairs.</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="cc33" name="cc11" className="selector-item_radio" />
                                        <label htmlFor="cc33" className="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <Image 
                                                    src="/images/rough.svg" 
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
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default CosmeticCondition