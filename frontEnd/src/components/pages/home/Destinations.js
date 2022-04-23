import React, { Component } from "react";
import {Link, useParams} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Rating } from 'react-simple-star-rating'




class Destinations extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            places: null,
            hotels: null,
            attractions: null,
            restaurants: null
        };
    }

    // fetchData() {
    //     fetch('http://localhost:8000/backend')
    //       .then(response => response.json())
    //       .then(data => {
    //         this.setState({ places: data.placeData,
    //         hotels: data.hotelData,
    //         attractions: data.attractionData,
    //         restaurants: data.restaurantData });
    //     });
    // }

<<<<<<< Updated upstream
    // componentDidMount(){
    //     this.fetchData()
    // }
  
=======
    componentDidMount(){
        
        this.fetchData()
    }
>>>>>>> Stashed changes

    render() {
        const destinationsOptions = {
            stagePadding: 1,
            items: 3,
            loop: true,
            margin: 25,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: false,
            //loop: true,
            navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 2,
                    nav: false,
                    dots: false,
                },
                1000: {
                    items: 3,
                    dots: true,
                    nav: false,
                    loop: true
                }
            }
        };
      
<<<<<<< Updated upstream
        // if (!this.state.places || !this.state.attractions || !this.state.hotels || !this.state.restaurants) {
        //     // resource is not yet loaded
        //     return <div>Loading resource...</div>;
        // }
=======
        if (!this.state.places || !this.state.attractions || !this.state.hotels || !this.state.restaurants) {
            // resource is not yet loaded
            return <div>Loading resource...</div>;
        }
        
>>>>>>> Stashed changes
        // places
        // const placesArray1 = this.state.places
        // const placesHTML  = []
        // for(let i = 0;i<placesArray1.length;i++){
        //     placesHTML.push(
        //     <div className="offer-card">
        //         <div className="offer-thumb">
        //                 <img src={placesArray1[i].images[1]} alt="" className="img-card" />
        //         </div>
        //         <div className="offer-details">
        //             <h3>
        //                 <i className="flaticon-arrival" />
        //                 {placesArray1[i].name}
        //             </h3>
        //             <strong>{placesArray1[i].type}</strong>
        //         </div>
        //     </div>)
        // }
        // hotels
<<<<<<< Updated upstream
        //     const hotelsArray1 = this.state.hotels
        //     const hotelsHTML  = []
        //     for(let i = 0;i<hotelsArray1.length;i++){
        //         hotelsHTML.push(
        //         <div className="offer-card">
        //             <div className="offer-thumb">
        //                     <img src={hotelsArray1[i].images[1]} alt="" className="img-card" />
        //             </div>
        //             <div className="offer-details">
        //                 <div className="offer-info">
        //                     <h5><i className="flaticon-calendar" />{hotelsArray1[i].reviewsnum} reviews</h5>
        //                     <Rating initialValue={hotelsArray1[i].starnum} fillColor={'#ea965d'} size={20} style={React.CSSProperties={top: '-5px'}} readonly/>
        //                 </div>
        //                 <h3>
        //                     <i className="flaticon-arrival" />
        //                     {hotelsArray1[i].name}
        //                 </h3>
        //                 <p>{hotelsArray1[i].city}</p>
        //                 <p>{hotelsArray1[i].price} EGP</p>
        //             </div>
        //         </div>)
        //     }
        //     // attraction
        //     const attractionsArray1 = this.state.attractions
        //     const attractionsHTML  = []
        //     for(let i = 0;i<attractionsArray1.length;i++){
        //         attractionsHTML.push(
        //         <div className="offer-card">
        //             <div className="offer-thumb">
        //                 <img src={attractionsArray1[i].images[1]} alt="" className="img-card" />
        //             </div>
        //             <div className="offer-details">
        //                 <div className="offer-info">
        //                     <h5><i className="flaticon-calendar" />{attractionsArray1[i].reviewsnum} reviews</h5>
        //                     <Rating initialValue={attractionsArray1[i].rate} fillColor={'#ea965d'} size={20} style={React.CSSProperties={top: '-5px'}} readonly/>
        //                 </div>
        //                 <h3>
        //                     <i className="flaticon-arrival" />
        //                     {attractionsArray1[i].name}
        //                 </h3>
        //                 <p>{attractionsArray1[i].city}</p>
        //                 <p>{attractionsArray1[i].typeofattraction}</p>
        //             </div>
        //         </div>)
        //     }
        //     // restaurants
        //     const restaurantsArray1 = this.state.restaurants
        //     const restaurantsHTML  = []
        //     for(let i = 0;i<restaurantsArray1.length;i++){
        //         restaurantsHTML.push(
        //         <div className="offer-card">
        //             <div className="offer-thumb">
        //                 <img src={restaurantsArray1[i].images[1]} alt="" className="img-card" />
        //             </div>
        //             <div className="offer-details">
        //                 <div className="offer-info">
        //                     <h5><i className="flaticon-calendar" />{restaurantsArray1[i].reviewsnum} reviews</h5>
        //                     <Rating initialValue={restaurantsArray1[i].rate} fillColor={'#ea965d'} size={20} style={React.CSSProperties={top: '-5px'}} readonly/>
        //                 </div>
        //                 <h3>
        //                     <i className="flaticon-arrival" />
        //                     {restaurantsArray1[i].name}
        //                 </h3>
        //                 <p>{restaurantsArray1[i].city}</p>
        //                 <p>{restaurantsArray1[i].cuisines}</p>
        //             </div>
        //         </div>)
        //     }
=======
        const hotelsArray1 = this.state.hotels
        const hotelsHTML  = []
        for(let i = 0;i<hotelsArray1.length;i++){
            hotelsHTML.push(
            <div className="offer-card">
                <Link to={`${process.env.PUBLIC_URL}/hotel/${hotelsArray1[i].city}/${hotelsArray1[i].name}`}>
                <div className="offer-thumb">
                        <img src={hotelsArray1[i].images[1]} alt="" className="img-card" />
                </div>
                </Link>
                <div className="offer-details">
                    <div className="offer-info">
                        <h5><i className="flaticon-calendar" />{hotelsArray1[i].reviewsnum} reviews</h5>
                        <Rating initialValue={hotelsArray1[i].starnum} fillColor={'#ea965d'} size={20} style={React.CSSProperties={top: '-5px'}} readonly/>
                    </div>
                    <Link to={`${process.env.PUBLIC_URL}/hotel/${hotelsArray1[i].city}/${hotelsArray1[i].name}`}>
                    <h3>
                        <i className="flaticon-arrival" />
                        {hotelsArray1[i].name}
                    </h3>
                    </Link>
                    <p>{hotelsArray1[i].city}</p>
                    <p>{hotelsArray1[i].price} EGP</p>
                </div>
            </div>)
        }
        // attraction
        const attractionsArray1 = this.state.attractions
        const attractionsHTML  = []
        for(let i = 0;i<attractionsArray1.length;i++){
            attractionsHTML.push(
            <div className="offer-card">
                <div className="offer-thumb">
                    <img src={attractionsArray1[i].images[1]} alt="" className="img-card" />
                </div>
                <div className="offer-details">
                    <div className="offer-info">
                        <h5><i className="flaticon-calendar" />{attractionsArray1[i].reviewsnum} reviews</h5>
                        <Rating initialValue={attractionsArray1[i].rate} fillColor={'#ea965d'} size={20} style={React.CSSProperties={top: '-5px'}} readonly/>
                    </div>
                    <h3>
                        <i className="flaticon-arrival" />
                        {attractionsArray1[i].name}
                    </h3>
                    <p>{attractionsArray1[i].city}</p>
                    <p>{attractionsArray1[i].typeofattraction}</p>
                </div>
            </div>)
        }
        // restaurants
        const restaurantsArray1 = this.state.restaurants
        const restaurantsHTML  = []
        for(let i = 0;i<restaurantsArray1.length;i++){
            restaurantsHTML.push(
            <div className="offer-card">
                <div className="offer-thumb">
                    <img src={restaurantsArray1[i].images[1]} alt="" className="img-card" />
                </div>
                <div className="offer-details">
                    <div className="offer-info">
                        <h5><i className="flaticon-calendar" />{restaurantsArray1[i].reviewsnum} reviews</h5>
                        <Rating initialValue={restaurantsArray1[i].rate} fillColor={'#ea965d'} size={20} style={React.CSSProperties={top: '-5px'}} readonly/>
                    </div>
                    <h3>
                        <i className="flaticon-arrival" />
                        {restaurantsArray1[i].name}
                    </h3>
                    <p>{restaurantsArray1[i].city}</p>
                    <p>{restaurantsArray1[i].cuisines}</p>
                </div>
            </div>)
        }
>>>>>>> Stashed changes
       
           return (
             <>
        {/* //         {/* =============== city area start =============== */}
                <div className="offer-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head pb-30">
                                    <h5>Your Guide to Egypt</h5>
                                    <h2>Explore Egypt Destinations</h2>
                                </div>
                            </div>
                        </div>
                        <OwlCarousel  className="offer-slider dark-nav owl-carousel "  {...destinationsOptions}>
                            {/* {placesHTML}  */}
                        </OwlCarousel>
                    </div>
                </div>
                {/* most popular hotels */}
                <div className="offer-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head pb-30">
                                    <h5>Your Guide to Egypt</h5>
                                    <h2>Explore Egypt Destinations</h2>
                                </div>
                            </div>
                        </div>
                        <OwlCarousel  className="offer-slider dark-nav owl-carousel "  {...destinationsOptions}>
                            {/* {hotelsHTML}  */}
                        </OwlCarousel>
                    </div>
                </div>
                {/* most popular attractions */}
                <div className="offer-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head pb-30">
                                    <h5>Your Guide to Egypt</h5>
                                    <h2>Explore Egypt Destinations</h2>
                                </div>
                            </div>
                        </div>
                        <OwlCarousel  className="offer-slider dark-nav owl-carousel "  {...destinationsOptions}>
                            {/* {attractionsHTML}  */}
                        </OwlCarousel>
                    </div>
                </div>
                {/* most popular restaurants */}
                <div className="offer-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head pb-30">
                                    <h5>Your Guide to Egypt</h5>
                                    <h2>Explore Egypt Destinations</h2>
                                </div>
                            </div>
                        </div>
                        <OwlCarousel  className="offer-slider dark-nav owl-carousel "  {...destinationsOptions}>
                            {/* {restaurantsHTML}  */}
                        </OwlCarousel>
                    </div>
                </div>
                </>
            );
      
        } 
    }

export default Destinations;

