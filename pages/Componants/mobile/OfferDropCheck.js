import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header2 from '../Header2';
import RulesOfRoadModal from './RulesOfRoadModal';
import StepBar from './StepBar';
import Image from 'next/image'

function OfferDropCheck() {
    const [show, setShow] = React.useState(false)   
    const [startDate, setStartDate] = useState(null);
    const [status2, setStatus2] = useState(true);
    const [condition, setCondition] = useState(2);
    const [warning, setWarning] = useState(true);
    const handleOnBlur1 = ({ target: { value } }) => {
        const date = new Date(value);
        // if (isValid(date)) {
        //   console.log("date: %s", format(date, "dd/MM/yyyy"));
        // } else {
        //   console.log("value: %s", date);
        // }
      };
    const radioHandler2 = (status) => {
        setStatus2(status);
        console.log("status",status);
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
                                    <label htmlFor="">When would you like to sell?</label>
                                    <div className="calPicker">
                                        <DatePicker 
                                            selected={startDate} 
                                            onChange={(date) => setStartDate(date)} 
                                            placeholderText="mm/dd/yyyy"
                                            onBlur={handleOnBlur1}
                                        />
                                        <span className="calendarIcon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.16667 18.3307C3.70833 18.3307 3.31583 18.1677 2.98917 17.8416C2.66306 17.5149 2.5 17.1224 2.5 16.6641V4.9974C2.5 4.53906 2.66306 4.14684 2.98917 3.82073C3.31583 3.49406 3.70833 3.33073 4.16667 3.33073H5V1.66406H6.66667V3.33073H13.3333V1.66406H15V3.33073H15.8333C16.2917 3.33073 16.6842 3.49406 17.0108 3.82073C17.3369 4.14684 17.5 4.53906 17.5 4.9974V16.6641C17.5 17.1224 17.3369 17.5149 17.0108 17.8416C16.6842 18.1677 16.2917 18.3307 15.8333 18.3307H4.16667ZM4.16667 16.6641H15.8333V8.33073H4.16667V16.6641ZM4.16667 6.66406H15.8333V4.9974H4.16667V6.66406ZM4.16667 6.66406V4.9974V6.66406Z" fill="#353442"/>
                                            </svg>
                                        </span>
                                    </div>
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
            <div className="offer_block no-border">
                <div className="ob_hd">
                    <h2>Ownership Verification</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                            <label htmlFor="">Sole owner/only name on title?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-6 p-0">
                                        <div className={condition === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio11" name="selector" className={condition === 1 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 1} onClick={(e) => conditionHandler(1)} />
                                            <label htmlFor="radio11" className="selector-item_label">Yes</label>  
                                        </div>
                                    </div>
                                    <div className="selecotr-item col-6 pr-0">
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
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Owner First Name'/>
                                                                </div> 
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Owner Last Name'/>
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
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Confirm Email'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        <div className="form-fld-grp">
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Confirm Phone #'/>
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
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Owner First Name'/>
                                                                </div> 
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Owner Last Name'/>
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
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Second Owner First Name'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        <div className="form-fld-grp">
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Second Owner Last Name'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        {/*  */}
                                                        <div className="form-fld-grp">
                                                            <div className="form-row frmRow">
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
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
                                                                    <input type="text" placeholder='Confirm Email'/>
                                                                </div>                                                       
                                                            </div>
                                                        </div> 
                                                        <div className="form-fld-grp">
                                                            <div className="form-row frmRow">
                                                                <div className="frmfldItem">
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
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">Do you have the title to this vehicle?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-6 p-0">
                                        <div className={status2 === true ? "si-wrap activesi": "si-wrap"} >
                                            <input type="radio" id="radiono" name="selector__sel" className="selector-item_radio"  onClick={() => setStatus2(true)}/>
                                            <label htmlFor="radiono" className="selector-item_label">Yes</label>
                                        </div>                                        
                                    </div>
                                    <div className="selecotr-item col-6 pr-0">
                                        <div className={status2 === false ? "si-wrap activesi": "si-wrap"} >
                                            <input type="radio" id="radioyes" name="selector__sel" className="selector-item_radio" onClick={() => setStatus2(false)}/>
                                            <label htmlFor="radioyes" className="selector-item_label">No</label>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            status2 == false &&
                                <div className="form-group row ob_frm_row">
                                    <div className="col-lg-12 p-0">
                                        <label htmlFor=""> Is this vehicle financed?</label>
                                        <div className="chooseBlock selector row selectorRow">
                                            <div className="selecotr-item col-6 p-0">
                                                <div className={warning === true ? "si-wrap activesi": "si-wrap"} >
                                                    <input type="radio" id="war1" name="selectorw" className={warning === true ? "selector-item_radio active": "selector-item_radio"} checked={warning === true} onChange={() => setWarning(true)} />
                                                    <label htmlFor="war1" className="selector-item_label">Yes</label>  
                                                </div>
                                            </div>
                                            <div className="selecotr-item col-6 pr-0">
                                                <div className={warning === false ? "si-wrap": "si-wrap"} >
                                                    <input type="radio" id="war2" name="selectorw" className={warning === false ? "selector-item_radio active": "selector-item_radio"} checked={warning === false} onChange={() => setWarning(false)}/>
                                                    <label htmlFor="war2" className="selector-item_label">No</label>  
                                                </div>                                             
                                            </div>
                                        </div>  
                                        {
                                            warning === true &&
                                            <div className="viewDetail viewDetailMobi">
                                                <div className='selectView vin'>
                                                    <div className="checkIssues">
                                                        <div className="chooseIssues">
                                                            <div className="form-fld-grp">
                                                                <label className="frmfl_label">Which bank is it with?</label>  
                                                                <div className="form-row frmRow">
                                                                    <div className="frmfldItem">
                                                                        <input type="text" placeholder='Enter Here'/>
                                                                    </div>                                                       
                                                                </div>
                                                            </div> 
                                                            <div className="form-fld-grp">
                                                                <label className="frmfl_label">Estimated loan payoff amount?</label>  
                                                                <div className="form-row frmRow">
                                                                    <div className="frmfldItem">
                                                                        <input type="text" placeholder='Enter Amount'/>
                                                                    </div> 
                                                                    <div className="frmfldItem">
                                                                        <div className="form-group check-group frm_fld_chk mt-2">
                                                                            <input type="checkbox" id="chk11"/>
                                                                            <label htmlFor="chk11">I don’t know.</label>
                                                                        </div>
                                                                    </div>                                                      
                                                                </div>
                                                            </div>  
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className="doneProcess">
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
                                                                                   
                                        }
                                        {
                                             warning === false &&
                                             <>
                                                <div className="unable_to_reach">
                                                    <div className="ur_head text-center">
                                                        <Image src="/images/unable-to-reach.svg"
                                                            alt="Unable to reach"
                                                            title="Unable to reach"
                                                            className="img-fluid"
                                                            width={128} 
                                                            height={164} 
                                                        />
                                                    </div>
                                                    <div className="ur_body">
                                                        <h2>Sorry, but we’re unable to buy your car.</h2>
                                                        <p>If you do not have a physical title and your vehicle is not currently financed (Yes, we can buy financed cars!), you will need to get a clear title in your name before we can proceed. If you feel your situation is different (e.g. Estate sale or POA authorization), feel free to call us at (888) 349-3189.</p>
                                                    </div>                                                    
                                                </div>
                                                <div className="returnBtn">
                                                    <button className='retBtn'>
                                                        Return to the WhipFlip Website
                                                    </button>
                                                </div>
                                             </>
                                        }
                                    </div>
                                </div>
                        }
                        {
                            status2 == true &&
                            <>
                                <div className="doneProcess mt-3">
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
                            </>
                        }
                    </form>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default OfferDropCheck