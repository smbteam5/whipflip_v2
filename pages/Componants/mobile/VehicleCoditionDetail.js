import React,{useState} from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'

function VehicleCoditionDetail() {
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
                    <h2>Vehicle Condition Details</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                            <label htmlFor="">Any vehicle history issues or title brand? (e.g. accident, flood, etc.)</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-6 p-0">
                                        <div className={status === 1 ? "si-wrap": "si-wrap"} >
                                            <input type="radio" id="radio1" name="selector" className={status === 1 ? "selector-item_radio active": "selector-item_radio"} checked={status === 1} onClick={(e) => radioHandler(1)} />
                                            <label htmlFor="radio1" className="selector-item_label">Nope!</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-6 pr-0">
                                        <div className={status === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio2" name="selector" className={status === 2 ? "selector-item_radio active": "selector-item_radio"} checked={status === 2} onClick={(e) => radioHandler(2)}/>
                                            <label htmlFor="radio2" className="selector-item_label">Yes</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetails">
                                       
                                        {
                                            status === 2 && 
                                            <div className="viewDetail">
                                                <div className='selectView vin'>
                                                <div className="checkIssues">
                                                    <h3>Select all that apply.</h3>
                                                    <div className="chooseIssues">
                                                        <ul className='ks-cboxtags row'>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox1" value="Engine Modification" />
                                                                <label htmlFor="checkbox1" className='labeltick'>
                                                                    <span className='labeltickspan'>Accident History</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox2" value="Drivetrain Modification" />
                                                                <label htmlFor="checkbox2" className='labeltick'>
                                                                    <span className='labeltickspan'>Structural Damage</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox3" value="Altered Suspension (Lowered)" />
                                                                <label htmlFor="checkbox3" className='labeltick'>
                                                                    <span className='labeltickspan'>Lemon/Mfctr. Buyback</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox4" value="Altered Suspension (Lifted)" />
                                                                <label htmlFor="checkbox4" className='labeltick'>
                                                                    <span className='labeltickspan'>Odometer Issue</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox5" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox5" className='labeltick'>
                                                                    <span className='labeltickspan'>Theft Recovered</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            {/* new */}
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox6" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox6" className='labeltick'>
                                                                    <span className='labeltickspan'>Previous Canadian</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox7" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox7" className='labeltick'>
                                                                    <span className='labeltickspan'>Theft</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox8" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox8" className='labeltick'>
                                                                    <span className='labeltickspan'>Repossession</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox9" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox9" className='labeltick'>
                                                                    <span className='labeltickspan'>Fire Damage</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox10" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox10" className='labeltick'>
                                                                    <span className='labeltickspan'>Flood Damage</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox11" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox11" className='labeltick'>
                                                                    <span className='labeltickspan'>Reconstructed</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox12" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox12" className='labeltick'>
                                                                    <span className='labeltickspan'>Salvage</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox13" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox13" className='labeltick'>
                                                                    <span className='labeltickspan'>Hail Damage</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox14" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox14" className='labeltick'>
                                                                    <span className='labeltickspan'>Police/Taxi</span>
                                                                    <span className='spanicon'>
                                                                        <span className="plus">
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </span>
                                                                        <span className="checked">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                </div>  
                                            </div>
                                        }
                                </div>  
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <button className='continueBtn'>Continue 
                                <span>
                                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6.8151L0 1.8151L1.16667 0.648438L5 4.48177L8.83333 0.648438L10 1.8151L5 6.8151Z" fill="white"/></svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VehicleCoditionDetail