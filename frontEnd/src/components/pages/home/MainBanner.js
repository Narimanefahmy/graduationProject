import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-datepicker/dist/react-datepicker.css";
import {Link,NavLink} from "react-router-dom";
import pv_1 from "../../../assets/images/package/pv-1.png"


class MainBanner extends Component {

  constructor(props) {
      super(props);
      this.state = {
          open: false,
          search: null,
          places: null,
          hotels: null,
          attractions: null,
          restaurants: null
      };
    }

    fetchData() {
   
        fetch('http://localhost:8000/search', {
            method: "POST",
            body: JSON.stringify({
                search: this.state.search
            }),
            headers: {

                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
              places: data.places,
              hotels: data.hotels,
              attractions: data.attraction,
              restaurants: data.restaurant });
              console.table(data) 
            });
            
            console.table(this.state.hotels) 
        console.table(this.state.places) 
        console.table(this.state.restaurants)
    }

    container = React.createRef();
    _handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            ev.preventDefault();
            window.location.replace("../search/SearchResults");
        }
          console.table(this.state.search);
    }

    handleButtonClick = () => {
        if (this.state.open===false) {
            this.setState((state) => {
            
                return {
                    open: !state.open,
                };
            });
        };
    }
    

    handleClickOutside = (event) => {
        if (
          this.container.current &&
          !this.container.current.contains(event.target)
        ) {
          this.setState({
            open: false,
          });
        }
      };
    
//    changeDatepickerHandeller=(date)=>{
//         this.setState({ startDate: date });
//     }


componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);      
    }
    
componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}
    

scrollTop()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }

// parseArray(array) {
//     var parsed;
//         array = [...array.map((obj) => {
//             obj.images = JSON.parse(obj.images.replaceAll(`'`, `"`))
//             parsed = JSON.parse(obj.images);
//             console.log(parsed);
    
//             return obj;
//         })];
//     }    
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
       // const startDate = this.state.startDate;
        var placesArray = []
        var attractionArray = []
        var hotelsArray = []
        var restaurantsArray = []
        const placesHTML = []

        if (!this.state.places || !this.state.attractions || !this.state.hotels || !this.state.restaurants) {
        }
            else{
                placesArray = this.state.places;
                // this.parseArray(placesArray);
                hotelsArray = this.state.hotels;
                attractionArray = this.state.attractions;
            restaurantsArray = this.state.restaurants;
         placesHTML.push(<div class="search-header"><i class="icon-search-header" className="flaticon-arrival" />Places</div>)
        for (let i = 0; i <placesArray.length; i++) {
           
            if (i <= 2) {
                //if there is result in database
                placesHTML.push(
                  
                      <a href={`${process.env.PUBLIC_URL}/package-details`}> 
                        <div class="image-search"><picture>
                        <img src={placesArray[i].images[1]}
                                width="100" height="70" alt="">
                            </img>
                        </picture></div>
                        <div class="description"><div><div class="city-name">{placesArray[i].name}</div><div> {placesArray[i].type}</div></div></div>
                         </a>  
                        
                    )
                }
            }
           
            for (let i = 0; i < hotelsArray.length; i++) {
                if (i == 0)
                {
                    placesHTML.push(<div class="search-header"><i class="icon-search-header" className="flaticon-arrival" />Hotels</div>)
                        }
           
                    if (i <= 2) {
 
                        placesHTML.push(
                          
                            <a href={`${process.env.PUBLIC_URL}/package-details`}> 
                                <div class="image-search"><picture>
                                    <img src={hotelsArray[i].images[1]}
                                        width="100" height="70" alt="">
                                    </img>
                                </picture></div>
                                <div class="description"><div><div class="city-name">{hotelsArray[i].name}</div><div>{hotelsArray[i].city}</div></div></div>
                                </a> 
                                
                        )}}
            for (let i = 0; i < attractionArray.length; i++) {
                if (i == 0)
                {
                    placesHTML.push(<div class="search-header"><i class="icon-search-header" className="flaticon-arrival" />Attractions</div>)
                        }
           
                            if (i <= 2) {
            
                                placesHTML.push(
                                   
                                     <a href={`${process.env.PUBLIC_URL}/package-details`}> 
                                        <div class="image-search"><picture>
                                        <img src={attractionArray[i].images[1]}
                                                width="100" height="75" alt="">
                                            </img>
                                        </picture></div>
                                        <div class="description"><div><div class="city-name">{attractionArray[i].name}</div><div>{attractionArray[i].city}</div></div></div>
                                        </a> 
                                      
                                )}}
            for (let i = 0; i < restaurantsArray.length; i++) {
                if (i == 0)
                {
                    placesHTML.push(<div class="search-header"><i class="icon-search-header" className="flaticon-arrival" />Restaurants</div>)
                        }
           
                                    if (i <= 2) {
                                  
                                        placesHTML.push(
                                         
                                           <a href={`${process.env.PUBLIC_URL}/package-details`}> 
                                                <div class="image-search"><picture>
                                                <img src={restaurantsArray[i].images[1]}
                                                        width="100" height="75" alt="">
                                                    </img>
                                                </picture></div>
                                                <div class="description"><div><div class="city-name">{restaurantsArray[i].name}</div><div>{restaurantsArray[i].city}</div></div></div>
                                                </a> 
                                             
                                        )}}}
            
      
        if (placesArray.length < 1 && restaurantsArray.length < 1 && hotelsArray.length < 1 && attractionArray.length < 1) {
            placesHTML.push(<div class="no-result" >No results found</div>)
        }
        else {
            placesHTML.push(
                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >see all results</NavLink>
            )

        }

      
        
       
    return (
        <>
            {/* ===============  Main banner area start =============== */}
            <div className="main-banner"  >
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
            <div  className="find-form" ref={this.container}>
                <div className="container">
                    <form id="search"className="findfrom-wrapper">
                        <div className="row">
                            <div className="sidebar-searchbox">
                                
                           
                                <div class="dropdown" >
                                    
                                <div class="input-group search-box "ref={this.container}>
                               
                                        <input type="text" name="search" value={this.state.search} id="name" className="form-control" placeholder="Where To?" aria-label="Recipient's username" aria-describedby="button-addon2"
                                            
                                            autoComplete="off"
                                            onKeyPress={(ev) => { this._handleKeyDown(ev) }}
                                
                                            onChange={(e) => this.setState({ search: e.target.value })}
                                          />
                                     
                                        <button className="btn btn-outline-secondary " type="button" id="button-addon2"
                                      
                                            onClick={() => {
                                                this.handleButtonClick();
                                                this.fetchData();
                                             
                                              }}>
                                        
                                            <i className="bx bx-search" /></button>
                                </div>
                              
                                {this.state.open && (
                                        <div id="myDropdown" class="dropdown-content">

                                            {placesHTML}
                                            </div>
                                        )}
                                                     
                                    
                                </div>
                                 </div>
                            
                       
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