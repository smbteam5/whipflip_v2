import React from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'

function SeeInitOffer() {
  return (
    <div>
        <Header2/>
        <StepBar/>
        <div className="container">
            <div className="itemSelected text-center">
                <span>2014 Ford Focus</span>
            </div>
            <div className="offer_block noBordBtm">
                <div className="initOffHd">
                    <h2> 
                        <span>See Your Initial Offer!</span>
                        <span>Where Can We Send It?</span>
                    </h2>
                </div>
                <div class="offer_block-body">
                    <form autocomplete="off" class="form" role="form">      
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-6 p-0">
                                <label htmlFor="">Zip Code</label>
                                <input type="text" placeholder='Enter Here'/>
                            </div>
                        </div>            
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-6 p-0">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Enter Here'/>
                            </div>
                        </div>   
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">Phone Number (We won’t bug you!)</label>
                                <div className="iptWrapperSio">
                                    <div className="iptLt">
                                        <input type="text" placeholder='Enter Here'/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">When are you selling your car?</label>
                                <div className="chooseBlock selector row selectorRow rowSell">
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl1" name="sl1" class="selector-item_radio" defaultChecked  />
                                        <label for="sl1" class="selector-item_label labelflexCenter labelforSellCar">
                                            <span>
                                            <svg width="48" height="48" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    ASAP!
                                    </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl2" name="sl1" class="selector-item_radio" />
                                        <label for="sl2" class="selector-item_label labelflexCenter labelforSellCar"><span>
                                        <svg width="48" height="48" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8403 4.125H18.5625C18.942 4.125 19.25 3.817 19.25 3.4375V0.6875C19.25 0.307656 18.942 0 18.5625 0H3.4375C3.05766 0 2.75 0.308 2.75 0.6875V3.4375C2.75 3.817 3.05766 4.125 3.4375 4.125H4.15972C4.39484 6.41094 5.77569 7.84816 6.90491 9.02309C7.62644 9.77419 8.25 10.4225 8.25 11C8.25 11.5775 7.62644 12.2258 6.90491 12.9769C5.77569 14.1518 4.3945 15.5891 4.15972 17.875H3.4375C3.05766 17.875 2.75 18.183 2.75 18.5625V21.3125C2.75 21.692 3.05766 22 3.4375 22H18.5625C18.942 22 19.25 21.692 19.25 21.3125V18.5625C19.25 18.183 18.942 17.875 18.5625 17.875H17.8441C17.6124 15.3546 16.1305 13.8937 15.0243 12.803C14.3124 12.101 13.75 11.5466 13.75 11C13.75 10.4225 14.3732 9.77419 15.0951 9.02309C16.2243 7.84816 17.6055 6.41094 17.8403 4.125Z" fill="#D1E0EF"/>
                                        <path d="M18.5625 0H3.4375C3.05766 0 2.75 0.308 2.75 0.6875V3.4375C2.75 3.817 3.05766 4.125 3.4375 4.125H18.5625C18.942 4.125 19.25 3.817 19.25 3.4375V0.6875C19.25 0.308 18.942 0 18.5625 0Z" fill="#4381C0"/>
                                        <path d="M18.5625 17.875H3.4375C3.05766 17.875 2.75 18.183 2.75 18.5625V21.3125C2.75 21.692 3.05766 22 3.4375 22H18.5625C18.942 22 19.25 21.692 19.25 21.3125V18.5625C19.25 18.183 18.942 17.875 18.5625 17.875Z" fill="#4381C0"/>
                                        </svg>

                                            </span>
                                            <span>A FEW WEEKS</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="chooseFuture">
                                    <a href="#" alt="IN THE FUTURE" title='IN THE FUTURE'>IN THE FUTURE</a>
                                </div>
                                <div class="initial_order_btn mt-30">
                                    <button class="initofferBtn">Get My Initial Offer</button>
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

export default SeeInitOffer