import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RulesOfRoadModal from './mobile/RulesOfRoadModal';
function Step3b() {
    const [show, setShow] = React.useState(false) 
    const [startDate, setStartDate] = useState(new Date());
    const [status2, setStatus2] = useState(1);
    const [condition, setCondition] = useState(2);
    const [warning, setWarning] = useState(1);
    const radioHandler2 = (status) => {
        setStatus2(status);
    };
    const conditionHandler = (condition) => {
        setCondition(condition);
    };
    const warningHandler = (warning) => {
        setWarning(warning);
    };
    const handleClose = () =>{
        setShow(false);
    }
    const handleOpen = (e) =>{
        e.preventDefault();
        setShow(true);
    }
  return (
    <div>
        {
            show &&
            <RulesOfRoadModal  handleClose={handleClose} show={show} clickFromWeb/>
        }
        <div className="offer_right">
            <div className="or_head">
                <h1>When Can We Drop Off Your Check?</h1>
            </div>
            <div className="offer_block">
                <div className="ob_hd">
                    <h2>Set Appointment to Sell</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <label htmlFor="">Enter pickup address</label>
                            <div className="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='Address'/>
                            </div>
                            <div className="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='Apt/Ste/Other'/>
                            </div>
                            <div className="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='City'/>
                            </div>    
                            <div className="form-row frmRow">
                                <div className="frmfldItem">
                                    <select className="form-control" id="user_time_zone" size="0">
                                        <option value="Hawaii">
                                            Select State
                                        </option>
                                        <option value="Alaska">
                                            (GMT-09:00) Alaska
                                        </option>
                                    </select>
                                </div>   
                                <div className="frmfldItem">
                                    <input type="text" placeholder='Zip Code'/>
                                </div> 
                            </div>                    
                        </div>            
                        <div className="form-group row ob_frm_row">
                            <div className="form-row frmRow">  
                                <div className="frmfldItem">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    <span className="calendarIcon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.16667 18.3307C3.70833 18.3307 3.31583 18.1677 2.98917 17.8416C2.66306 17.5149 2.5 17.1224 2.5 16.6641V4.9974C2.5 4.53906 2.66306 4.14684 2.98917 3.82073C3.31583 3.49406 3.70833 3.33073 4.16667 3.33073H5V1.66406H6.66667V3.33073H13.3333V1.66406H15V3.33073H15.8333C16.2917 3.33073 16.6842 3.49406 17.0108 3.82073C17.3369 4.14684 17.5 4.53906 17.5 4.9974V16.6641C17.5 17.1224 17.3369 17.5149 17.0108 17.8416C16.6842 18.1677 16.2917 18.3307 15.8333 18.3307H4.16667ZM4.16667 16.6641H15.8333V8.33073H4.16667V16.6641ZM4.16667 6.66406H15.8333V4.9974H4.16667V6.66406ZM4.16667 6.66406V4.9974V6.66406Z" fill="#353442"/>
                                        </svg>
                                    </span>
                                </div> 
                                <div className="frmfldItem">
                                    <select className="form-control" id="user_time_zone" size="0">
                                        <option value="Hawaii">
                                            Select Time
                                        </option>
                                        <option value="Alaska">
                                            (GMT-09:00) Alaska
                                        </option>
                                    </select>
                                </div> 
                            </div>                              
                        </div>
                    </form>
                </div>
            </div>
            <div className="offer_block">
                <div className="ob_hd">
                    <h2>Ownership Verification</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                            <label htmlFor="">Sole owner/only name on title?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <div className={condition === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio11" name="selector" className={condition === 1 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 1} onClick={(e) => conditionHandler(1)} />
                                            <label htmlFor="radio11" className="selector-item_label">Yes</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <div className={condition === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio12" name="selector" className={condition === 2 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 2} onClick={(e) => conditionHandler(2)}/>
                                            <label htmlFor="radio12" className="selector-item_label">No</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetail">
                                        {
                                            condition === 1 && 
                                            <div className='selectView vin'>
                                                <div className="checkIssues">
                                                    <div className="chooseIssues">
                                                        <div className="form-fld-grp">
                                                            <label className="frmfl_label">Owner</label>  
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='First name'/>
                                                                </div> 
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Last name'/>
                                                                </div> 
                                                                <div className="frmfldItem">
                                                                    <select className="form-control" id="user_time_zone" size="0">
                                                                        <option value="Hawaii">
                                                                            Suffix
                                                                        </option>
                                                                        <option value="Alaska">
                                                                            (GMT-09:00) Alaska
                                                                        </option>
                                                                    </select>
                                                                </div>                                                         
                                                            </div>
                                                        </div>  
                                                        <div className="form-fld-grp">
                                                            <label className="frmfl_label">Email</label>  
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Enter Here'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        <div className="form-fld-grp">
                                                            <label className="frmfl_label">Phone Number</label>  
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Enter Here'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>                                                    
                                        }
                                        {
                                            condition === 2 && 
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
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">Do you have the title to this vehicle?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <input type="radio" id="radiono" name="selector__sel" className="selector-item_radio" defaultChecked  />
                                        <label htmlFor="radiono" className="selector-item_label">Yes</label>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <input type="radio" id="radioyes" name="selector__sel" className="selector-item_radio" />
                                        <label htmlFor="radioyes" className="selector-item_label">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                            <label htmlFor=""> Is this vehicle financed?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <div className={warning === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="war1" name="selectorw" className={warning === 1 ? "selector-item_radio active": "selector-item_radio"} checked={warning === 1} onClick={(e) => warningHandler(1)} />
                                            <label htmlFor="war1" className="selector-item_label">Yes</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <div className={warning === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="war2" name="selectorw" className={warning === 2 ? "selector-item_radio active": "selector-item_radio"} checked={warning === 2} onClick={(e) => warningHandler(2)}/>
                                            <label htmlFor="war2" className="selector-item_label">No</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetail">
                                        {
                                            warning === 1 && 
                                            <div className='selectView vin'>
                                                <div className="checkIssues">
                                                    <div className="chooseIssues">
                                                        <div className="form-fld-grp">
                                                            <label className="frmfl_label">Which bank is it with?</label>  
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Choose Bank'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        <div className="form-fld-grp">
                                                            <label className="frmfl_label">How much is financed?</label>  
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Enter Amount'/>
                                                                </div> 
                                                                <div className="frmfldItem">
                                                                    <div className="form-group check-group frm_fld_chk">
                                                                        <input type="checkbox" id="chk11"/>
                                                                        <label htmlFor="chk11">Check Engine Light</label>
                                                                    </div>
                                                                </div>                                                      
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                            </div>                                                    
                                        }
                                        {
                                            warning === 2 && 
                                            <div className='selectView license_plate'>
                                                <input type="text" placeholder='Enter Here'/>
                                                <span className='helpin'>                                                    
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
            <div className="frmfldItem frmAgree">
                <div className="form-group check-group frm_fld_chk">
                    <input type="checkbox" id="chk111"/>
                    <label htmlFor="chk111">I agree to the terms of use.</label>
                </div>
            </div> 
            <div className="initial_order_btn">
                <button className='initofferBtn' onClick={handleOpen}>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Step3b