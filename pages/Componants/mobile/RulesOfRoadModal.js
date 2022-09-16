import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
import Link from "next/link";
function RulesOfRoadModal({show,handleClose,clickFromWeb}) {
  return (
    <>
    <Modal show={show} onHide={handleClose} className={clickFromWeb ? " rules_of_road rules_of_road_web ":" rules_of_road "}>
        <Modal.Header className='ror_head' closeButton>
          <Modal.Title>
            <h1>Rules of the Road</h1>
            <p>We’ve created the easiest way ever to sell your car. Please make it as easy for us to buy it!</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='ror_Body'>
            <div className="rb_hd">
              <h2>Please read the following to proceed. If you are not ready to sell or disagree with the following below, do not proceed.</h2>
            </div>
            <div className="ror_list">
                <ul>
                  <li className='ror_item'>
                    <h3>Your offer is <b>$6,800</b>.</h3>
                    <p>This offer is non-negotiable and is based on final inspection. If there is a moderate to major issue that has not been disclosed, your offer may change.</p>
                  </li>
                  <li className='ror_item'>
                    <h3>We are <b>NOT</b> an appraisal service.</h3>
                    <p>We are traveling to purchase the vehicle and you are 100% ready to sell to us.</p>
                  </li>
                  <li className='ror_item'>
                    <h3>All ownership documents are ready.</h3>
                    <p>This includes ID, title (legally in your name on the front), or loan payoff quote.</p>
                  </li>
                  <li className='ror_item'>
                    <h3>Payment is made via company check through <b>Wells Fargo</b>.</h3>
                    <p>We do not carry cash as it is unsafe for our Car Concierges, who are buying tons of cars every day.</p>
                  </li>
                </ul>
                <div className="appointment">
                  <div className="apHd">
                    <span>Be on time for your appointment to sell:</span>
                    <h3>June 17 at 3:20PM</h3>
                  </div>
                  <div className="apText">
                    <p>If something should arise, please contact us immediately at: <span className='phoneNo'>(888) 349-3189</span></p>
                  </div>
                </div>
            </div>            
        </Modal.Body>
        <div className="ror_btns">
          <button className='agree_btn'>I Disagree</button>
          <Link href="/congrats">
           <button className='disagree_btn'>I Agree!</button>
          </Link>          
        </div>
    </Modal>
    </>
  )
}

export default RulesOfRoadModal