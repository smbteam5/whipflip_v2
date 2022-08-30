import React from 'react'
import ColorSelect from './ColorSelect'

function Step1() {
  return (
    <div>
        <div className="offer_right">
            <div className="or_head">
                <h1>Tell Us About Your Vehicle</h1>
            </div>
            <div className="offer_block">
                <div className="ob_hd">
                    <h2>Vehicle Basics</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">      
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-6 p-0">
                                <label htmlFor="">Mileage</label>
                                <input type="text" placeholder='Enter Mileage'/>
                            </div>
                        </div>            
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-6 p-0">
                                <label htmlFor="">Color</label>
                                <ColorSelect/>
                            </div>
                        </div>
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">Transmission</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <input type="radio" id="radio1" name="selector" className="selector-item_radio" defaultChecked  />
                                        <label htmlFor="radio1" className="selector-item_label">Automatic</label>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <input type="radio" id="radio2" name="selector" className="selector-item_radio" />
                                        <label htmlFor="radio2" className="selector-item_label">Manual (i.e. Stick Shift)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">Does the vehicle start and drive?</label>
                                <div className="chooseBlock selector row selectorRow">
                                    <div className="selecotr-item col-lg-6 p-0">
                                        <input type="radio" id="yes" name="selector1" className="selector-item_radio" defaultChecked  />
                                        <label htmlFor="yes" className="selector-item_label labelflexCenter">
                                            <span>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7925 9.13144H9.20731C8.91624 9.13144 8.66117 8.93675 8.58443 8.65599C8.50769 8.37523 8.62826 8.07784 8.87881 7.92973C11.3123 6.49182 12.5763 4.8145 12.743 2.80193C12.8011 2.10347 13.4232 1.54556 14.1294 1.5548C14.85 1.56632 15.5251 1.85515 16.0307 2.3682C16.5367 2.88172 16.8156 3.56174 16.8158 4.28293C16.8158 4.28302 16.8158 4.2831 16.8158 4.28319V4.50014C16.8158 6.26186 16.294 7.38514 15.3312 8.8417C15.2115 9.02264 15.0093 9.13144 14.7925 9.13144Z" fill="#AEC8E3"/>
<path d="M21.6372 9.85925C21.6372 8.74361 20.7296 7.83594 19.6139 7.83594H9.20726C9.09163 7.83594 8.97811 7.86696 8.87863 7.92583C8.14812 8.35775 7.41052 8.71332 6.81785 8.9991C6.61113 9.09875 6.41588 9.19289 6.23829 9.28166C6.01953 9.39106 5.88135 9.61463 5.88135 9.85925V18.1247C5.88135 18.3693 6.01953 18.5929 6.23829 18.7023C8.84748 20.0067 11.0164 20.1644 13.5456 20.1644C13.9372 20.1644 14.3378 20.1606 14.7497 20.1568C15.2052 20.1525 15.6762 20.148 16.17 20.148H18.2114C19.327 20.148 20.2347 19.2404 20.2347 18.1247C20.2347 17.7496 20.1321 17.398 19.9535 17.0965C20.5348 16.7406 20.9235 16.0996 20.9235 15.3695C20.9235 14.9944 20.8209 14.6428 20.6423 14.3413C21.2236 13.9855 21.6123 13.3445 21.6123 12.6144C21.6123 12.0896 21.4115 11.6109 21.0827 11.2511C21.4408 10.8737 21.6372 10.3816 21.6372 9.85925Z" fill="#D1E0EF"/>
<path d="M4.40914 16.7551V20.156H3.11768V16.7551C3.11768 16.3987 3.40698 16.1094 3.76341 16.1094C4.11984 16.1094 4.40914 16.3987 4.40914 16.7551Z" fill="#73C3FF"/>
<path d="M4.40914 16.7551V20.156H3.11768V16.7551C3.11768 16.3987 3.40698 16.1094 3.76341 16.1094C4.11984 16.1094 4.40914 16.3987 4.40914 16.7551Z" fill="#73C3FF"/>
<path d="M6.51831 7.83594H1.00804C0.651613 7.83594 0.362305 8.12525 0.362305 8.48167V19.5022C0.362305 19.8591 0.651613 20.1479 1.00804 20.1561H5.14073C5.93239 20.1479 6.61903 19.6912 6.95096 19.0274C7.08743 18.7557 7.16404 18.4488 7.16404 18.1246V8.48167C7.16404 8.1252 6.87473 7.83594 6.51831 7.83594Z" fill="#4381C0"/>
</svg>
</span>
<span>
Yes
</span>
                                        </label>
                                    </div>
                                    <div className="selecotr-item col-lg-6 pr-0">
                                        <input type="radio" id="no" name="selector1" className="selector-item_radio" />
                                        <label htmlFor="no" className="selector-item_label labelflexCenter"><span>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.8882 12.8686H9.30301C9.01194 12.8686 8.75688 13.0633 8.68013 13.344C8.60339 13.6248 8.72396 13.9222 8.97451 14.0703C11.408 15.5082 12.672 17.1855 12.8387 19.1981C12.8968 19.8965 13.5189 20.4544 14.2251 20.4452C14.9457 20.4337 15.6208 20.1448 16.1264 19.6318C16.6324 19.1183 16.9113 18.4383 16.9115 17.7171C16.9115 17.717 16.9115 17.7169 16.9115 17.7168V17.4999C16.9115 15.7381 16.3897 14.6149 15.4269 13.1583C15.3072 12.9774 15.105 12.8686 14.8882 12.8686Z" fill="#AEC8E3"/>
                                                    <path d="M21.7329 12.1408C21.7329 13.2564 20.8253 14.1641 19.7096 14.1641H9.30296C9.18733 14.1641 9.07381 14.133 8.97434 14.0742C8.24382 13.6422 7.50622 13.2867 6.91355 13.0009C6.70683 12.9013 6.51158 12.8071 6.33399 12.7183C6.11524 12.6089 5.97705 12.3854 5.97705 12.1408V3.87532C5.97705 3.6307 6.11524 3.40714 6.33399 3.29774C8.94318 1.99334 11.1121 1.8356 13.6413 1.8356C14.0329 1.8356 14.4335 1.83938 14.8454 1.84325C15.3009 1.84754 15.7719 1.85201 16.2657 1.85201H18.3071C19.4227 1.85201 20.3304 2.75964 20.3304 3.87532C20.3304 4.25044 20.2279 4.60201 20.0492 4.90352C20.6305 5.25939 21.0192 5.90036 21.0192 6.63048C21.0192 7.0056 20.9166 7.35717 20.738 7.65868C21.3193 8.01455 21.708 8.65551 21.708 9.38564C21.708 9.91037 21.5072 10.3891 21.1784 10.7489C21.5365 11.1263 21.7329 11.6184 21.7329 12.1408Z" fill="#D1E0EF"/>
                                                    <path d="M4.50485 5.24489V1.844H3.21338V5.24489C3.21338 5.60132 3.50269 5.89062 3.85911 5.89062C4.21554 5.89062 4.50485 5.60132 4.50485 5.24489Z" fill="#73C3FF"/>
                                                    <path d="M4.50485 5.24489V1.844H3.21338V5.24489C3.21338 5.60132 3.50269 5.89062 3.85911 5.89062C4.21554 5.89062 4.50485 5.60132 4.50485 5.24489Z" fill="#73C3FF"/>
                                                    <path d="M6.6145 14.1641H1.10423C0.747805 14.1641 0.458496 13.8748 0.458496 13.5183V2.49779C0.458496 2.14093 0.747805 1.85205 1.10423 1.84389H5.23692C6.02858 1.85205 6.71522 2.30881 7.04715 2.97264C7.18362 3.24428 7.26023 3.55121 7.26023 3.87537V13.5183C7.26023 13.8748 6.97093 14.1641 6.6145 14.1641Z" fill="#4381C0"/>
                                                </svg>
                                            </span>
                                            <span>No</span>
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
                    <h2>Where can we send your offer?</h2> 
                </div>
                <div className="offer_block-body">
                    <form autoComplete="off" className="form" role="form">      
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-6 p-0">
                                <label htmlFor="">Zip Code</label>
                                <input type="text" placeholder='Enter Here'/>
                            </div>
                        </div>            
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-6 p-0">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Enter Here'/>
                            </div>
                        </div>   
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">Phone Number (We won’t bug you!)</label>
                                <div className="iptWrapper">
                                    <div className="iptLt">
                                        <input type="text" placeholder='Enter Here'/>
                                    </div>
                                    <div className="iptrt">
                                        <span>We won’t bug you but may need to contact you for additional details quickly.</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="form-group row ob_frm_row">
                            <div className="col-lg-12 p-0">
                                <label htmlFor="">When are you selling your car?</label>
                                <div className="chooseBlock selector row selectorRow rowSell">
                                    <div className="sellItemChoose">
                                        <input type="radio" id="sl1" name="sl1" className="selector-item_radio" defaultChecked  />
                                        <label htmlFor="sl1" className="selector-item_label labelflexCenter">
                                            <span>
                                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6001 0.851562V3.35667C13.6001 3.71754 13.3166 4.00121 12.9556 4.00121H10.3774C10.0164 4.00121 9.73291 3.71754 9.73291 3.35667V0.851562H13.6001Z" fill="#D1E0EF"/>
<path d="M18.308 6.82904C18.1638 6.82904 18.0197 6.7812 17.9008 6.68436L15.8922 5.04718C15.7512 4.93187 15.6651 4.76201 15.6555 4.58006C15.6468 4.39828 15.7148 4.2207 15.8439 4.09163L16.8642 3.07129C17.5948 2.34065 18.8688 2.34116 19.5984 3.07079V3.07129H19.5989C19.964 3.43636 20.1649 3.92177 20.1649 4.4384C20.1649 4.95453 19.9635 5.44044 19.5984 5.80551L18.7637 6.64021C18.6385 6.76543 18.4735 6.82904 18.308 6.82904Z" fill="#D1E0EF"/>
<path d="M5.02486 6.82852C4.85936 6.82852 4.69437 6.7649 4.56915 6.63969L3.73445 5.80499C3.36938 5.43992 3.16797 4.954 3.16797 4.43804C3.16797 3.92124 3.36938 3.43533 3.73445 3.07026C4.46274 2.34197 5.73804 2.34013 6.46867 3.07093L7.48901 4.0911C7.61809 4.22018 7.68607 4.39776 7.67717 4.57954C7.66777 4.76148 7.5815 4.93135 7.44051 5.04666L5.43205 6.68383C5.31322 6.78068 5.16904 6.82852 5.02486 6.82852Z" fill="#D1E0EF"/>
<path d="M11.6665 2.625C6.32982 2.625 1.99854 6.95628 1.99854 12.293C1.99854 17.6297 6.32982 22.0039 11.6665 22.0039C17.0032 22.0039 21.3345 17.6297 21.3345 12.293C21.3345 6.95628 17.0032 2.625 11.6665 2.625Z" fill="#4381C0"/>
<path d="M18.1118 12.2891C18.1118 15.8469 15.2243 18.7344 11.6665 18.7344C8.10866 18.7344 5.22119 15.8469 5.22119 12.2891C5.22119 8.73122 8.10866 5.84375 11.6665 5.84375C15.2243 5.84375 18.1118 8.73122 18.1118 12.2891Z" fill="#D1E0EF"/>
<path d="M14.8892 0.644531C14.8892 1.0054 14.6057 1.28906 14.2446 1.28906H9.08838C8.72734 1.28906 8.44385 1.0054 8.44385 0.644531C8.44385 0.283493 8.72734 0 9.08838 0H14.2446C14.6057 0 14.8892 0.283493 14.8892 0.644531Z" fill="#4381C0"/>
<path d="M14.8892 12.2852C14.8892 12.646 14.6057 12.9297 14.2446 12.9297H11.6665C11.3055 12.9297 11.022 12.646 11.022 12.2852V9.70703C11.022 9.34599 11.3055 9.0625 11.6665 9.0625C12.0275 9.0625 12.311 9.34599 12.311 9.70703V11.6406H14.2446C14.6057 11.6406 14.8892 11.9241 14.8892 12.2852Z" fill="#4381C0"/>
</svg>

                                    </span>
                                    <span>
                                        Yes
                                    </span>
                                        </label>
                                    </div>
                                    <div className="sellItemChoose">
                                        <input type="radio" id="sl2" name="sl1" className="selector-item_radio" />
                                        <label htmlFor="sl2" className="selector-item_label labelflexCenter"><span>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8403 4.125H18.5625C18.942 4.125 19.25 3.817 19.25 3.4375V0.6875C19.25 0.307656 18.942 0 18.5625 0H3.4375C3.05766 0 2.75 0.308 2.75 0.6875V3.4375C2.75 3.817 3.05766 4.125 3.4375 4.125H4.15972C4.39484 6.41094 5.77569 7.84816 6.90491 9.02309C7.62644 9.77419 8.25 10.4225 8.25 11C8.25 11.5775 7.62644 12.2258 6.90491 12.9769C5.77569 14.1518 4.3945 15.5891 4.15972 17.875H3.4375C3.05766 17.875 2.75 18.183 2.75 18.5625V21.3125C2.75 21.692 3.05766 22 3.4375 22H18.5625C18.942 22 19.25 21.692 19.25 21.3125V18.5625C19.25 18.183 18.942 17.875 18.5625 17.875H17.8441C17.6124 15.3546 16.1305 13.8937 15.0243 12.803C14.3124 12.101 13.75 11.5466 13.75 11C13.75 10.4225 14.3732 9.77419 15.0951 9.02309C16.2243 7.84816 17.6055 6.41094 17.8403 4.125Z" fill="#D1E0EF"/>
                                        <path d="M18.5625 0H3.4375C3.05766 0 2.75 0.308 2.75 0.6875V3.4375C2.75 3.817 3.05766 4.125 3.4375 4.125H18.5625C18.942 4.125 19.25 3.817 19.25 3.4375V0.6875C19.25 0.308 18.942 0 18.5625 0Z" fill="#4381C0"/>
                                        <path d="M18.5625 17.875H3.4375C3.05766 17.875 2.75 18.183 2.75 18.5625V21.3125C2.75 21.692 3.05766 22 3.4375 22H18.5625C18.942 22 19.25 21.692 19.25 21.3125V18.5625C19.25 18.183 18.942 17.875 18.5625 17.875Z" fill="#4381C0"/>
                                        </svg>

                                            </span>
                                            <span>No</span>
                                        </label>
                                    </div>
                                    <div className="sellItemChoose">
                                        <input type="radio" id="sl3" name="sl1" className="selector-item_radio" />
                                        <label htmlFor="sl3" className="selector-item_label labelflexCenter">
                                            <span>Maybe Later...</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className="initial_order_btn">
                <button className='initofferBtn'>
                    Get My Initial Offer
                </button>
            </div>
        </div>
    </div>
  )
}

export default Step1