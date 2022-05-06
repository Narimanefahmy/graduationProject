import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Rating } from 'react-simple-star-rating'
//Import Images
import destinations1Img from "../../../assets/images/destination/d-1.png"

import destinations6Img from "../../../assets/images/destination/d-6.png"

import destinations2Img from "../../../assets/images/destination/d-2.png"
import destinations3Img from "../../../assets/images/destination/d-3.png"
import { withRouter } from "react-router";
import { SRLWrapper } from "simple-react-lightbox";

class AboutCity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: (this.props.match.params).string,
            place: null,
            hotels: null,
            attractions: null,
            restaurants: null
        };
    }


    fetchData() {
        fetch('http://localhost:8000/backend/aboutCity', {
            method: "POST",
            body: JSON.stringify({
                search: this.state.cityName
            }),
            headers: {

                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    place: data.place,
                    hotels: data.hotels,
                    attractions: data.attractions,
                    restaurants: data.restaurants
                });
                console.table(data)
            });
    }

    componentDidMount() {
        this.fetchData()
    }


    render() {

        const destinationsOptions = {
            stagePadding: 1,
            items: 3,
            loop: true,
            margin: 20,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: true,
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
                    dost: false,
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        };

        const ImageOptions = {
            stagePadding: 1,
            items: 1,
            margin:2,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: false,
            loop: true,
            navText: [''],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots : false
                },
                600:{
                    items:1,
                    nav:false,
                    dots : false,
                },
                1000:{
                    items:1,
                    dots: true,
                    nav:false,
                    loop:true
                }
            }
        };

        if (!this.state.place || !this.state.attractions || !this.state.hotels || !this.state.restaurants) {
            return <div class="preloader">
                <div className="loader loader1">
                    <span style={{ '--i': 1 }} />
                    <span style={{ '--i': 2 }} />
                    <span style={{ '--i': 3 }} />
                    <span style={{ '--i': 4 }} />
                    <span style={{ '--i': 5 }} />
                    <span style={{ '--i': 6 }} />
                    <span style={{ '--i': 7 }} />
                    <span style={{ '--i': 8 }} />
                    <span style={{ '--i': 9 }} />
                    <span style={{ '--i': 10 }} />
                    <span style={{ '--i': 11 }} />
                    <span style={{ '--i': 12 }} />
                    <span style={{ '--i': 13 }} />
                    <span style={{ '--i': 14 }} />
                    <span style={{ '--i': 15 }} />
                    <span style={{ '--i': 16 }} />
                    <span style={{ '--i': 17 }} />
                    <span style={{ '--i': 18 }} />
                    <span style={{ '--i': 19 }} />
                    <span style={{ '--i': 20 }} />
                    <div className="rocket" />
                </div></div>;

        }

        var hotelsHTML = []
        var attractionsHTML = []
        var restaurantsHTML = []

        // place
        var placeArray = this.state.place
        var placeImages = []
        for (let i = 0; i < 3; i++) {
            placeImages.push(
                <img width="600px" height="350px" className="about-wrapper-left about-img" src={placeArray[0].images[i]} alt="" />
            )
        }



        // hotels
        var hotelsArray = this.state.hotels

        for (let i = 0; i < hotelsArray.length; i++) {
            hotelsHTML.push(
                <div className="offer-card">
                    <div className="offer-thumb">
                        <img src={hotelsArray[i].images[1]} alt="" className="img-card" />
                    </div>
                    <div className="offer-details">

                        <div className="offer-info">
                            <h5><i className="flaticon-comment" />{hotelsArray[i].reviewsnum} reviews</h5>
                            <Rating initialValue={hotelsArray[i].starnum} fillColor={'#ea965d'} size={20} style={React.CSSProperties = { top: '-5px' }} readonly />
                        </div>
                        <h3>
                            <i className="flaticon-arrival icon-beside-word" />
                            {hotelsArray[i].name}
                        </h3>
                        <p class="city"><i className="flaticon-footprints icon-beside-word"></i>{hotelsArray[i].city}</p>
                        <p class="price">{hotelsArray[i].price} EGP</p>
                    </div>
                </div>)
        }
        // attraction
        var attractionsArray = this.state.attractions

        for (let i = 0; i < attractionsArray.length; i++) {
            attractionsHTML.push(
                <div className="offer-card">
                    <div className="offer-thumb">
                        <img src={attractionsArray[i].images[1]} alt="" className="img-card" />
                    </div>
                    <div className="offer-details">
                        <div className="offer-info">
                            <h5><i className="flaticon-comment" />{attractionsArray[i].reviewsnum} reviews</h5>
                            <Rating initialValue={attractionsArray[i].rate} fillColor={'#ea965d'} size={20} style={React.CSSProperties = { top: '-5px' }} readonly />
                        </div>
                        <h3>
                            <i className="flaticon-arrival icon-beside-word" />
                            {attractionsArray[i].name}
                        </h3>
                        <p class="city"><i className="flaticon-footprints icon-beside-word"></i>{attractionsArray[i].city}</p>
                        <p class="city"><span class="span">Type: </span>{attractionsArray[i].typeofattraction}</p>
                    </div>
                </div>)
        }
        // restaurants
        var restaurantsArray = this.state.restaurants

        for (let i = 0; i < restaurantsArray.length; i++) {
            restaurantsHTML.push(
                <div className="offer-card">
                    <div className="offer-thumb">
                        <img src={restaurantsArray[i].images[1]} alt="" className="img-card" />
                    </div>
                    <div className="offer-details">
                        <div className="offer-info">
                            <h5><i className="flaticon-comment" />{restaurantsArray[i].reviewsnum} reviews</h5>
                            <Rating initialValue={restaurantsArray[i].rate} fillColor={'#ea965d'} size={20} style={React.CSSProperties = { top: '-5px' }} readonly />
                        </div>
                        <h3>
                            <i className="flaticon-arrival icon-beside-word" />
                            {restaurantsArray[i].name}
                        </h3>
                        <p class="city"><i className="flaticon-footprints icon-beside-word"></i>{restaurantsArray[i].city}</p>
                        <p class="city"><span class="span"> </span>{restaurantsArray[i].cuisines}</p>
                    </div>
                </div>)
        }


        return (
            <>
                {/* =============== Destinations area start =============== */}
                <div></div>
                <div className="destinations-area pt-105">
                    <div className="container">
                        <div className="col-lg-12 col-md-12">
                            <h2 align="center" >Explore <span style={React.CSSProperties = { color: "#ea965d" }}>{placeArray[0].name}</span>
                            </h2>
                        </div>
                        <div className="row about-info">
                            <div className="col-lg-6 col-md-12">
                                <div style={React.CSSProperties = { width: "597px" }} >
                                    <div className="about-img">
                                        <OwlCarousel {...ImageOptions}>
                                            {placeImages}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="about-wrapper-right section-head head-left">

                                    <h2 style={React.CSSProperties = { margin: "7px" }}>About city
                                    </h2>

                                    <p style={React.CSSProperties = { margin: "7px" }}>Fusce aliquam luctus est, eget tincidunt velit scelerisque
                                        rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec,
                                        mattis mauris. Nunc nec ornare nisi, vel elementum est.
                                        Proin malesuada venenatis ex, eu fringilla justo scelerisque
                                        sit amet. Sed fringilla nec purus non venenatis. Aliquam
                                        nec turpis pharetra, bibendum lorem in, sollicitudin nibh.
                                        Nulla sit amet lacus diam.</p>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head pb-40">
                                    <h5>Enjoy your Trip</h5>
                                    <h2>Explore a lot in the city</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="package-slider-wrap">
                                    <img src={destinations1Img} alt="" className="img-fluid" />
                                    <div className="pakage-overlay">
                                        <p><strong>Stay</strong></p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-9 col-md-9">
                                <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                    {hotelsHTML}
                                </OwlCarousel>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="package-slider-wrap">
                                    <img src={destinations2Img} alt="" className="img-fluid" />
                                    <div className="pakage-overlay">
                                        <strong>Eat</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                    {restaurantsHTML}

                                </OwlCarousel>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="package-slider-wrap">
                                    <img src={destinations3Img} alt="" className="img-fluid" />
                                    <div className="pakage-overlay">
                                        <strong>Do</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                    {attractionsHTML}

                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =============== Destinations area end =============== */}
            </>
        );
    }
}

export default withRouter(AboutCity);
