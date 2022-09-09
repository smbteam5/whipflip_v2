import React,{useState} from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'
import Image from 'next/image'
function McWarning() {
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
                            <label htmlFor="">Any dashboard warning lights or inoperable parts? (e.g. Check Engine, Airbag Light, A/C issue, etc.)</label>
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
                                                                      
                                        {
                                            status === 2 && 
                                            <div className="viewDetail">  
                                            <div className='selectView vin'>
                                            <div className="checkIssues">
                                                <h3>Select all that apply.</h3>
                                                <div className="chooseIssues">
                                                    <ul className="ks-cboxtags row">
                                                        <li className="col-6 p-0 ci_col">
                                                            <input type="checkbox" id="checkbox1" value="Check Engine " />
                                                            <label htmlFor="checkbox1" className='labeltick'>
                                                                <span>Check Engine </span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                    <Image 
                                                                        src="/images/check-engine.svg" 
                                                                        alt="Check Engine"
                                                                        title='Check Engine'
                                                                        width={22}
                                                                        height={22}
                                                                    />
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox2" value="Check Engine " />
                                                        <label htmlFor="checkbox2" className='labeltick'>
                                                                <span htmlFor="chk2">Airbag/SRS</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <Image 
                                                                            src="/images/air-bag.svg" 
                                                                            alt="Air Bag"
                                                                            title='Air Bag'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                              </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox3" value="Check Engine " />
                                                        <label htmlFor="checkbox3" className='labeltick'>
                                                                <span htmlFor="chk3">Transmission</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                    <Image 
                                                                            src="/images/transmission.svg" 
                                                                            alt="transmission"
                                                                            title='transmission'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                              </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox4" value="Check Engine " />
                                                        <label htmlFor="checkbox4" className='labeltick'>
                                                                <span htmlFor="chk4">ABS</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                    <Image 
                                                                        src="/images/abs.svg" 
                                                                        alt="abs"
                                                                        title='abs'
                                                                        width={22}
                                                                        height={22}
                                                                    />
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                             </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox5" value="Check Engine " />
                                                        <label htmlFor="checkbox5" className='labeltick'>
                                                                <span htmlFor="chk5">Maintenance Required</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <Image 
                                                                            src="/images/maintanance.svg" 
                                                                            alt="maintanance"
                                                                            title='maintanance'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox6" value="Check Engine " />
                                                        <label htmlFor="checkbox6" className='labeltick'>
                                                                <span htmlFor="chk6">Temperature/ Overheat</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <Image 
                                                                            src="/images/temp.svg" 
                                                                            alt="temp"
                                                                            title='temp'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                              </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox7" value="Check Engine " />
                                                        <label htmlFor="checkbox7" className='labeltick'>
                                                                <span htmlFor="chk7">Traction Control</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <Image 
                                                                            src="/images/tc.svg" 
                                                                            alt="tc"
                                                                            title='tc'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        {/*  */}
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox8" value="Check Engine " />
                                                        <label htmlFor="checkbox8" className='labeltick'>
                                                                <span htmlFor="chk7">Low Oil/Pressure</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <Image 
                                                                            src="/images/low-oil.svg" 
                                                                            alt="low oil"
                                                                            title='low oil'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                                </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox9" value="Check Engine " />
                                                        <label htmlFor="checkbox9" className='labeltick'>
                                                                <span htmlFor="chk7">A/C Inoperable</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                                </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox10" value="Check Engine " />
                                                        <label htmlFor="checkbox10" className='labeltick'>
                                                                <span htmlFor="chk7">Missing Parts</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                               </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox11" value="Check Engine " />
                                                        <label htmlFor="checkbox11" className='labeltick'>
                                                                <span htmlFor="chk7">Odometer Not Visible</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                                </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox12" value="Check Engine " />
                                                        <label htmlFor="checkbox12" className='labeltick'>
                                                                <span htmlFor="chk7">A/C Blows Warm</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                                </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox13" value="Check Engine " />
                                                        <label htmlFor="checkbox13" className='labeltick'>
                                                                <span htmlFor="chk7">Radio/ Navigation Inoperable</span>
                                                               
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                                </label>
                                                        </li>
                                                        <li className="col-6 p-0 ci_col">
                                                        <input type="checkbox" id="checkbox14" value="Check Engine " />
                                                        <label htmlFor="checkbox14" className='labeltick'>
                                                            <span htmlFor="chk7">Windows/ Sunroof Inoperable</span>
                                                            <span className='spanicon'>
                                                                <span className="plus">
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
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
                                        </div>           </div>                                            
                                        }                                        
                                
                                <div className="form-group row ob_frm_row">
                                            <div className="col-lg-12 p-0 text-center">
                                                <button className='continueBtn'>Continue 
                                                    <span>
                                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6.8151L0 1.8151L1.16667 0.648438L5 4.48177L8.83333 0.648438L10 1.8151L5 6.8151Z" fill="white"/></svg>
                                                    </span>
                                                </button>
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

export default McWarning