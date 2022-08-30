import React, { useState } from 'react'
import Header2 from '../Header2'
import StepBar from './StepBar'
import Image from 'next/image'
function Loading() {
  return (
    <>
        <Header2/>
        <StepBar HasBorder/>
        <div className="loading_div">
            <div className="loadingText">
                <span>Your awesome initial offer is loading...</span>
            </div>
            <div className="car-movement">
                <div className="car">
                    <Image 
                        src="/images/truck.svg" 
                        alt="mail" 
                        title='mail'
                        width={300}
                        height={90}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Loading