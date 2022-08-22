import React, { useState } from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'

function Loading() {
  return (
    <>
        <Header2/>
        <StepBar HasBorder/>
        <div className="loading_div">
            <div className="loadingText">
                <span>Your awesome initial offer is loading...</span>
            </div>
            <div class="car-movement">
                <div class="car">
                    <img src="/images/truck.svg" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Loading