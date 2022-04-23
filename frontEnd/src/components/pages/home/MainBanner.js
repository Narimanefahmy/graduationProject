import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "react-datepicker/dist/react-datepicker.css";
import {Link,NavLink} from "react-router-dom";

import pv_1 from "../../../assets/images/package/pv-1.png"
import SearchResults from "../search/SearchResults";
import axios from 'axios';

import {withRouter} from 'react-router';
import { useState } from "react";
import PackageDetails from "../package/PackageDetails";
class MainBanner extends Component {
   
   // const [title, setTitle] = useState('');
         
  constructor(props) {
      super(props);
      this.state = {
          isToggleOn: true,
      };
      this.handleClick = this.handleClick.bind(this);
      }
     
      _handleKeyDown = (ev) => {
        if (ev.key ==="Enter") {
            ev.preventDefault();                                            
            window.location.replace("../search/SearchResults"); 
            console.table(ev.target.value);
         
          }
      }
    handleClick() {
     
        document.getElementById("myDropdown").classList.toggle("show");
    }

    makeArray() {
        const searchArray = ["hilton", "sovotel", "sheraton", "sar","sar","sar"];
       
        return searchArray;
        
    }
      
  

 
    
scrollTop()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
<<<<<<< Updated upstream
    }
   

=======
    } 
    render() {
       

        
>>>>>>> Stashed changes

    render() {
    
          
        const mainBannerOptions = {
            items: 1,
            loop: true,
            margin: 0,
            smartSpeed: 700,
            dots: false,
            nav: true,
            autoplay: 4000,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 1,
                    nav: false,
                    dost: false,
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                },
            }
        };

      
    
     
        //this.state.attractions
        const placesHTML = []
        const resultHTML = []
        const array = this.makeArray();
        // eslint-disable-next-line 
        for (let i = 0; i < array.length; i++) {
           
            if (i <= 3) {
                //if there is result in database
                placesHTML.push(
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                    <a href="">
                        <div class="image-search"><picture>
                            <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                width="100" height="75" alt="">
                            </img>
                        </picture></div>
                        <div class="description"><div><div class="city-name">{array[i]}</div><div> Paris Centre Gare Montparnasse</div></div><div ><div>Paris, Ile-de-France, France</div></div></div>
                        </a>
                        </Link>
                )
            } else {
                resultHTML.push(
                    <div className="package-card-xl">
                        <div className="package-thumb-xl">
                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                <img src={pv_1} alt="" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="package-details-xl">
                            <div className="package-info">
                                <h5><span>$180</span>/Per Person</h5>
                            </div>
                            <h3><i className="flaticon-arrival" />
                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>Paris Hill Tour</Link>
                            </h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem saepe amet magni!</p>
                            <div className="package-rating">
                                <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                            </div>
                        </div>
                    </div>
                )
            }
           
        }
        
        placesHTML.push(
            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >see all results</NavLink>
        )
        resultHTML.push(
            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >see all results</NavLink> 
        )

  
        return (
            <>
            
                {/* ===============  Main banner area start =============== */}
             
                <div className="MainBanner"></div>
            <div className="main-banner">
                <OwlCarousel className="banner-slider owl-carousel"  {...mainBannerOptions}>
                    <div className="slider-item slider-item-1">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Amazing Tour In
                                    Hampshire </h2>
                                <h5>7 Days, 8 Night Tour</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-2">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Amazing Tour In
                                    Indonesia </h2>
                                <h5>7 Days, 8 Night Tour</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-3">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Amazing Tour In
                                    madagascar </h2>
                                <h5>7 Days, 8 Night Tour</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                 </OwlCarousel>
            </div>
            {/* ===============  Main banner area end =============== */}

            {/* ===============  findfrom area start ============= */}
            <div  className="find-form">
                <div className="container">
                    <form id="search"className="findfrom-wrapper">
                        <div className="row">
                            <div className="sidebar-searchbox">
                                
                                <div class="dropdown">
                                    
                                <div class="input-group search-box ">
                               
                                            <input type="text" id="name" className="form-control" placeholder="Where To?" aria-label="Recipient's username" aria-describedby="button-addon2" onClick={this.handleClick}
                                                onKeyPress={(ev) => { this._handleKeyDown(ev) }}
                                                autocomplete="off"
                                           />
                                     
                                            <button className="btn btn-outline-secondary " type="button" id="button-addon2" >
                                        {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
                                            <i className="bx bx-search" /></button>
                                </div>
                               
                                        <div id="myDropdown" class="dropdown-content">
                                             {/* <a id="tar" href="#about">
                                           
                                                <div class="image-search"><picture>
                                                    <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                                        width="100" height="75" alt="">
                                                    </img>
                                                </picture></div>
                                                <div class="description"><div><div class="city-name">hhh</div><div> Paris Centre Gare Montparnasse</div></div><div ><div>Paris, Ile-de-France, France</div></div></div>
                                            </a>  */}
                                           
                                        

                                            {placesHTML}
                                            </div>
                                      
                                        {/* <a href="#about">
                                            <div class="image-search"><picture>
                                                <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                                    width="100" height="75" alt="">
                                                   </img>
                                            </picture></div>
                                            <div class="description"><div><div class="city-name">Novotel</div><div> Paris Centre Gare Montparnasse</div></div><div ><div>Paris, Ile-de-France, France</div></div></div>
                                        </a>
                                        <hr ></hr>
                                        <a href="#about">
                                            <div class="image-search"><picture>
                                                <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                                    width="100" height="75" alt="">
                                                   </img>
                                            </picture></div>
                                            <div class="description"><div><div class="city-name">Novotel</div><div> Paris Centre Gare Montparnasse</div></div><div ><div>Paris, Ile-de-France, France</div></div></div>
                                        </a>
                                        <hr ></hr>
                                        <a href="#about">
                                            <div class="image-search"><picture>
                                                <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                                    width="100" height="75" alt="">
                                                   </img>
                                            </picture></div>
                                            <div class="description"><div><div class="city-name">Novotel</div><div> Paris Centre Gare Montparnasse</div></div><div ><div>Paris, Ile-de-France, France</div></div></div>
                                        </a>
                                        <hr ></hr>
                                        <a href="#about">
                                            <div class="image-search"><picture>
                                                <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                                    width="100" height="75" alt="">
                                                   </img>
                                            </picture></div>
                                            <div class="description"><div><div class="city-name">Novotel</div><div> Paris Centre Gare Montparnasse</div></div><div ><div>Paris, Ile-de-France, France</div></div></div>
                                        </a>*/}
                                      

                                     
                                    
                                </div>
                                 </div>
                            
                        {/* <div className="main-searchbar activeSearch">
                            <input type="text" placeholder="Search Here......" />
                            <div className="searchbar-icon">
                                <i className="bx bx-search" />
                            </div>
                        </div> */}
                
                            {/* <div className="col-lg-3">
                                <input type="text" name="whereto" placeholder="Where To..." />
                            </div>
                            <div className="col-lg-3">
                                <div className="calendar-input">
                                    <DatePicker selected={startDate} onChange={(date) => this.changeDatepickerHandeller(date)}  className="input-field check-in" placeholder="dd-mm-yy"/>
                                    <i className="flaticon-calendar" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>Travel Type</option>
                                        <option value={1}>City Tours</option>
                                        <option value={2}>Vacation Tours</option>
                                        <option value={3}>Couple Tours </option>
                                        <option value={4}>Adventure Tours</option>
                                        <option value={5}>Group Tours</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="find-btn">
                                    <Link to={`#`} className="btn-second"><i className="bx bx-search-alt" /> Find now</Link>
                                </div>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>

            {/* ===============  findfrom area end =============== */}
        </>
    );
  }
}

export default MainBanner;
