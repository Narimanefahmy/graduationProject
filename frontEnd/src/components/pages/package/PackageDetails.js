import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { withRouter } from "react-router";


import pd_thumb from "../../../assets/images/package/pd-thumb.png"
import pr_1 from "../../../assets/images/package/pr-1.png"

import gallery1Img from "../../../assets/images/gallary/gl-1.png"
import gallery2Img from "../../../assets/images/gallary/gl-2.png"
import gallery4Img from "../../../assets/images/gallary/gl-4.png"
import gallery5Img from "../../../assets/images/gallary/gl-5.png"
import gallery6Img from "../../../assets/images/gallary/gl-6.png"

import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png"
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png"
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png"

import gallery17Img from "../../../assets/images/gallary/gl-17.png"
import gallery16Img from "../../../assets/images/gallary/gl-16.png"
import gallery14Img from "../../../assets/images/gallary/gl-14.png"

import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png"
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png"
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png"
import galleryGxl4Img from "../../../assets/images/gallary/g-xl-4.png"

import pm_sm_1 from "../../../assets/images/package/p-sm-1.png";
import pm_sm_4 from "../../../assets/images/package/p-sm-4.png";
import pm_sm_2 from "../../../assets/images/package/p-sm-2.png";
import pm_sm_3 from "../../../assets/images/package/p-sm-3.png";

import organizer from "../../../assets/images/organizer.png";
import sidebarBannar from "../../../assets/images/sidebar-banner.png";

import { SRLWrapper } from "simple-react-lightbox";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { postData } from "../../../assets/js/postFetch.js"
import { Rating } from 'react-simple-star-rating'
import Pagination from "react-js-pagination";



class PackageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            hotelData: null,
            activePage: 1
        };
    }
    changeDatepickerHandeller = (date) => {
        this.setState({ startDate: date });
    }

    getData(route) {
        fetch("http://localhost:8000/backend/" + route)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    hotelData: data[0]
                })
            });
    }

    componentDidMount() {
        this.scrollTop();
        postData(this.props.match.params, "hotels")
        setTimeout(() => {
            this.getData("hotels")
        }, 1100);
    }


    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    ShowMoreAppearance() {
        var main_div = document.querySelector(".showMore-div")
        var overlay = document.querySelector("#hotel-overlay")
        overlay.classList.add("appear");
        main_div.classList.add("appear");
    }

    showMoreExit() {
        var main_div = document.querySelector(".showMore-div")
        var overlay = document.querySelector("#hotel-overlay")
        overlay.classList.remove("appear");
        main_div.classList.remove("appear");
    }

    checkArray(type, array, array_HTML1, index) {
        var array_HTML2 = []
        var array_HTML3
        if (array === "None") {
            array_HTML1.push()
        } else {
            if (array.length > index) {
                for (let i = 0; i < index; i++) {
                    array_HTML2.push(
                        <li><i className="bx bx-check" /> {array[i]} </li>
                    )
                }
                array_HTML3 = <a className="hotel-see-more" href="javascript:void(0)" onClick={this.ShowMoreAppearance}>Show more</a>
            } else {
                for (let i = 0; i < array.length; i++) {
                    array_HTML2.push(
                        <li><i className="bx bx-check" /> {array[i]} </li>
                    )
                }
            }
            array_HTML1.push(
                <tr>
                    <td>{type}</td>
                    <td className="td-position">
                        <ul className="table-list-allow">{array_HTML2}</ul>
                        {array_HTML3}
                    </td>
                </tr>
            )
            array_HTML2 = []
            array_HTML3 = ''
        }
    }

    allArray(type, array_HTML1) {
        if (type === "None") {
            array_HTML1.push()
        }
        else {
            for (let i = 0; i < type.length; i++) {
                array_HTML1.push(
                    <div className="more-details"><i className="bx bx-check" /> {type[i]} </div>
                )
            }
        }
    }

    async handlePageChange(array,array_HTML,pageNumber) {
        this.setState({activePage: await pageNumber});
        var index= await this.setState.activePage
        this.reviewspagination(array,array_HTML,index)
      
      }

    reviewspagination(array,hotel_reviews_HTML,index)
    {
        var hotel_review_show = []
        var size = 5*index;
        var items = array.slice((index-1)*5, size)
        for (let i = 0; i < items.length; i++) {
            var review_01 = (items[i].review).slice(0, 400);
            var review_02 = (items[i].review).slice(400);
            if (review_02 == "") {
                hotel_review_show.push(
                    <p>{review_01} </p>
                )
            } else {
                hotel_review_show.push(
                    <div>
                        <input type="checkbox" class="read-more-state" id={i} />
                        <p className="read-more-wrap">{review_01}<span class="read-more-target">{review_02}</span></p>
                        <label for={i} class="read-more-trigger"></label>
                    </div>
                )
            }
            hotel_reviews_HTML.push(
                <li className="p-review-card">
                    <div className="p-review-info">
                        <div className="p-reviewr-img">
                            <img src={pr_1} alt="" />
                        </div>
                        <div className="p-reviewer-info">
                            <strong>{items[i].profileName}</strong>
                            <p className="review-date">{items[i].date}</p>
                            <Rating initialValue={items[i].rate[0]} fillColor={'#ea965d'} size={20} style={React.CSSProperties = { top: '-5px' }} readonly />
                        </div>
                    </div>
                    <div className="p-review-texts">
                        <p className="review-title">{items[i].title}</p>
                        {hotel_review_show}
                        <p className="review-dateofstay">{items[i].dateOfStay}</p>
                    </div>
                    <Link to={`#`} className="r-reply-btn"><i className="bx bx-reply" /> Reply</Link>
                </li>
            )
            hotel_review_show = [] 

        }
        

        

    }

    handelRviewRate(rate){
        if(rate == 20){
            var num = 1
        }else if(rate == 40){
            num = 2
        }else if(rate == 60){
            num = 3
        }else if(rate == 80){
            num = 4
        }else if (rate == 100){
            num = 5
        }
        console.table(num)
    }

    render() {
        const startDate = this.state.startDate;
        if (!this.state.hotelData) {
            // resource is not yet loaded
            return <div>Loading resource...</div>;
        }
        console.table(this.state.hotelData)
        const hotel_Details = this.state.hotelData
        // images
        const hotel_images = hotel_Details.images
        var hotel_img_HTML = null
        if (hotel_images.length == 0) {
            hotel_img_HTML = <img className="hotel-base-img main-gallary" src="https://www.hopkinsmedicine.org/sebin/o/m/noimageavailable.png" alt="" />
        }
        else {
            hotel_img_HTML = <img className="hotel-base-img main-gallary" src={hotel_images[0]} alt="" />
        }
        // price
        const hotel_Price = hotel_Details.price
        var hotel_Price_HTML = null
        if (hotel_Price == null) {
            hotel_Price_HTML = <p>not provided by hotel administration</p>
        }
        else {
            hotel_Price_HTML = <p className="marign-price book-p" >{hotel_Price + " EGP"}</p>
        }
        // number of rooms
        const hotel_Rooms = hotel_Details.Numofrooms
        var hotel_Rooms_HTML = []
        if (hotel_Rooms == null) {
            hotel_Rooms_HTML.push(<p>not provided</p>)
        }
        else {
            hotel_Rooms_HTML.push(<p>{hotel_Rooms}</p>)
        }
        // languages
        const hotel_Languages = hotel_Details.languagespoken
        var hotel_languages_HTML = null
        if (hotel_Languages == "None") {
            hotel_languages_HTML = <p>not provided</p>
        }
        else {
            hotel_languages_HTML = <p>{hotel_Languages}</p>
        }
        // telephone
        const hotel_telephone = hotel_Details.telephone
        var hotel_telephone_HTML = null
        if (hotel_telephone == "None") {
            hotel_telephone_HTML = <p>not provided</p>
        }
        else {
            hotel_telephone_HTML = <p>{hotel_telephone}</p>
        }
        // About
        const hotel_description = hotel_Details.description
        var hotel_description_HTML = []
        if (hotel_description == "None") {
            hotel_description_HTML.push(<p>{hotel_Details.name + ", " + hotel_Details.city}</p>)
        } else {
            var about_01 = hotel_description.slice(0, 400);
            var about_02 = hotel_description.slice(400);
            if (about_02 == "") {
                hotel_description_HTML.push(
                    <div>
                        <p className="p-about">{about_01} </p>
                    </div>
                )
            } else {
                hotel_description_HTML.push(
                    <div>
                        <input type="checkbox" class="read-more-state" id="about" />
                        <p className="read-more-wrap">{about_01}<span class="read-more-target">{about_02}</span></p>
                        <label for="about" class="read-more-trigger"></label>
                    </div>
                )
            }

        }
        // Propertyamenities
        const hotel_Propertyamenities = hotel_Details.Propertyamenities
        var hotel_Propertyamenities_HTML = []
        this.checkArray("Property Amenities", hotel_Propertyamenities, hotel_Propertyamenities_HTML, 6)
        // room features 
        const hotel_roomfeatures = hotel_Details.roomfeatures
        var hotel_roomfeatures_HTML = []
        this.checkArray("Room Features", hotel_roomfeatures, hotel_roomfeatures_HTML, 6)
        // room types
        const hotel_roomtypes = hotel_Details.roomtypes
        var hotel_roomtypes_HTML = []
        this.checkArray("Room Types", hotel_roomtypes, hotel_roomtypes_HTML, 6)
        // hotel style
        const hotel_hotelstyle = hotel_Details.hotelstyle
        var hotel_hotelstyle_HTML = []
        this.checkArray("Room Style", hotel_hotelstyle, hotel_hotelstyle_HTML, 6)
        var all_Hotel_Propertyamenities = []
        this.allArray(hotel_Propertyamenities, all_Hotel_Propertyamenities)
        var all_Hotel_Features = []
        this.allArray(hotel_roomfeatures, all_Hotel_Features)
        var all_Hotel_Types = []
        this.allArray(hotel_roomtypes, all_Hotel_Types)
        // rate
        const hotel_Rate = hotel_Details.rating
        var hotel_Rate_HTML = null
        if (hotel_Rate === "None") {
            hotel_Rate_HTML = <p>Rate not provided</p>
        }
        else {
            hotel_Rate_HTML = <h2>{hotel_Rate}</h2>
        }
        //state
        const hotel_State = hotel_Details.state
        var hotel_State_HTML = null
        if (hotel_State === "None") {
            hotel_State_HTML = <p>State not provided</p>
        }
        else {
            hotel_State_HTML = <h5>{hotel_State}</h5>
        }
        // images 
        var hotel_images_Html = []
        var hotel_images_Html_temp = []
        if (hotel_images.length == 0) {
            hotel_images_Html.push()
        } else {
            hotel_images.forEach(img => {
                hotel_images_Html_temp.push(
                    <a href={img} className="main-gallary">
                        <img src={img} />
                    </a>
                )
            });
            hotel_images_Html.push(
                <div class="wrapper">
                    {hotel_images_Html_temp}
                </div>
            )
        }
        // reviews 
        const hotel_reviews = hotel_Details.hotelreviews
        var hotel_reviews_HTML = []
        var hotel_reviews_pagination = []
        if (hotel_reviews == "None") {
            hotel_reviews_HTML.push(<h3>Be the first to review</h3>)
        }
        else {
            this.reviewspagination(hotel_reviews,hotel_reviews_HTML,this.state.activePage)
            hotel_reviews_pagination.push(
            <div className="row">
                <div className="col-lg-12">
                    <div className="custom-pagination mt-40">
                            <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={5}
                            totalItemsCount={hotel_reviews.length}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange.bind(this,hotel_reviews,hotel_reviews_HTML)}
                            innerClass={"inner-pagination"}
                            />
                    </div>
                </div>
            </div>
            )
        }

        const tooltipArray = [
            '1','2','3','4','5'
          ]

        return (
            <>
                <div id="hotel-overlay" className="overlay"></div>
                {/* ===============  breadcrumb area end =============== */}
                <div className="package-details-wrapper pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="package-details">
                                    <div className="package-thumb">
                                        <SRLWrapper>
                                            {hotel_img_HTML}
                                        </SRLWrapper>
                                    </div>
                                    <div className="package-header">
                                        <div className="package-title">
                                            <h3>{hotel_Details.name}</h3>
                                            <p>
                                                <i className="flaticon-arrival" />
                                                {" " + hotel_Details.address}
                                            </p>
                                        </div>
                                        <div className="pd-review">
                                            <p>{hotel_Details.city}</p>
                                            <Rating initialValue={hotel_Details.starnum} fillColor={'#ea965d'} size={20} style={React.CSSProperties = { top: '-5px' }} readonly />
                                            <p>{hotel_Details.reviewsnum + " reviews"} </p>
                                        </div>
                                    </div>
                                    <div className="p-short-info">
                                        <div className="single-info">
                                            <i className='bx bx-hotel' />
                                            <div className="info-texts">
                                                <strong>Number of rooms</strong>
                                                {hotel_Rooms_HTML}
                                            </div>
                                        </div>
                                        <div className="single-info">
                                            <i className="flaticon-translate" />
                                            <div className="info-texts">
                                                <strong>Languages</strong>
                                                {hotel_languages_HTML}
                                            </div>
                                        </div>
                                        <div className="single-info">
                                            <i className='bx bx-phone-call' />
                                            <div className="info-texts">
                                                <strong>Telephone</strong>
                                                {hotel_telephone_HTML}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showMore-div">
                                        <div className="package-tab">
                                            <h3>Amenities</h3>
                                            <span class="exit" onClick={this.showMoreExit}>X</span>
                                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                <li className="nav-item XX" role="presentation">
                                                    <button className="nav-link active" id="pills-amenities-tab" data-bs-toggle="pill" data-bs-target="#pills-amenities" type="button" role="tab" aria-controls="pills-amenities" aria-selected="true"><i className="flaticon-info" />
                                                        Property amenities</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-features-tab" data-bs-toggle="pill" data-bs-target="#pills-features" type="button" role="tab" aria-controls="pills-features" aria-selected="false"><i className="flaticon-clipboard" />
                                                        Room features</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-types-tab" data-bs-toggle="pill" data-bs-target="#pills-types" type="button" role="tab" aria-controls="pills-types" aria-selected="false"> <i className="flaticon-gallery" />
                                                        Room types</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content p-tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-amenities" role="tabpanel" aria-labelledby="pills-amenities-tab">
                                                    {all_Hotel_Propertyamenities}
                                                </div>
                                                <div className="tab-pane fade show " id="pills-features" role="tabpanel" aria-labelledby="pills-features-tab">
                                                    {all_Hotel_Features}
                                                </div>
                                                <div className="tab-pane fade show " id="pills-types" role="tabpanel" aria-labelledby="pills-types-tab">
                                                    {all_Hotel_Types}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="package-tab">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="flaticon-info" />
                                                    Information</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="flaticon-clipboard" />
                                                    Travel Plan</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> <i className="flaticon-gallery" />
                                                    Our Gallary</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content p-tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="tab-content-1">
                                                            <div className="p-overview">
                                                                <h5>About</h5>
                                                                {hotel_description_HTML}
                                                            </div>
                                                            <div className="p-details-table">
                                                                <table className="table caption-top cust-table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>City</td>
                                                                            <td>{hotel_Details.city}</td>
                                                                        </tr>
                                                                        {hotel_Propertyamenities_HTML}
                                                                        {hotel_roomfeatures_HTML}
                                                                        {hotel_roomtypes_HTML}
                                                                        {hotel_hotelstyle_HTML}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="p-rationg">
                                                                <h5>Rating</h5>
                                                                <div className="rating-card">
                                                                    <div className="r-card-avarag">
                                                                        {hotel_Rate_HTML}
                                                                        {hotel_State_HTML}
                                                                    </div>
                                                                    <div className="r-card-info">
                                                                        <ul>
                                                                            <li>
                                                                                <strong>Accommodation</strong>
                                                                                <ul className="r-rating">
                                                                                    <li>
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <strong>Transport</strong>
                                                                                <ul className="r-rating">
                                                                                    <li>
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bx-star" />
                                                                                        <i className="bx bx-star" />
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <strong>Comfort</strong>
                                                                                <ul className="r-rating">
                                                                                    <li>
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bx-star" />
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <strong>Hospitality</strong>
                                                                                <ul className="r-rating">
                                                                                    <li>
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bx-star" />
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <strong>Food</strong>
                                                                                <ul className="r-rating">
                                                                                    <li>
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bxs-star" />
                                                                                        <i className="bx bx-star" />
                                                                                        <i className="bx bx-star" />
                                                                                        <i className="bx bx-star" />
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="p-review">
                                                                <h5>Reviews</h5>
                                                                <ul>
                                                                    {hotel_reviews_HTML}
                                                                </ul>
                                                                {hotel_reviews_pagination}
                                                            </div>
                                                            <div className="p-review-input">
                                                                <form>
                                                                    <h5>Add Review</h5>
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <h6>Title</h6>
                                                                            <input type="text" placeholder="Write Your Title" />
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <h6>Date of Stay</h6>
                                                                            <div className="calendar-input" id="packageCalenderMainDiv">
                                                                                <DatePicker  onChange={(date) => this.changeDatepickerHandeller(date)} className="input-field check-in" placeholderText="dd-mm-yy" />
                                                                                <i className="flaticon-calendar" id="packageCalenderIcon" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <h6>Review</h6>
                                                                            <textarea cols={30} rows={7} placeholder="Write Your Review" defaultValue={""} />
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <Rating tooltipArray={tooltipArray} onClick={(rate)=> this.handelRviewRate(rate)} fillColor={'#ea965d'} size={30} style={React.CSSProperties = { top: '-5px', marginBottom: '30px' }}/>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            
                                                                            <input type="submit" defaultValue="Submit Now" />
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <div className="tab-content-2">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="p-timeline-overview">
                                                                <h5>Overview</h5>
                                                                <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus.</p>
                                                            </div>
                                                            <ul className="p-timeline">
                                                                <li>
                                                                    <div className="timeline-index">
                                                                        <div className="index-circle">
                                                                            <h5>01</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-content">
                                                                        <h5>DAY 1 : Departure And Small Tour</h5>
                                                                        <strong>10.00 AM to 10.00 PM</strong>
                                                                        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                        <ul>
                                                                            <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                            <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                            <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                            <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="timeline-index">
                                                                        <div className="index-circle">
                                                                            <h5>02</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-content">
                                                                        <h5>DAY 2 : Departure And Small Tour</h5>
                                                                        <strong>10.00 AM to 10.00 PM</strong>
                                                                        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                        <ul>
                                                                            <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                            <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                            <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                            <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="timeline-index">
                                                                        <div className="index-circle">
                                                                            <h5>03</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-content">
                                                                        <h5>DAY 3 : Departure And Small Tour</h5>
                                                                        <strong>10.00 AM to 10.00 PM</strong>
                                                                        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                        <ul>
                                                                            <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                            <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                            <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                            <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="timeline-index">
                                                                        <div className="index-circle">
                                                                            <h5>04</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-content">
                                                                        <h5>DAY 4 : Departure And Small Tour</h5>
                                                                        <strong>10.00 AM to 10.00 PM</strong>
                                                                        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                        <ul>
                                                                            <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                            <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                            <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                            <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="timeline-index">
                                                                        <div className="index-circle">
                                                                            <h5>05</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-content">
                                                                        <h5>DAY 5 : Departure And Small Tour</h5>
                                                                        <strong>10.00 AM to 10.00 PM</strong>
                                                                        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                        <ul>
                                                                            <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                            <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                            <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                            <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                <div className="tab-contant-3">
                                                    <SRLWrapper>
                                                        {hotel_images_Html}
                                                    </SRLWrapper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="package-d-sidebar">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="p-sidebar-form">
                                                <form>
                                                    <h5 className="package-d-head">Book This Package</h5>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className="book-p">Price</p>
                                                        </div>
                                                        <div className="col-lg-6 mx-auto">
                                                            {hotel_Price_HTML}
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <h5 className="book-h5">Check In</h5>
                                                            <div className="calendar-input" id="packageCalenderMainDiv">
                                                                <DatePicker selected={startDate} onChange={(date) => this.changeDatepickerHandeller(date)} className="input-field check-in" placeholder="Check In" />
                                                                <i className="flaticon-calendar" id="packageCalenderIcon" />
                                                            </div>

                                                        </div>
                                                        <div className="col-lg-12 ">
                                                            <h5 className="book-h5">Check Out</h5>
                                                            <div className="calendar-input" id="packageCalenderMainDiv">
                                                                <DatePicker selected={startDate} onChange={(date) => this.changeDatepickerHandeller(date)} className="input-field check-in" placeholder="mm-mm-yy" />
                                                                <i className="flaticon-calendar" id="packageCalenderIcon" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>No of Rooms</option>
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                                <option value={5}>5</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Adult</option>
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                                <option value={5}>5</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Child</option>
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                                <option value={5}>5</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <input type="submit" defaultValue="Book Now" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="p-sidebar-cards mt-40">
                                                <h5 className="package-d-head">Popular Packages</h5>
                                                <ul className="package-cards">
                                                    <li className="package-card-sm">
                                                        <div className="p-sm-img">
                                                            <img src={pm_sm_1} alt="" />
                                                        </div>
                                                        <div className="package-info">
                                                            <div className="package-date-sm">
                                                                <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                            </div>
                                                            <h3><i className="flaticon-arrival" />
                                                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>Lake Garda</Link>
                                                            </h3>
                                                            <h5><span>$180</span>/ Per Person</h5>
                                                        </div>
                                                    </li>
                                                    <li className="package-card-sm">
                                                        <div className="p-sm-img">
                                                            <img src={pm_sm_4} alt="" />
                                                        </div>
                                                        <div className="package-info">
                                                            <div className="package-date-sm">
                                                                <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                            </div>
                                                            <h3><i className="flaticon-arrival" />
                                                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>Paris Hill Tour</Link>
                                                            </h3>
                                                            <h5><span>$180</span>/ Per Person</h5>
                                                        </div>
                                                    </li>
                                                    <li className="package-card-sm">
                                                        <div className="p-sm-img">
                                                            <img src={pm_sm_2} alt="" />
                                                        </div>
                                                        <div className="package-info">
                                                            <div className="package-date-sm">
                                                                <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                            </div>
                                                            <h3><i className="flaticon-arrival" />
                                                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>Amalfi Costa</Link>
                                                            </h3>
                                                            <h5><span>$180</span>/ Per Person</h5>
                                                        </div>
                                                    </li>
                                                    <li className="package-card-sm">
                                                        <div className="p-sm-img">
                                                            <img src={pm_sm_3} alt="" />
                                                        </div>
                                                        <div className="package-info">
                                                            <div className="package-date-sm">
                                                                <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                            </div>
                                                            <h3><i className="flaticon-arrival" />
                                                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>Mount Dtna</Link>
                                                            </h3>
                                                            <h5><span>$180</span>/ Per Person</h5>
                                                        </div>
                                                    </li>
                                                    <li className="package-card-sm">
                                                        <div className="p-sm-img">
                                                            <img src={pm_sm_4} alt="" />
                                                        </div>
                                                        <div className="package-info">
                                                            <div className="package-date-sm">
                                                                <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                            </div>
                                                            <h3><i className="flaticon-arrival" />
                                                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>Fench Rivirany</Link>
                                                            </h3>
                                                            <h5><span>$180</span>/ Per Person</h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="p-sidebar-organizer mt-40">
                                                <h5 className="package-d-head">Organized By</h5>
                                                <div className="organizer-card">
                                                    <div className="organizer-img">
                                                        <img src={organizer} alt="" />
                                                    </div>
                                                    <div className="organizer-info">
                                                        <h5>Travelhotel</h5>
                                                        <p>Member since 2021</p>
                                                        <ul className="organizer-rating">
                                                            <li><i className="bx bxs-star" /></li>
                                                            <li><i className="bx bxs-star" /></li>
                                                            <li><i className="bx bxs-star" /></li>
                                                            <li><i className="bx bxs-star" /></li>
                                                            <li><i className="bx bx-star" /></li>
                                                        </ul>
                                                        <h5>500 Reviews</h5>
                                                    </div>
                                                </div>
                                                <div className="p-ask-btn">
                                                    <Link to={`${process.env.PUBLIC_URL}/contact`} >ASK A QUESTION</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="p-sidebar-banner mt-40">
                                                <img src={sidebarBannar} alt="" className="img-fluid" />
                                                <div className="sidebar-banner-overlay">
                                                    <div className="overlay-content">
                                                        <h3>Get 50% Off
                                                            In Dubai Tour</h3>
                                                        <div className="sidebar-banner-btn">
                                                            <Link to={`#`} >Book Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(PackageDetails);
