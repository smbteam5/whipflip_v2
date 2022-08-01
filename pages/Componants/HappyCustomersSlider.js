import React from 'react'
import Slider from "react-slick";
import Head from 'next/head';
function HappyCustomersSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
  return (
    <div>
         <Head>
            <>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </>
        </Head>
        <div className="happy_customers_list">
            <Slider {...settings}>
                <div className="hc_item">
                <div className="hcItemIn">
                <div className="hc_head">
                    <div className="hcIn">
                    <h2>James Foga</h2>
                    </div>
                    <div className="hcstars">
                    <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 17.27L18.68 21L17.04 13.97L22.5 9.24L15.31 8.63L12.5 2L9.69 8.63L2.5 9.24L7.96 13.97L6.32 21L12.5 17.27Z" fill="#FFC000"/>
                        <path d="M36.5 17.27L42.68 21L41.04 13.97L46.5 9.24L39.31 8.63L36.5 2L33.69 8.63L26.5 9.24L31.96 13.97L30.32 21L36.5 17.27Z" fill="#FFC000"/>
                        <path d="M60.5 17.27L66.68 21L65.04 13.97L70.5 9.24L63.31 8.63L60.5 2L57.69 8.63L50.5 9.24L55.96 13.97L54.32 21L60.5 17.27Z" fill="#FFC000"/>
                        <path d="M84.5 17.27L90.68 21L89.04 13.97L94.5 9.24L87.31 8.63L84.5 2L81.69 8.63L74.5 9.24L79.96 13.97L78.32 21L84.5 17.27Z" fill="#FFC000"/>
                        <path d="M108.5 17.27L114.68 21L113.04 13.97L118.5 9.24L111.31 8.63L108.5 2L105.69 8.63L98.5 9.24L103.96 13.97L102.32 21L108.5 17.27Z" fill="#FFC000"/>
                    </svg>
                    </div>
                </div>
                <div className="hc_body">
                    <p>Great way to sell your vehicle. The whole deal took about 20 min.I was offered a fair price. I receive a check on the spot. All the people I spoke with were polite and...More</p>
                </div>
                </div>
                </div>
                <div className="hc_item">
                <div className="hcItemIn">
                <div className="hc_head">
                    <div className="hcIn">
                    <h2>James Foga</h2>
                    </div>
                    <div className="hcstars">
                    <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 17.27L18.68 21L17.04 13.97L22.5 9.24L15.31 8.63L12.5 2L9.69 8.63L2.5 9.24L7.96 13.97L6.32 21L12.5 17.27Z" fill="#FFC000"/>
                        <path d="M36.5 17.27L42.68 21L41.04 13.97L46.5 9.24L39.31 8.63L36.5 2L33.69 8.63L26.5 9.24L31.96 13.97L30.32 21L36.5 17.27Z" fill="#FFC000"/>
                        <path d="M60.5 17.27L66.68 21L65.04 13.97L70.5 9.24L63.31 8.63L60.5 2L57.69 8.63L50.5 9.24L55.96 13.97L54.32 21L60.5 17.27Z" fill="#FFC000"/>
                        <path d="M84.5 17.27L90.68 21L89.04 13.97L94.5 9.24L87.31 8.63L84.5 2L81.69 8.63L74.5 9.24L79.96 13.97L78.32 21L84.5 17.27Z" fill="#FFC000"/>
                        <path d="M108.5 17.27L114.68 21L113.04 13.97L118.5 9.24L111.31 8.63L108.5 2L105.69 8.63L98.5 9.24L103.96 13.97L102.32 21L108.5 17.27Z" fill="#FFC000"/>
                    </svg>
                    </div>
                </div>
                <div className="hc_body">
                    <p>Great way to sell your vehicle. The whole deal took about 20 min.I was offered a fair price. I receive a check on the spot. All the people I spoke with were polite and...More</p>
                </div>
                </div>
                </div>
                <div className="hc_item">
                <div className="hcItemIn">
                <div className="hc_head">
                    <div className="hcIn">
                    <h2>James Foga</h2>
                    </div>
                    <div className="hcstars">
                    <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 17.27L18.68 21L17.04 13.97L22.5 9.24L15.31 8.63L12.5 2L9.69 8.63L2.5 9.24L7.96 13.97L6.32 21L12.5 17.27Z" fill="#FFC000"/>
                        <path d="M36.5 17.27L42.68 21L41.04 13.97L46.5 9.24L39.31 8.63L36.5 2L33.69 8.63L26.5 9.24L31.96 13.97L30.32 21L36.5 17.27Z" fill="#FFC000"/>
                        <path d="M60.5 17.27L66.68 21L65.04 13.97L70.5 9.24L63.31 8.63L60.5 2L57.69 8.63L50.5 9.24L55.96 13.97L54.32 21L60.5 17.27Z" fill="#FFC000"/>
                        <path d="M84.5 17.27L90.68 21L89.04 13.97L94.5 9.24L87.31 8.63L84.5 2L81.69 8.63L74.5 9.24L79.96 13.97L78.32 21L84.5 17.27Z" fill="#FFC000"/>
                        <path d="M108.5 17.27L114.68 21L113.04 13.97L118.5 9.24L111.31 8.63L108.5 2L105.69 8.63L98.5 9.24L103.96 13.97L102.32 21L108.5 17.27Z" fill="#FFC000"/>
                    </svg>
                    </div>
                </div>
                <div className="hc_body">
                    <p>Great way to sell your vehicle. The whole deal took about 20 min.I was offered a fair price. I receive a check on the spot. All the people I spoke with were polite and...More</p>
                </div>
                </div>
                </div>
                <div className="hc_item">
                <div className="hcItemIn">
                <div className="hc_head">
                    <div className="hcIn">
                    <h2>James Foga</h2>
                    </div>
                    <div className="hcstars">
                    <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 17.27L18.68 21L17.04 13.97L22.5 9.24L15.31 8.63L12.5 2L9.69 8.63L2.5 9.24L7.96 13.97L6.32 21L12.5 17.27Z" fill="#FFC000"/>
                        <path d="M36.5 17.27L42.68 21L41.04 13.97L46.5 9.24L39.31 8.63L36.5 2L33.69 8.63L26.5 9.24L31.96 13.97L30.32 21L36.5 17.27Z" fill="#FFC000"/>
                        <path d="M60.5 17.27L66.68 21L65.04 13.97L70.5 9.24L63.31 8.63L60.5 2L57.69 8.63L50.5 9.24L55.96 13.97L54.32 21L60.5 17.27Z" fill="#FFC000"/>
                        <path d="M84.5 17.27L90.68 21L89.04 13.97L94.5 9.24L87.31 8.63L84.5 2L81.69 8.63L74.5 9.24L79.96 13.97L78.32 21L84.5 17.27Z" fill="#FFC000"/>
                        <path d="M108.5 17.27L114.68 21L113.04 13.97L118.5 9.24L111.31 8.63L108.5 2L105.69 8.63L98.5 9.24L103.96 13.97L102.32 21L108.5 17.27Z" fill="#FFC000"/>
                    </svg>
                    </div>
                </div>
                <div className="hc_body">
                    <p>Great way to sell your vehicle. The whole deal took about 20 min.I was offered a fair price. I receive a check on the spot. All the people I spoke with were polite and...More</p>
                </div>
                </div>
                </div>
                <div className="hc_item">
                <div className="hcItemIn">
                <div className="hc_head">
                    <div className="hcIn">
                    <h2>James Foga</h2>
                    </div>
                    <div className="hcstars">
                    <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 17.27L18.68 21L17.04 13.97L22.5 9.24L15.31 8.63L12.5 2L9.69 8.63L2.5 9.24L7.96 13.97L6.32 21L12.5 17.27Z" fill="#FFC000"/>
                        <path d="M36.5 17.27L42.68 21L41.04 13.97L46.5 9.24L39.31 8.63L36.5 2L33.69 8.63L26.5 9.24L31.96 13.97L30.32 21L36.5 17.27Z" fill="#FFC000"/>
                        <path d="M60.5 17.27L66.68 21L65.04 13.97L70.5 9.24L63.31 8.63L60.5 2L57.69 8.63L50.5 9.24L55.96 13.97L54.32 21L60.5 17.27Z" fill="#FFC000"/>
                        <path d="M84.5 17.27L90.68 21L89.04 13.97L94.5 9.24L87.31 8.63L84.5 2L81.69 8.63L74.5 9.24L79.96 13.97L78.32 21L84.5 17.27Z" fill="#FFC000"/>
                        <path d="M108.5 17.27L114.68 21L113.04 13.97L118.5 9.24L111.31 8.63L108.5 2L105.69 8.63L98.5 9.24L103.96 13.97L102.32 21L108.5 17.27Z" fill="#FFC000"/>
                    </svg>
                    </div>
                </div>
                <div className="hc_body">
                    <p>Great way to sell your vehicle. The whole deal took about 20 min.I was offered a fair price. I receive a check on the spot. All the people I spoke with were polite and...More</p>
                </div>
                </div>
                </div>
                <div className="hc_item">
                <div className="hcItemIn">
                <div className="hc_head">
                    <div className="hcIn">
                    <h2>James Foga</h2>
                    </div>
                    <div className="hcstars">
                    <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 17.27L18.68 21L17.04 13.97L22.5 9.24L15.31 8.63L12.5 2L9.69 8.63L2.5 9.24L7.96 13.97L6.32 21L12.5 17.27Z" fill="#FFC000"/>
                        <path d="M36.5 17.27L42.68 21L41.04 13.97L46.5 9.24L39.31 8.63L36.5 2L33.69 8.63L26.5 9.24L31.96 13.97L30.32 21L36.5 17.27Z" fill="#FFC000"/>
                        <path d="M60.5 17.27L66.68 21L65.04 13.97L70.5 9.24L63.31 8.63L60.5 2L57.69 8.63L50.5 9.24L55.96 13.97L54.32 21L60.5 17.27Z" fill="#FFC000"/>
                        <path d="M84.5 17.27L90.68 21L89.04 13.97L94.5 9.24L87.31 8.63L84.5 2L81.69 8.63L74.5 9.24L79.96 13.97L78.32 21L84.5 17.27Z" fill="#FFC000"/>
                        <path d="M108.5 17.27L114.68 21L113.04 13.97L118.5 9.24L111.31 8.63L108.5 2L105.69 8.63L98.5 9.24L103.96 13.97L102.32 21L108.5 17.27Z" fill="#FFC000"/>
                    </svg>
                    </div>
                </div>
                <div className="hc_body">
                    <p>Great way to sell your vehicle. The whole deal took about 20 min.I was offered a fair price. I receive a check on the spot. All the people I spoke with were polite and...More</p>
                </div>
                </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default HappyCustomersSlider;