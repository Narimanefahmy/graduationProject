import React, { Component } from "react";
import {Link} from "react-router-dom";

//Load Image
import package1Img from "../../../assets/images/package/p-1.png"
import package2Img from "../../../assets/images/package/p-2.png"
import package3Img from "../../../assets/images/package/p-3.png"
import package4Img from "../../../assets/images/package/p-4.png"
import package5Img from "../../../assets/images/package/p-5.png"
import package6Img from "../../../assets/images/package/p-6.png"
import plan from "../../../assets/images/plan.jpg"

class Plan extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
       <>
         {/* ===============  Package  area start =============== */}
         <div className="package-area pt-120">
           <div className="container">
             <div className="row">
               <div className="col-lg-12 col-md-4 col-sm-4">
                 <div className="section-head pb-45">
                   <h5>Generate your own Plan</h5>
                   <h2>choose the suitable choices and appointments </h2>
                 </div>
               </div>
             </div>

             <div className="row">

              <div className="col-lg-12 col-md-6 col-sm-6 wow" data-wow-duration="1500ms" data-wow-delay="0ms">
                <p class="plan-text">you can now book multiple reservations and buy for all as a package!
                customize your own timetable as you like to make your trip more organized!</p>
                <div class="image-div">
                       <img class="plan-image" src={plan} alt=""  />
                       <button class="plan-button">Lets Customize your own Plan 
                            </button>
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

export default Plan;
