import React, { Component } from "react";
import {Link} from "react-router-dom";

import pv_1 from "../../../assets/images/package/pv-1.png"
import axios from 'axios';

import $ from "jquery";
import MainBanner from "../home/MainBanner";

// Using an ES6 transpiler like Babel

// To include the default styles
import 'react-rangeslider/lib/index.css';

class SearchResults extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            // value: 10,
            manageState: ''       
        }
    }
  
    render() {
       // console.table(this.props);
        const searchHTML = [];
        const data = ["dsfj", "wfjf","dlel;","deld"];
            for (let i = 0; i < data.length; i++) {
                searchHTML.push(
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
    return (
        <>
           
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  Package  area start =============== */}
            <div className="package-standard-wrapper pt-120">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-8">
                            <div className="row mb-30">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="package-filter">
                                        <h2>Top results</h2>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="row">
                                <div className="col-lg-12 col-md-12"search-side >
                                        <div className="sidebar-searchbox " > 
                                            <div className="input-group search-box">
                                             <input type="text" className="form-control" placeholder="Search Tour..." aria-label="Recipient's username" aria-describedby="button-addon2"  />
                                             <button className="btn btn-outline-secondary" type="button"><i className="bx bx-paper-plane" /></button>
                                            </div>
                                        </div> 
                                            </div>                                  
                                   
                                <div className="col-lg-12 col-md-12">
                                    {/* {this.props.resultHTML} */}
                                    {searchHTML}
                                       </div>    
                                       
                           </div>               

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="pagination mt-40">
                                        <Link to={"#"}><i className="bx bx-chevron-left" /></Link>
                                        <Link to={"#"} className="active">1</Link>
                                        <Link to={"#"} >2</Link>
                                        <Link to={"#"} >3</Link>
                                        <Link to={"#"} >4</Link>
                                        <Link to={"#"}><i className="bx bx-chevron-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                </div>
            {/* ===============  Package  area end =============== */}
        </>
    );
  }
}

export default SearchResults;
