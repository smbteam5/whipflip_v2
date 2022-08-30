import React from 'react'

function StepBar({HasBorder}) {
  return (
    <div>
        <div className="container">
            <ul className={HasBorder ? "form-stepper form-stepper-horizontal text-center mx-auto pl-0 hasBorder" : "form-stepper form-stepper-horizontal text-center mx-auto pl-0"}>            
                <li className="form-stepper-active text-center form-stepper-list" step="1">
                    <a className="mx-2" title='Initial Offer'>
                        <span className="form-stepper-circle">
                            <span>1</span>
                        </span>
                        <div className="label">Initial Offer</div>
                    </a>
                </li>
                <li className="text-center form-stepper-list form-stepper-unfinished" step="2">
                    <a className="mx-2" title='Confirm Offer'>
                        <span className="form-stepper-circle text-muted">
                            <span>2</span>
                        </span>
                        <div className="label text-muted">Confirm Offer</div>
                    </a>
                </li>
                <li className="text-center form-stepper-list form-stepper-unfinished" step="3" >
                    <a className="mx-2" title='Sell Car'>
                        <span className="form-stepper-circle text-muted">
                            <span>3</span>
                        </span>
                        <div className="label text-muted">Sell Car</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default StepBar