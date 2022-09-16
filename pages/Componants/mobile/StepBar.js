import React from 'react'

function StepBar({HasBorder}) {
  return (
    <div>
        <div className="container">
            <div className={HasBorder ? "stepper_wrapper hasBorder" : "stepper_wrapper"}>
                <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">            
                    <li className="form-stepper-active text-center form-stepper-list" step="1">
                        <a className="mx-0 mr-2" title='Initial Offer'>
                            <span className="form-stepper-circle">
                                <span>1</span>
                            </span>
                            {/* <div className="label">Initial Offer</div> */}
                        </a>
                    </li>
                    <li className="text-center form-stepper-list form-stepper-unfinished" step="2">
                        <a className="mx-2" title='Confirm Offer'>
                            <span className="form-stepper-circle text-muted">
                                <span>2</span>
                            </span>
                            {/* <div className="label text-muted">Confirm Offer</div> */}
                        </a>
                    </li>
                    <li className="text-center form-stepper-list form-stepper-unfinished" step="3" >
                        <a className="mx-0 ml-2" title='Sell Car'>
                            <span className="form-stepper-circle text-muted">
                                <span>3</span>
                            </span>
                            {/* <div className="label text-muted">Sell Car</div> */}
                        </a>
                    </li>
                </ul>
                <div className="stepper_list">
                    <div className="step_item">
                        <div className="step_item_text">
                            <span>Initial Offer</span>
                        </div>
                    </div>
                    <div className="step_item">
                        <div className="step_item_text">
                            <span>Confirm Offer</span>
                        </div>
                    </div>
                    <div className="step_item">
                        <div className="step_item_text">
                            <span>Sell Car</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StepBar