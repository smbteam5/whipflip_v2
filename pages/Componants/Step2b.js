import React,{useState} from 'react'
import EasyStepModal from './EasyStepModal';

function Step2b() {
    const [status2, setStatus2] = useState(1);
    const [condition, setCondition] = useState(2);
    const [warning, setWarning] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const radioHandler2 = (status) => {
        setStatus2(status);
    };
    const conditionHandler = (condition) => {
        setCondition(condition);
    };
    const warningHandler = (warning) => {
        setWarning(warning);
    };
  return (
    <div>
        {
            show && 
            <EasyStepModal handleClose={handleClose} handleShow={handleShow} show={show}/>
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
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-lg-6 p-0">
                                        <div className={status2 === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio1" name="selector" className={status2 === 1 ? "selector-item_radio active": "selector-item_radio"} checked={status2 === 1} onClick={(e) => radioHandler2(1)} />
                                            <label for="radio1" class="selector-item_label">VIN #</label>  
                                        </div>
                                    </div>
                                    <div class="selecotr-item col-lg-6 pr-0">
                                        <div className={status2 === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio2" name="selector" class={status2 === 2 ? "selector-item_radio active": "selector-item_radio"} checked={status2 === 2} onClick={(e) => radioHandler2(2)}/>
                                            <label for="radio2" class="selector-item_label">License Plate</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetail">
                                        {
                                            status2 === 1 && 
                                            <div className='selectView vin'>
                                                <input type="text" placeholder='Enter Here'/>
                                                <span className='helpin'>
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
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                            <label htmlFor="">Any vehicle history issues or title brand? (e.g. accident, flood, etc.)</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-lg-6 p-0">
                                        <div className={condition === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio11" name="selector" className={condition === 1 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 1} onClick={(e) => conditionHandler(1)} />
                                            <label for="radio11" class="selector-item_label">Nope!</label>  
                                        </div>
                                    </div>
                                    <div class="selecotr-item col-lg-6 pr-0">
                                        <div className={condition === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="radio12" name="selector" class={condition === 2 ? "selector-item_radio active": "selector-item_radio"} checked={condition === 2} onClick={(e) => conditionHandler(2)}/>
                                            <label for="radio12" class="selector-item_label">Yes</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetail">
                                        {
                                            condition === 1 && 
                                            <div className='selectView vin'>
                                                <div className="checkIssues">
                                                    <h3>Check all that apply.</h3>
                                                    <div className="chooseIssues">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk1" />
                                                                    <label for="chk1">Doesn’t Start / Drive</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk2" />
                                                                    <label for="chk2">Engine Noise (Knocking)</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk3" />
                                                                    <label for="chk3">Engine Noise (Ticking)</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk4" />
                                                                    <label for="chk4">Transmission</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk5" />
                                                                    <label for="chk5">Battery / Charging</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk6" />
                                                                    <label for="chk6">Overheats</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk7" />
                                                                    <label for="chk7">Oil / Fluid Leak</label>
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
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">Any engine and/or drivability issues?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-lg-6 p-0">
                                        <input type="radio" id="radiono" name="selector__sel" class="selector-item_radio" defaultChecked  />
                                        <label for="radiono" class="selector-item_label">Nope!</label>
                                    </div>
                                    <div class="selecotr-item col-lg-6 pr-0">
                                        <input type="radio" id="radioyes" name="selector__sel" class="selector-item_radio" />
                                        <label for="radioyes" class="selector-item_label">Yes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                            <label htmlFor=""> Any dashboard warning lights or inoperable parts? (e.g. Check Engine, Airbag Light, A/C issue, etc.)</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-lg-6 p-0">
                                        <div className={warning === 1 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="war1" name="selectorw" className={warning === 1 ? "selector-item_radio active": "selector-item_radio"} checked={warning === 1} onClick={(e) => warningHandler(1)} />
                                            <label for="war1" class="selector-item_label">Nope!</label>  
                                        </div>
                                    </div>
                                    <div class="selecotr-item col-lg-6 pr-0">
                                        <div className={warning === 2 ? "si-wrap active": "si-wrap"} >
                                            <input type="radio" id="war2" name="selectorw" class={warning === 2 ? "selector-item_radio active": "selector-item_radio"} checked={warning === 2} onClick={(e) => warningHandler(2)}/>
                                            <label for="war2" class="selector-item_label">Yes</label>  
                                        </div>                                             
                                    </div>
                                </div>  
                                <div className="viewDetail">
                                        {
                                            warning === 1 && 
                                            <div className='selectView vin'>
                                                <div className="checkIssues">
                                                    <h3>Check all that apply.</h3>
                                                    <div className="chooseIssues">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk11" />
                                                                    <label for="chk11">Check Engine Light</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk12" />
                                                                    <label for="chk12">Airbag / SRS Light</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk13" />
                                                                    <label for="chk13">ABS</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk14" />
                                                                    <label for="chk14">Maintenance Required</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk15" />
                                                                    <label for="chk15">Low Oil / Pressure Light</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk16" />
                                                                    <label for="chk16">Transmission Light</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk17" />
                                                                    <label for="chk17">Odometer Not Visible</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk18" />
                                                                    <label for="chk18">A/C Blows Warm</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk19" />
                                                                    <label for="chk19">A/C Inoperable</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk10" />
                                                                    <label for="chk10">Windows / Sunroof Inoperable</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk21" />
                                                                    <label for="chk21">Radio / Navigation Inoperable</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="form-group check-group">
                                                                    <input type="checkbox" id="chk22" />
                                                                    <label for="chk22">Missing Parts</label>
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
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">Any aftermarket parts or modifications?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div class="selecotr-item col-lg-6 p-0">
                                        <input type="radio" id="mod1" name="selectormod" class="selector-item_radio" defaultChecked  />
                                        <label for="mod1" class="selector-item_label">Automatic</label>
                                    </div>
                                    <div class="selecotr-item col-lg-6 pr-0">
                                        <input type="radio" id="mod2" name="selectormod" class="selector-item_radio" />
                                        <label for="mod2" class="selector-item_label">Manual (i.e. Stick Shift)</label>
                                    </div>
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
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">                                        
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">Tire condition?</label>
                                <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="tc1" name="tc" class="selector-item_radio" defaultChecked  />
                                        <label for="tc1" class="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <img src="/images/plenty-thread.svg" alt="" />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>Plenty of Tread</h3>
                                                <span>Recently replaced tires</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="tc2" name="tc" class="selector-item_radio" />
                                        <label for="tc2" class="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <img src="/images/some-thread.svg" alt="" />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>Some Tread</h3>
                                                <span>Average wear, but passes inspection</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="tc3" name="tc" class="selector-item_radio" />
                                        <label for="tc3" class="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <img src="/images/bald.svg" alt="" />
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
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">                                        
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">How would you honestly rate your vehicle’s <b>EXTERIOR</b> condition?</label>
                                <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="cc1" name="cc" class="selector-item_radio" defaultChecked  />
                                        <label for="cc1" class="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <img src="/images/great.svg" alt="" />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>FLIPPIN’ GREAT!</h3>
                                                <span>Truly in showroom condition. May only have a few barely visible imperfections.</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="cc2" name="cc" class="selector-item_radio" />
                                        <label for="cc2" class="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <img src="/images/average.svg" alt="" />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>Just Average</h3>
                                                <span>A few SMALL dings, dents, or scratches on the body, but nothing needing significant repair.</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="cc3" name="cc" class="selector-item_radio" />
                                        <label for="cc3" class="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <img src="/images/rough.svg" alt="" />
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
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">How would you honestly rate your vehicle’s <b>INTERIOR</b> condition?</label>
                                <div className="chooseBlock selector row selectorRow rowSell tireconditions cosmicconditions">
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="cc11" name="cc11" class="selector-item_radio" defaultChecked  />
                                        <label for="cc11" class="selector-item_label labelflexCenter tclabel cclabel">
                                            <span>
                                                <img src="/images/great.svg" alt="" />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>Plenty of Tread</h3>
                                                <span>Recently replaced tires</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="cc22" name="cc11" class="selector-item_radio" />
                                        <label for="cc22" class="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <img src="/images/average.svg" alt="" />
                                            </span>
                                            <span className='bodyTc'>
                                                <h3>Some Tread</h3>
                                                <span>Average wear, but passes inspection</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose tirecondition">
                                        <input type="radio" id="cc33" name="cc11" class="selector-item_radio" />
                                        <label for="cc33" class="selector-item_label labelflexCenter tclabel">
                                            <span>
                                                <img src="/images/rough.svg" alt="" />
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
            <div className="initial_order_btn">
                <button className='initofferBtn' onClick={handleShow}>
                    Confirm My Offer
                </button>
            </div>
        </div>
    </div>
  )
}

export default Step2b