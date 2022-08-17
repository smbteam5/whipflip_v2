import React from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'

function color() {
  return (
    <div>
        <Header2/>
        <StepBar/>
        <div className="colorWrap fieldWrap">
            <div className="container">
                <div className="itemSelected text-center">
                    <span>2014 Ford Focus</span>
                </div>
                <div className="offer_block noBordBtm offer_block_mobi">
                    <div className="ob_hd">
                        <h2>Vehicle Basics</h2> 
                    </div>
                    <div class="offer_block-body">
                        <form autocomplete="off" class="form" role="form">      
                            
                            <div class="form-group row ob_frm_row">
                            <div class="col-lg-12 p-0">
                                <label htmlFor="">Color</label>
                                <div className="chooseBlock selector row selectorRow rowSell chooseColor">
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl1" name="clr" class="selector-item_radio" defaultChecked  />
                                        <label for="sl1" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.25" cy="12" r="12" fill="black"/></svg>
                                            </span>
                                            <span>
                                                Black
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl2" name="clr" class="selector-item_radio" />
                                        <label for="sl2" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.75" cy="12" r="11.5" fill="white" stroke="black"/></svg>

                                            </span>
                                            <span>
                                            White
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl3" name="clr" class="selector-item_radio" />
                                        <label for="sl3" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" width="24" height="24" rx="12" fill="#D5D5DC"/></svg>

                                            </span>
                                            <span>
                                            Silver
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl4" name="clr" class="selector-item_radio" />
                                        <label for="sl4" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" width="24" height="24" rx="12" fill="#7B7B7B"/></svg>
                                            </span>
                                            <span>
                                            Gray
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="chooseBlock selector row selectorRow rowSell chooseColor">
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl11" name="clr" class="selector-item_radio" defaultChecked  />
                                        <label for="sl11" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" width="24" height="24" rx="12" fill="#356799"/></svg>
                                            </span>
                                            <span>
                                            Blue
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl12" name="clr" class="selector-item_radio" />
                                        <label for="sl12" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" width="24" height="24" rx="12" fill="#660900"/></svg>
                                            </span>
                                            <span>
                                            Maroon
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl23" name="clr" class="selector-item_radio" />
                                        <label for="sl23" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" width="24" height="24" rx="12" fill="#CC1200"/></svg>

                                            </span>
                                            <span>
                                            Red
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl24" name="clr" class="selector-item_radio" />
                                        <label for="sl24" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" width="24" height="24" rx="12" fill="#FFD147"/></svg>

                                            </span>
                                            <span>
                                            Yellow
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="chooseBlock selector row selectorRow rowSell chooseColor">
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl31" name="clr" class="selector-item_radio" defaultChecked  />
                                        <label for="sl31" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" width="24" height="24" rx="12" fill="#3D7B66"/></svg>

                                            </span>
                                            <span>
                                            Green
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl32" name="clr" class="selector-item_radio" />
                                        <label for="sl32" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" width="24" height="24" rx="12" fill="#5A4F3D"/></svg>

                                            </span>
                                            <span>
                                            Brown
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl33" name="clr" class="selector-item_radio" />
                                        <label for="sl33" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" width="24" height="24" rx="12" fill="#CC9900"/></svg>

                                            </span>
                                            <span>
                                            Gold
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl34" name="clr" class="selector-item_radio" />
                                        <label for="sl34" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" width="24" height="24" rx="12" fill="#E1C699"/></svg>

                                            </span>
                                            <span>
                                            Beige
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="chooseBlock selector row selectorRow rowSell chooseColor">
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl41" name="clr" class="selector-item_radio" defaultChecked  />
                                        <label for="sl41" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" width="24" height="24" rx="12" fill="#F99147"/></svg>

                                            </span>
                                            <span>
                                            Orange
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl42" name="clr" class="selector-item_radio" />
                                        <label for="sl42" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" width="24" height="24" rx="12" fill="#800080"/></svg>

                                            </span>
                                            <span>
                                            Purple
                                            </span>
                                        </label>
                                    </div>
                                    <div class="sellItemChoose">
                                        <input type="radio" id="sl43" name="clr" class="selector-item_radio" />
                                        <label for="sl43" class="selector-item_label labelflexCenter colorLabel">
                                            <span>                                           
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.25" width="24" height="24" rx="12" fill="url(#paint0_angular_2949_133530)"/>
<defs>
<radialGradient id="paint0_angular_2949_133530" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.25 12) rotate(90) scale(12)">
<stop stop-color="#FFFB00"/>
<stop offset="0.0870393" stop-color="#FFCF00"/>
<stop offset="0.166632" stop-color="#FFA600"/>
<stop offset="0.249394" stop-color="#FF7D00"/>
<stop offset="0.336078" stop-color="#FF1F00"/>
<stop offset="0.417225" stop-color="#F72394"/>
<stop offset="0.499675" stop-color="#8B1FBA"/>
<stop offset="0.59536" stop-color="#0023BA"/>
<stop offset="0.667317" stop-color="#007AC6"/>
<stop offset="0.749732" stop-color="#00B3D4"/>
<stop offset="0.83208" stop-color="#00B700"/>
<stop offset="0.917963" stop-color="#83CE01"/>
<stop offset="1" stop-color="#FFFB00"/>
</radialGradient>
</defs>
</svg>

                                            </span>
                                            <span>
                                            Other
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default color