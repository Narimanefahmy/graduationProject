import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-datepicker/dist/react-datepicker.css";
import {Link,NavLink} from "react-router-dom";



class MainBanner extends Component {

  constructor(props) {
      super(props);
    //   this.state = {
    //       open: false,
    //       search: null,
    //       places: null,
    //       hotels: null,
    //       attractions: null,
    //       restaurants: null
    //   };
     }

    
scrollTop()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }

    
    render() {
       
        const mainBannerOptions = {
            items: 1,
            loop: true,
            margin:0,
            smartSpeed: 700,
            dots: false,
            nav: true,
            autoplay: 3000,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots : false
                },
                600:{
                    items:1,
                    nav:false,
                    dost : false,
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                },
            }
        };
 
      
      
        
       
    return (
        <>
            {/* ===============  Main banner area start =============== */}
            <div className="main-banner" >
                <OwlCarousel className="banner-slider owl-carousel"  {...mainBannerOptions}>
                    <div className="slider-item slider-item-1">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Do you Love <br></br>Beach </h2>
                                <h5>visit Alexandria,Marsa Alam</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-2">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Do you Love<br></br> pyramids</h2>
                                <h5>visit Giza</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-3">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Do you Love<br></br> mountain </h2>
                                <h5>visit sinaa</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-4">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Do you Love<br></br> status</h2>
                                <h5>Visit Luxor and Aswan</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                 </OwlCarousel>
            </div>
            {/* ===============  Main banner area end =============== */}

          
        </>
    );
  }
}

export default MainBanner;