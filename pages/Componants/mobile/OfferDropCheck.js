import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header2 from '../Header2';
import RulesOfRoadModal from './RulesOfRoadModal';
import StepBar from './StepBar';

function OfferDropCheck() {
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
            <RulesOfRoadModal handleClose={handleClose} show={show}/>
        }
        <Header2/>
        <StepBar HasBorder/>
        <div className="offer_right">
            <div className="or_head">
                <h1>When Can We Drop Off Your Check?</h1>
            </div>
            <div className="offer_block">
                <div className="ob_hd">
                    <h2>Where should we arrive to buy?</h2> 
                </div>
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">
                        <div class="form-group row ob_frm_row">
                            <label htmlFor="">Enter pickup address</label>
                            <div class="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='Address'/>
                            </div>
                            <div class="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='Apt/Ste/Other'/>
                            </div>
                            <div class="col-lg-12 p-0 sacol">                                
                                <input type="text" placeholder='City'/>
                            </div>    
                            <div className="form-row frmRow">
                                <div class="frmfldItem">
                                    <select class="form-control" id="user_time_zone" size="0">
                                        <option value="Hawaii">
                                            Select State
                                        </option>
                                        <option value="Alaska">
                                            (GMT-09:00) Alaska
                                        </option>
                                    </select>
                                </div>   
                                <div class="frmfldItem">
                                    <input type="text" placeholder='Zip Code'/>
                                </div> 
                            </div>                    
                        </div>            
                        <div class="form-group row ob_frm_row">
                            <div className="form-row frmRow">          
                                <div class="frmfldItem">
                                    <label htmlFor="">When would you like to sell?</label>
                                    <div className="calPicker">
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <span className="calendarIcon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.16667 18.3307C3.70833 18.3307 3.31583 18.1677 2.98917 17.8416C2.66306 17.5149 2.5 17.1224 2.5 16.6641V4.9974C2.5 4.53906 2.66306 4.14684 2.98917 3.82073C3.31583 3.49406 3.70833 3.33073 4.16667 3.33073H5V1.66406H6.66667V3.33073H13.3333V1.66406H15V3.33073H15.8333C16.2917 3.33073 16.6842 3.49406 17.0108 3.82073C17.3369 4.14684 17.5 4.53906 17.5 4.9974V16.6641C17.5 17.1224 17.3369 17.5149 17.0108 17.8416C16.6842 18.1677 16.2917 18.3307 15.8333 18.3307H4.16667ZM4.16667 16.6641H15.8333V8.33073H4.16667V16.6641ZM4.16667 6.66406H15.8333V4.9974H4.16667V6.66406ZM4.16667 6.66406V4.9974V6.66406Z" fill="#353442"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div> 
                                <div class="frmfldItem">
                                    <select class="form-control" id="user_time_zone" size="0">
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
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                            <label htmlFor="">Sole owner/only name on title?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-6 p-0">
                                        <div className={condition === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio11" name="selector" className={condition === 1 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 1} onClick={(e) => conditionHandler(1)} />
                                            <label for="radio11" class="selector-item_label">Yes</label>  
                                        </div>
                                    </div>
                                    <div class="selecotr-item col-6 pr-0">
                                        <div className={condition === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio12" name="selector" class={condition === 2 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 2} onClick={(e) => conditionHandler(2)}/>
                                            <label for="radio12" class="selector-item_label">No</label>  
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
                                                            <label class="frmfl_label">Owner</label>  
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='First name'/>
                                                                </div> 
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='Last name'/>
                                                                </div> 
                                                                <div class="frmfldItem">
                                                                    <select class="form-control" id="user_time_zone" size="0">
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
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='Enter Here'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        <div className="form-fld-grp">
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
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
                                            <div className='selectView vin'>
                                                <div className="checkIssues">
                                                    <div className="chooseIssues">
                                                        <div className="form-fld-grp">
                                                            <label class="frmfl_label">Owner</label>  
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='Owner First Name'/>
                                                                </div> 
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='Owner Last Name'/>
                                                                </div> 
                                                                <div class="frmfldItem">
                                                                    <select class="form-control" id="user_time_zone" size="0">
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
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='Second Owner First Name'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        <div className="form-fld-grp">
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='Second Owner Last Name'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        {/*  */}
                                                        <div className="form-fld-grp">
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
                                                                    <select class="form-control" id="user_time_zone" size="0">
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
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='Confirm Email'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        <div className="form-fld-grp">
                                                            <div className="form-row frmRow">
                                                                <div class="frmfldItem">
                                                                    <input type="text" placeholder='Confirm Phone #'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>                                                   
                                        }
                                </div>  
                            </div>
                        </div>                        
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">Do you have the title to this vehicle?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-6 p-0">
                                        <input type="radio" id="radiono" name="selector__sel" class="selector-item_radio" defaultChecked  />
                                        <label for="radiono" class="selector-item_label">Yes</label>
                                    </div>
                                    <div class="selecotr-item col-6 pr-0">
                                        <input type="radio" id="radioyes" name="selector__sel" class="selector-item_radio" />
                                        <label for="radioyes" class="selector-item_label">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                            <label htmlFor=""> Is this vehicle financed?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-6 p-0">
                                        <div className={warning === 1 ? "si-wrap activesi": "si-wrap"} >
                                            <input type="radio" id="war1" name="selectorw" className={warning === 1 ? "selector-item_radio active": "selector-item_radio"} checked={warning === 1} onClick={(e) => warningHandler(1)} />
                                            <label for="war1" class="selector-item_label">Yes</label>  
                                        </div>
                                    </div>
                                    <div class="selecotr-item col-6 pr-0">
                                        <div className={warning === 2 ? "si-wrap": "si-wrap"} >
                                            <input type="radio" id="war2" name="selectorw" class={warning === 2 ? "selector-item_radio active": "selector-item_radio"} checked={warning === 2} onClick={(e) => warningHandler(2)}/>
                                            <label for="war2" class="selector-item_label">No</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                {
                                    warning === 1 && 
                                    <div className="viewDetail viewDetailMobi">
                                        <div className='selectView vin'>
                                            <div className="checkIssues">
                                                <div className="chooseIssues">
                                                    <div className="form-fld-grp">
                                                        <label class="frmfl_label">Which bank is it with?</label>  
                                                        <div className="form-row frmRow">
                                                            <div class="frmfldItem">
                                                                <input type="text" placeholder='Enter Here'/>
                                                            </div>                                                       
                                                        </div>
                                                    </div> 
                                                    <div className="form-fld-grp">
                                                        <label class="frmfl_label">Estimated loan payoff amount?</label>  
                                                        <div className="form-row frmRow">
                                                            <div class="frmfldItem">
                                                                <input type="text" placeholder='Enter Amount'/>
                                                            </div> 
                                                            <div class="frmfldItem">
                                                                <div class="form-group check-group frm_fld_chk mt-2">
                                                                    <input type="checkbox" id="chk11"/>
                                                                    <label for="chk11">I don’t know.</label>
                                                                </div>
                                                            </div>                                                      
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>           
                                    </div>                                         
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="frmfldItem frmAgree">
                <div class="form-group check-group frm_fld_chk">
                    <input type="checkbox" id="chk111"/>
                    <label for="chk111">I agree to the terms of use.</label>
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

export default OfferDropCheck