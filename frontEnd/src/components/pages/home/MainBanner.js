import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-datepicker/dist/react-datepicker.css";
import {Link,NavLink} from "react-router-dom";
import pv_1 from "../../../assets/images/package/pv-1.png"
 import SearchResults from "../search/SearchResults";
import PackageDetails from "../package/PackageDetails";
import { useState } from 'react';



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

            //console.table(this.state.search)
    }

//     fetchData2() {
//         fetch('http://localhost:8000/search')
//             .then(response => response.json())
//         .then(data => {
//             this.setState({
//           places: data.placesArray,
//           hotels: data.HotelsArray,
//           attractions: data.attractionsArray,
//           restaurants: data.restaurantsArray });
//         });
//         console.table(this.state.places) 
//   }
     
    //   this.handleClick = this.handleClick.bind(this);
    //   this.state = {
    //     count: 0
    // this.state = {
    //     startDate: new Date(),
              
    


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
    
//     handleClick() {
      
//       document.getElementById("myDropdown").classList.toggle("show");
   
// //      // var checkInput = document.getElementById("name");
// //     //   if (checkInput.value) {
// //     //       document.getElementById("tar").style.display = "none";
// //     //   }
//     }

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
     
        //this.fetchData2();
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
// data = (users) => {
//     <div className="viewusers">
//          <h1>All users</h1>
//          <div className="viewusers-list">
//              {users.map((user) => {
//                  return (
//                  <React.Fragment>
//                      <p> <b>Name</b> : {user.username} </p>
//                      <p> <b>Email</b> : {user.email} </p>
//                      <p> <b>Website role</b> : {user.websiteRole} </p>
//                      <hr />
//                  </React.Fragment>
//                  )
//              })}
//          </div>
//      </div>
// }



    
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
        const startDate = this.state.startDate;
        var placesArray = []
        var attractionArray = []
        var hotelsArray = []
        var restaurantsArray = []
        //const searchArray = this.state.places;
                 
        //this.state.attractions
        const placesHTML = []
        const resultHTML = []

        if (!this.state.places || !this.state.attractions || !this.state.hotels || !this.state.restaurants) {
            // resource is not yet loaded
           // return <div>Loading resource...</div>;
        }
        
        
       // const placesArray1 = this.state.hotels
        // eslint-disable-next-line 
      
            else{
                placesArray = this.state.places;
                hotelsArray = this.state.hotels;
                attractionArray = this.state.attractions;
                restaurantsArray = this.state.restaurants;
        for (let i = 0; i <placesArray.length; i++) {
           
            if (i <= 2) {
                //if there is result in database
                placesHTML.push(
                      <Link activeClassName="active" to={`${process.env.PUBLIC_URL}/package-details`} >
                     {/* <a href="">  */}
                        <div class="image-search"><picture>
                            <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                width="100" height="75" alt="">
                            </img>
                        </picture></div>
                        <div class="description"><div><div class="city-name">{placesArray[i].name}</div><div>{placesArray[i].city}</div></div></div>
                        {/* </a>  */}
                        </Link>
                )}}
                for (let i = 0; i <hotelsArray.length; i++) {
           
                    if (i <= 2) {
                        //if there is result in database
                        placesHTML.push(
                              <Link activeClassName="active" to={`${process.env.PUBLIC_URL}/package-details`} >
                             {/* <a href="">  */}
                                <div class="image-search"><picture>
                                    <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                        width="100" height="75" alt="">
                                    </img>
                                </picture></div>
                                <div class="description"><div><div class="city-name">{hotelsArray[i].name}</div><div>{hotelsArray[i].city}</div></div></div>
                                {/* </a>  */}
                                </Link>
                        )}}
                        for (let i = 0; i <attractionArray.length; i++) {
           
                            if (i <= 2) {
                                //if there is result in database
                                placesHTML.push(
                                      <Link activeClassName="active" to={`${process.env.PUBLIC_URL}/package-details`} >
                                     {/* <a href="">  */}
                                        <div class="image-search"><picture>
                                            <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                                width="100" height="75" alt="">
                                            </img>
                                        </picture></div>
                                        <div class="description"><div><div class="city-name">{attractionArray[i].name}</div><div>{attractionArray[i].city}</div></div></div>
                                        {/* </a>  */}
                                        </Link>
                                )}}
                                for (let i = 0; i <restaurantsArray.length; i++) {
           
                                    if (i <= 2) {
                                        //if there is result in database
                                        placesHTML.push(
                                              <Link activeClassName="active" to={`${process.env.PUBLIC_URL}/package-details`} >
                                             {/* <a href="">  */}
                                                <div class="image-search"><picture>
                                                    <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                                        width="100" height="75" alt="">
                                                    </img>
                                                </picture></div>
                                                <div class="description"><div><div class="city-name">{restaurantsArray[i].name}</div><div>{restaurantsArray[i].city}</div></div><div ></div></div>
                                                {/* </a>  */}
                                                </Link>
                                        )}}}
           
            {/* <Link
            to={{
                pathname: "../search/SearchResults",
                data: resultHTML // your data array of objects
            }}
        </Link> */}
        placesHTML.push(
            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >see all results</NavLink>
        )
        resultHTML.push(
            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >see all results</NavLink> 
        )

        // if (this.state.isWritten) {
         
        // if (document.getElementById("name").value)
        // {
        //     return null;
            
        //     }
        
       
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
                                            // onClick={this.handleClick}
                                            // onClick={this.handleButtonClick}
                                           
                                     
                                            autoComplete="off"
                                            onKeyPress={(ev) => { this._handleKeyDown(ev) }}
                                
                                            onChange={(e) => this.setState({ search: e.target.value })}
                                          />
                                     
                                        <button className="btn btn-outline-secondary " type="button" id="button-addon2"
                                            //onClick={this.fetchData}
                                            onClick={() => {
                                                this.handleButtonClick();
                                                this.fetchData();
                                             
                                              }}>
                                        

                                        {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
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