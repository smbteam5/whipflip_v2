import React,{useState} from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'
function McModification() {
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
                            <label htmlFor="">Any aftermarket parts or modifications?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-6 p-0">
                                        <div className={status === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio1" name="selector" className={status === 1 ? "selector-item_radio active": "selector-item_radio"} checked={status === 1} onClick={(e) => radioHandler(1)} />
                                            <label for="radio1" class="selector-item_label">Nope!</label>  
                                        </div>
                                    </div>
                                    <div class="selecotr-item col-6 pr-0">
                                        <div className={status === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio2" name="selector" class={status === 2 ? "selector-item_radio active": "selector-item_radio"} checked={status === 2} onClick={(e) => radioHandler(2)}/>
                                            <label for="radio2" class="selector-item_label">Yes</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetail">
                                        {
                                            status === 1 && 
                                            <div className='selectView vin'>
                                            <div className="checkIssues">
                                                <h3>Select all that apply.</h3>
                                                <div className="chooseIssues">
                                                    <ul className='ks-cboxtags row'>
                                                        <li className='col-6 p-0 ci_col'>
                                                            <input type="checkbox" id="checkbox1" value="Engine Modification" />
                                                            <label for="checkbox1" className='labeltick'>
                                                                <span className='labeltickspan'>Engine Modification</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <i class="fa-solid fa-plus"></i>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li className='col-6 p-0 ci_col'>
                                                            <input type="checkbox" id="checkbox2" value="Drivetrain Modification" />
                                                            <label for="checkbox2" className='labeltick'>
                                                                <span className='labeltickspan'>Drivetrain Modification</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <i class="fa-solid fa-plus"></i>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li className='col-6 p-0 ci_col'>
                                                            <input type="checkbox" id="checkbox3" value="Altered Suspension (Lowered)" />
                                                            <label for="checkbox3" className='labeltick'>
                                                                <span className='labeltickspan'>Altered Suspension (Lowered)</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <i class="fa-solid fa-plus"></i>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li className='col-6 p-0 ci_col'>
                                                            <input type="checkbox" id="checkbox4" value="Altered Suspension (Lifted)" />
                                                            <label for="checkbox4" className='labeltick'>
                                                                <span className='labeltickspan'>Altered Suspension (Lifted)</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <i class="fa-solid fa-plus"></i>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li className='col-6 p-0 ci_col'>
                                                            <input type="checkbox" id="checkbox5" value="Aftermarket Body Panels" />
                                                            <label for="checkbox5" className='labeltick'>
                                                                <span className='labeltickspan'>Aftermarket Body Panels</span>
                                                                <span className='spanicon'>
                                                                    <span className="plus">
                                                                        <i class="fa-solid fa-plus"></i>
                                                                    </span>
                                                                    <span className="checked">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                    {/* <div className="row">                                                        
                                                        <div className="col-6 p-0 ci_col">
                                                            <div class="form-group check-group chsItem">
                                                                <span for="chk7">Drivetrain Modification</span>
                                                                <span>
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 p-0 ci_col">
                                                            <div class="form-group check-group chsItem">
                                                                <span for="chk7">Altered Suspension (Lowered)</span>
                                                                <span>
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 p-0 ci_col">
                                                            <div class="form-group check-group chsItem">
                                                                <span for="chk7">Altered Suspension (Lifted)</span>
                                                                <span>
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 p-0 ci_col">
                                                            <div class="form-group check-group chsItem">
                                                                <span for="chk7">Aftermarket Body Panels</span>
                                                                <span>
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 p-0 ci_col">
                                                            <div class="form-group check-group chsItem">
                                                                <span for="chk7">Windows/ Sunroof Inoperable</span>
                                                                <span>
                                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0835 13.4193V7.91927H0.583496V6.08594H6.0835V0.585938H7.91683V6.08594H13.4168V7.91927H7.91683V13.4193H6.0835Z" fill="#747387"/></svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>                                             
                                        }
                                        {
                                            status === 2 && 
                                            <div className='selectView license_plate'>
                                                <input type="text" placeholder='Enter Here'/>
                                                <span className='helpin'>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6.3335 10.3359H7.66683V6.33594H6.3335V10.3359ZM7.00016 5.0026C7.18905 5.0026 7.3475 4.9386 7.4755 4.8106C7.60305 4.68305 7.66683 4.52483 7.66683 4.33594C7.66683 4.14705 7.60305 3.9886 7.4755 3.8606C7.3475 3.73305 7.18905 3.66927 7.00016 3.66927C6.81127 3.66927 6.65305 3.73305 6.5255 3.8606C6.3975 3.9886 6.3335 4.14705 6.3335 4.33594C6.3335 4.52483 6.3975 4.68305 6.5255 4.8106C6.65305 4.9386 6.81127 5.0026 7.00016 5.0026ZM7.00016 13.6693C6.07794 13.6693 5.21127 13.4942 4.40016 13.1439C3.58905 12.7942 2.8835 12.3193 2.2835 11.7193C1.6835 11.1193 1.20861 10.4137 0.858829 9.6026C0.508607 8.79149 0.333496 7.92483 0.333496 7.0026C0.333496 6.08038 0.508607 5.21372 0.858829 4.4026C1.20861 3.59149 1.6835 2.88594 2.2835 2.28594C2.8835 1.68594 3.58905 1.21083 4.40016 0.860604C5.21127 0.510826 6.07794 0.335938 7.00016 0.335938C7.92239 0.335938 8.78905 0.510826 9.60016 0.860604C10.4113 1.21083 11.1168 1.68594 11.7168 2.28594C12.3168 2.88594 12.7917 3.59149 13.1415 4.4026C13.4917 5.21372 13.6668 6.08038 13.6668 7.0026C13.6668 7.92483 13.4917 8.79149 13.1415 9.6026C12.7917 10.4137 12.3168 11.1193 11.7168 11.7193C11.1168 12.3193 10.4113 12.7942 9.60016 13.1439C8.78905 13.4942 7.92239 13.6693 7.00016 13.6693ZM7.00016 12.3359C8.47794 12.3359 9.73639 11.8166 10.7755 10.7779C11.8142 9.73883 12.3335 8.48038 12.3335 7.0026C12.3335 5.52483 11.8142 4.26638 10.7755 3.22727C9.73639 2.1886 8.47794 1.66927 7.00016 1.66927C5.52239 1.66927 4.26416 2.1886 3.2255 3.22727C2.18638 4.26638 1.66683 5.52483 1.66683 7.0026C1.66683 8.48038 2.18638 9.73883 3.2255 10.7779C4.26416 11.8166 5.52239 12.3359 7.00016 12.3359Z" fill="#8D8C9D"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        How do I find my License plate?
                                                    </span>
                                                </span>
                                            </div>                                                    
                                        }
                                </div>  
                            </div>
                        </div>
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0 text-center">
                                <button className='continueBtn'>Continue 
                                    <span>
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6.8151L0 1.8151L1.16667 0.648438L5 4.48177L8.83333 0.648438L10 1.8151L5 6.8151Z" fill="white"/></svg>
                                    </span>
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

export default McModification