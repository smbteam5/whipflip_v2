import React,{useState} from 'react'
import EasyStepModal from './EasyStepModal';
import Image from 'next/image'
import FindVinModal from './FindVinModal';
function Step2b() {
    const [status2, setStatus2] = useState(1);
    const [condition, setCondition] = useState(2);
    const [warning, setWarning] = useState(1);
    const [show, setShow] = useState(false);
    const [showfinal, setShowfinal] = useState(false);
    const [issues, setIssues] = useState(1);
    const [modify, setModify] = useState(1);
    const modifyHandler = (modify) => {
        setModify(modify);
        console.log("issue",modify);
    };
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const radioHandler2 = (status) => {
        setStatus2(status);
    };
    const conditionHandler = (condition) => {
        setCondition(condition);
    };
    const issueHandler = (issue) => {
        setIssues(issue);
        console.log("issue",issue);
    };
    const warningHandler = (warning) => {
        setWarning(warning);
    };
    const handlefinalOpen = (e) =>{
        e.preventDefault();
        setShowfinal(true);
    }
    const handleOpen = (e) =>{
        e.preventDefault();
        setShow(true);
    }
    const handlefinalClose = () => setShowfinal(false);
  return (
    <div>
        {
            show &&
            <FindVinModal handleClose={handleClose} show={show}/>
        }
        {
            showfinal && 
            <EasyStepModal handleClose={handlefinalClose} handleShow={handlefinalOpen} show={showfinal}/>
        }
        <div className="offer_right">
            <div className="or_head">
                <h1>Awesome Initial Offer: $7,000!</h1>
                <p>We just need a few more bits of information to make your offer as accurate as possible!</p>
            </div>
            <div className="offer_block">
                <div className="ob_hd">
                    <h2>Vehicle Information</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <div className={status2 === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio1" name="selector" className={status2 === 1 ? "selector-item_radio active": "selector-item_radio"} checked={status2 === 1} onClick={(e) => radioHandler2(1)} />
                                            <label htmlFor="radio1" className="selector-item_label">VIN #</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <div className={status2 === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio2" name="selector" className={status2 === 2 ? "selector-item_radio active": "selector-item_radio"} checked={status2 === 2} onClick={(e) => radioHandler2(2)}/>
                                            <label htmlFor="radio2" className="selector-item_label">License Plate</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetail">
                                        {
                                            status2 === 1 && 
                                            <div className='selectView vin'>
                                                <input type="text" placeholder='Enter Here'/>
                                                <span className='helpin' onClick={handleOpen}>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6.3335 10.3359H7.66683V6.33594H6.3335V10.3359ZM7.00016 5.0026C7.18905 5.0026 7.3475 4.9386 7.4755 4.8106C7.60305 4.68305 7.66683 4.52483 7.66683 4.33594C7.66683 4.14705 7.60305 3.9886 7.4755 3.8606C7.3475 3.73305 7.18905 3.66927 7.00016 3.66927C6.81127 3.66927 6.65305 3.73305 6.5255 3.8606C6.3975 3.9886 6.3335 4.14705 6.3335 4.33594C6.3335 4.52483 6.3975 4.68305 6.5255 4.8106C6.65305 4.9386 6.81127 5.0026 7.00016 5.0026ZM7.00016 13.6693C6.07794 13.6693 5.21127 13.4942 4.40016 13.1439C3.58905 12.7942 2.8835 12.3193 2.2835 11.7193C1.6835 11.1193 1.20861 10.4137 0.858829 9.6026C0.508607 8.79149 0.333496 7.92483 0.333496 7.0026C0.333496 6.08038 0.508607 5.21372 0.858829 4.4026C1.20861 3.59149 1.6835 2.88594 2.2835 2.28594C2.8835 1.68594 3.58905 1.21083 4.40016 0.860604C5.21127 0.510826 6.07794 0.335938 7.00016 0.335938C7.92239 0.335938 8.78905 0.510826 9.60016 0.860604C10.4113 1.21083 11.1168 1.68594 11.7168 2.28594C12.3168 2.88594 12.7917 3.59149 13.1415 4.4026C13.4917 5.21372 13.6668 6.08038 13.6668 7.0026C13.6668 7.92483 13.4917 8.79149 13.1415 9.6026C12.7917 10.4137 12.3168 11.1193 11.7168 11.7193C11.1168 12.3193 10.4113 12.7942 9.60016 13.1439C8.78905 13.4942 7.92239 13.6693 7.00016 13.6693ZM7.00016 12.3359C8.47794 12.3359 9.73639 11.8166 10.7755 10.7779C11.8142 9.73883 12.3335 8.48038 12.3335 7.0026C12.3335 5.52483 11.8142 4.26638 10.7755 3.22727C9.73639 2.1886 8.47794 1.66927 7.00016 1.66927C5.52239 1.66927 4.26416 2.1886 3.2255 3.22727C2.18638 4.26638 1.66683 5.52483 1.66683 7.0026C1.66683 8.48038 2.18638 9.73883 3.2255 10.7779C4.26416 11.8166 5.52239 12.3359 7.00016 12.3359Z" fill="#8D8C9D"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        How do I find my VIN?
                                                    </span>
                                                </span>
                                            </div>                                                    
                                        }
                                        {
                                            status2 === 2 && 
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
                    </form>
                </div>
            </div>
            <div className="offer_block">
                <div className="ob_hd">
                    <h2>Vehicle Condition Details</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                            <label htmlFor="">Any vehicle history issues or title brand? (e.g. accident, flood, etc.)</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <div className={condition === 1 ? "si-wrap": "si-wrap"} >
                                            <input type="radio" id="radio11" name="selector" className={condition === 1 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 1} onClick={(e) => conditionHandler(1)} />
                                            <label htmlFor="radio11" className="selector-item_label">Nope!</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <div className={condition === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio12" name="selector" className={condition === 2 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 2} onClick={(e) => conditionHandler(2)}/>
                                            <label htmlFor="radio12" className="selector-item_label">Yes</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetails">
                                        {
                                            condition === 1 && 
                                            <></>
                                        }
                                        {
                                            condition === 2 && 
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
                        {/*  */}
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                            <label htmlFor="">Any engine and/or drivability issues?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <div className={issues === 1 ? "si-wrap": "si-wrap"} >
                                            <input type="radio" id="radiox1" name="selector__selxx" className={issues === 1 ? "selector-item_radio active": "selector-item_radio"} checked={issues === 1} onChange={(e) => issueHandler(1)} />
                                            <label htmlFor="radiox1" className="selector-item_label">Nope!</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <div className={issues === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radiox2" name="selector__selxx" className={issues === 2 ? "selector-item_radio active": "selector-item_radio"} checked={issues === 2} onChange={(e) => issueHandler(2)}/>
                                            <label htmlFor="radiox2" className="selector-item_label">Yes</label>
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetails">
                                       
                                        {
                                            issues === 2 && 
                                            <div className="viewDetail">
                                                <div className='selectView vin'>
                                                <div className="checkIssues">
                                                    <h3>Select all that apply.</h3>
                                                    <div className="chooseIssues">
                                                        <ul className='ks-cboxtags row'>
                                                            <li className='col-6 p-0 ci_col'>
                                                                <input type="checkbox" id="checkbox1is" value="Engine Modification" />
                                                                <label htmlFor="checkbox1is" className='labeltick'>
                                                                    <span className='labeltickspan'>Doesn’t Start/Drive</span>
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
                                                                <input type="checkbox" id="checkbox2is" value="Drivetrain Modification" />
                                                                <label htmlFor="checkbox2is" className='labeltick'>
                                                                    <span className='labeltickspan'>Battery/ Charging</span>
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
                                                                <input type="checkbox" id="checkbox3is" value="Altered Suspension (Lowered)" />
                                                                <label htmlFor="checkbox3is" className='labeltick'>
                                                                    <span className='labeltickspan'>Engine Noise (Ticking)</span>
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
                                                                <input type="checkbox" id="checkbox4is" value="Altered Suspension (Lifted)" />
                                                                <label htmlFor="checkbox4is" className='labeltick'>
                                                                    <span className='labeltickspan'>Engine Noise (Knocking)</span>
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
                                                                <input type="checkbox" id="checkbox5is" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox5is" className='labeltick'>
                                                                    <span className='labeltickspan'>Oil/Fluid Leak</span>
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
                                                                <input type="checkbox" id="checkbox6is" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox6is" className='labeltick'>
                                                                    <span className='labeltickspan'>Overheats</span>
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
                                                                <input type="checkbox" id="checkbox7is" value="Aftermarket Body Panels" />
                                                                <label htmlFor="checkbox7is" className='labeltick'>
                                                                    <span className='labeltickspan'>Transmission</span>
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
                        
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                            <label htmlFor=""> Any dashboard warning lights or inoperable parts? (e.g. Check Engine, Airbag Light, A/C issue, etc.)</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <div className={warning === 1 ? "si-wrap": "si-wrap"} >
                                            <input type="radio" id="war1" name="selectorw" className={warning === 1 ? "selector-item_radio active": "selector-item_radio"} checked={warning === 1} onClick={(e) => warningHandler(1)} />
                                            <label htmlFor="war1" className="selector-item_label">Nope!</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <div className={warning === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="war2" name="selectorw" className={warning === 2 ? "selector-item_radio active": "selector-item_radio"} checked={warning === 2} onClick={(e) => warningHandler(2)}/>
                                            <label htmlFor="war2" className="selector-item_label">Yes</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetails">
                                        {
                                            warning === 1 && 
                                            <></>                                                  
                                        }
                                        {
                                            warning === 2 && 
                                            <div className="viewDetail">
                                            <div className='selectView vin'>
                                                <div className="checkIssues">
                                                    <h3>Check all that apply.</h3>
                                                    <div className="chooseIssues">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk11" />
                                                                    <label htmlFor="chk11">
                                                                        <span className="opicon">
                                                                            <Image 
                                                                                src="/images/check-engine.svg" 
                                                                                alt="Check Engine"
                                                                                title='Check Engine'
                                                                                width={22}
                                                                                height={22}
                                                                            />
                                                                        </span>
                                                                        Check Engine Light
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk12" />
                                                                    <label htmlFor="chk12">
                                                                        <span className="opicon">
                                                                            <Image 
                                                                                src="/images/air-bag.svg" 
                                                                                alt="Check Engine"
                                                                                title='Check Engine'
                                                                                width={22}
                                                                                height={22}
                                                                            />
                                                                        </span>
                                                                        Airbag / SRS Light</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk13" />
                                                                    <label htmlFor="chk13">
                                                                    <span className="opicon">
                                                                        <Image 
                                                                            src="/images/abs.svg" 
                                                                            alt="Check Engine"
                                                                            title='Check Engine'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                    ABS</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk14" />
                                                                    <label htmlFor="chk14">
                                                                    <span className="opicon">
                                                                        <Image 
                                                                            src="/images/maintanance.svg"
                                                                            alt="Check Engine"
                                                                            title='Check Engine'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                        Maintenance Required</label>
                                                                </div>
                                                            </div>
                                                            {/*  */}
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk151" />                                                                    
                                                                    <label htmlFor="chk151">
                                                                    <span className="opicon">
                                                                        <Image 
                                                                            src="/images/tc.svg"
                                                                            alt="Check Engine"
                                                                            title='Check Engine'
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </span>
                                                                        Traction Control Light</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk152" />
                                                                    <label htmlFor="chk152">
                                                                        <span className="opicon">
                                                                            <Image 
                                                                                src="/images/temp.svg"
                                                                                alt="Check Engine"
                                                                                title='Check Engine'
                                                                                width={22}
                                                                                height={22}
                                                                            />
                                                                        </span>
                                                                        Temperature / Overheat Light</label>
                                                                </div>
                                                            </div>                                                           
                                                            {/*  */}
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk153" />                                                                        
                                                                    <label htmlFor="chk153"> <span className='opicon'><Image 
                                                                            src="/images/low-oil.svg"
                                                                            alt="Check Engine"
                                                                            title='Check Engine'
                                                                            width={22}
                                                                            height={22}
                                                                        /></span> Low Oil / Pressure Light</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk161" />
                                                                    <label htmlFor="chk161"><span className='opicon'><Image 
                                                                            src="/images/transmission.svg"
                                                                            alt="Check Engine"
                                                                            title='Check Engine'
                                                                            width={22}
                                                                            height={22}
                                                                        /></span>Transmission Light</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk17" />
                                                                    <label htmlFor="chk17">Odometer Not Visible</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk18" />
                                                                    <label htmlFor="chk18">A/C Blows Warm</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk19" />
                                                                    <label htmlFor="chk19">A/C Inoperable</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk10" />
                                                                    <label htmlFor="chk10">Windows / Sunroof Inoperable</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk21" />
                                                                    <label htmlFor="chk21">Radio / Navigation Inoperable</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group check-group">
                                                                    <input type="checkbox" id="chk22" />
                                                                    <label htmlFor="chk22">Missing Parts</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>           </div>                                         
                                        }
                                </div>  
                            </div>
                        </div> 
                        
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                            <label htmlFor="">Any aftermarket parts or modifications?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <div className={modify === 1 ? "si-wrap": "si-wrap"} >
                                            <input type="radio" id="selmod1" name="selector__mod" className={modify === 1 ? "selector-item_radio active": "selector-item_radio"} checked={modify === 1} onChange={(e) => modifyHandler(1)} />
                                            <label htmlFor="selmod1" className="selector-item_label">Nope!</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <div className={modify === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="selmod2" name="selector__mod" className={modify === 2 ? "selector-item_radio active": "selector-item_radio"} checked={modify === 2} onChange={(e) => modifyHandler(2)}/>
                                            <label htmlFor="selmod2" className="selector-item_label">Yes</label>
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetails">
                                       
                                        {
                                            modify === 2 && 
                                            <div className="viewDetail">
                                        <div className='selectView vin'>
                                            <div className="checkIssues">
                                                <h3>Select all that apply.</h3>
                                                <div className="chooseIssues">
                                                    <ul className='ks-cboxtags row'>
                                                        <li className='col-6 p-0 ci_col'>
                                                            <input type="checkbox" id="checkbox1_mod" value="Engine Modification" />
                                                            <label htmlFor="checkbox1_mod" className='labeltick'>
                                                                <span className='labeltickspan'>Engine Modification</span>
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
                                                            <input type="checkbox" id="checkbox2_mod" value="Drivetrain Modification" />
                                                            <label htmlFor="checkbox2_mod" className='labeltick'>
                                                                <span className='labeltickspan'>Drivetrain Modification</span>
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
                                                            <input type="checkbox" id="checkbox3_mod" value="Altered Suspension (Lowered)" />
                                                            <label htmlFor="checkbox3_mod" className='labeltick'>
                                                                <span className='labeltickspan'>Altered Suspension (Lowered)</span>
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
                                                            <input type="checkbox" id="checkbox4_mod" value="Altered Suspension (Lifted)" />
                                                            <label htmlFor="checkbox4_mod" className='labeltick'>
                                                                <span className='labeltickspan'>Altered Suspension (Lifted)</span>
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
                                                            <input type="checkbox" id="checkbox5_mod" value="Aftermarket Body Panels" />
                                                            <label htmlFor="checkbox5_mod" className='labeltick'>
                                                                <span className='labeltickspan'>Aftermarket Body Panels</span>
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
                    </form>
                </div>
            </div>            
            <div className="offer_block">
                <div className="ob_hd">
                    <h2>Tire Condition</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">                                        
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">Tire condition?</label>
                                <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="tc1" name="tc" className="selector-item_radio" defaultChecked  />
                                        <label htmlFor="tc1" className="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <Image 
                                                    src="/images/plenty-thread.svg" 
                                                    alt="plenty-thread" 
                                                    title='plenty-thread'
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
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="tc2" name="tc" className="selector-item_radio" />
                                        <label htmlFor="tc2" className="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <Image 
                                                    src="/images/some-thread.svg" 
                                                    alt="some-thread" 
                                                    title='some thread'
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
                                    <div className="sellItemChoose tirecondition">
                                        <input type="radio" id="tc3" name="tc" className="selector-item_radio" />
                                        <label htmlFor="tc3" className="selector-item_label labelflexCenter tclabel">
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
            <div className="offer_block">
                <div className="ob_hd">
                    <h2>Cosmetic Condition</h2> 
                </div>
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
            <div className="initial_order_btn">
                <button className='initofferBtn' onClick={handlefinalOpen}>
                    Confirm My Offer
                </button>
            </div>
        </div>
    </div>
  )
}

export default Step2b