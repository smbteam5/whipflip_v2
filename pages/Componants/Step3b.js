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
                                        <div className={condition === 2 ? "si-wrap": "si-wrap"} >
                                            <input type="radio" id="radio12" name="selector" className={condition === 2 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 2} onClick={(e) => conditionHandler(2)}/>
                                            <label htmlFor="radio12" className="selector-item_label">No</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetails">
                                        {
                                            condition === 1 && 
                                            <div className="viewDetail">
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
                                                                    <div className="frmfldItem suffFld">
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
                                            </div>                                                 
                                        }
                                        {
                                            condition === 2 && 
                                            <></>                                              
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
                                                                        <label htmlFor="chk11">I dont know</label>
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