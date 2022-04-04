import React, { Component } from "react";
import {Link,NavLink}               from "react-router-dom";

//Import Image
import logoMain             from "../../assets/images/logo.png"
import secondLogo from "../../assets/images/logo-2.png"

class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            search: null,
            places: null,
            hotels: null,
            attraction: null,
            restaurant: null,
        };
    }
    
    removeLastSearch() {
        this.setState({
            search: ""
        });
  }
    
    
    fetchHotel() {
   
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
                console.table(data.hotels)
               
            this.setState({
                    
                hotels: data.hotels,
                attraction: null,
            }); 
    
        });    
    }
    fetchRestaurant() {
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
                    restaurant: data.restaurant,
                    hotels: null,
                    attraction:null

            }); 

        });     
    }

    fetchAttraction() {
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
                    attraction: data.attraction,
                    hotels: null,
                    restaurant:null,
               

            }); 
        });     
    }
   

    container = React.createRef();
   
    
    
    _handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            ev.preventDefault();
            window.location.replace("../search/SearchResults");
          }
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
        
        
        }
   
   
  
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
    removeGeneralSearch()
    {
        document.getElementById("search").style.display = "none";
    }
    render() {
       
        var attractionArray = []
        var hotelsArray = []
        var restaurantsArray = []
        const placesHTML = []
    
        if (this.state.hotels != null) {
            if (!this.state.hotels) {

           
            }
            else {
                hotelsArray = this.state.hotels;
              
                if (hotelsArray.length < 1) {
                    placesHTML.push(
                        placesHTML.push(<div class="no-result2" >No results found</div>)
                    )
                }
                for (let i = 0; i < hotelsArray.length; i++) {
           
                        placesHTML.push(
                          
                            <a href={`${process.env.PUBLIC_URL}/package-details`}>
                                <div class="image-search"><picture>
                                    <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                        width="100" height="70" alt="">
                                    </img>
                                </picture></div>
                                <div class="description"><div><div class="city-name">{hotelsArray[i].name}</div><div>{hotelsArray[i].city}</div></div></div>
                            </a>
                                
                        )
                }
                 
                placesHTML.push(
                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >see all results</NavLink>
                )
              
         
                }
            
        } if (this.state.attraction != null) {
           
                if (!this.state.attraction) {
                }
                else {
                    attractionArray = this.state.attraction;
               
                    if (attractionArray.length < 1) {
                        placesHTML.push(
                            placesHTML.push(<div class="no-result2" >No results found</div>)
                        )
                    }
                    for (let i = 0; i < attractionArray.length; i++) {
        
 
                        placesHTML.push(
                          
                            <a href={`${process.env.PUBLIC_URL}/package-details`}>
                                <div class="image-search"><picture>
                                    <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                        width="100" height="70" alt="">
                                    </img>
                                </picture></div>
                                <div class="description"><div><div class="city-name">{attractionArray[i].name}</div><div>{attractionArray[i].city}</div></div></div>
                            </a>
                                
                        )
                        
                    }
                    placesHTML.push(
                        <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >see all results</NavLink>
                    )
                
                }
            }
        
         if (this.state.restaurant != null) {
          
                if (!this.state.restaurant) {
                }
                else {
                    restaurantsArray = this.state.restaurant;
                    if (restaurantsArray.length < 1) {
                        placesHTML.push(
                            placesHTML.push(<div class="no-result2" >No results found</div>)
                        )
                    }
            
                    for (let i = 0; i < restaurantsArray.length; i++) {
                        placesHTML.push(
                          
                            <a href={`${process.env.PUBLIC_URL}/package-details`}>
                                <div class="image-search"><picture>
                                    <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=100&amp;h=-1&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/10/e1/d3/guest-room.jpg?w=200&amp;h=-1&amp;s=1 2x"
                                        width="100" height="70" alt="">
                                    </img>
                                </picture></div>
                                <div class="description"><div><div class="city-name">{restaurantsArray[i].name}</div><div>dwlfk</div></div></div>
                            </a>
                                
                        )
                        
                    }
                    placesHTML.push(
                        <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >see all results</NavLink>
                    )
                
                }
            }
        
            
           
                        
        return (
            <>
            {/* ===============  header area start =============== */}
            <header>
                <div className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                <div className="navbar-wrap">
                                    <div className="logo d-flex justify-content-between">
                                        <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand" onClick={this.scrollTop}><img src={logoMain} alt="" /></Link>
                                    </div>
                                    <div className="navbar-icons">
                                         <div className="searchbar-open"> 
                                            <i className="flaticon-magnifier" />
                                      </div> 
                                       
                                        <div className="mobile-menu d-flex ">
                                            <div className="top-search-bar m-0 d-block d-xl-none">
                                            </div>
                                            <Link to={"#"} className="hamburger d-block d-xl-none">
                                                <span className="h-top" />
                                                <span className="h-middle" />
                                                <span className="h-bottom" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                <nav className="main-nav">
                                    <div className="navber-logo-sm">
                                        <img src={secondLogo} alt="" className="img-fluid" />
                                    </div>
                                    <ul>
                                            <li
                                                 
                                                onClick={() => {
                                                    this.removeGeneralSearch(); 
                                                    this.removeLastSearch();
                                                } }>
                                        <span className="searchbar-open">
                                            <i><span class="span-search">Hotels
                                                    </span></i>
                                                </span>
                                            </li>
                                            
                                        <li onClick={() => {
                                                    this.removeGeneralSearch();
                                                    this.removeLastSearch();
                                                   

                                                } }> 
                                        <span className="searchbar-open2">
                                            <i><span class="span-search">Restaurants
                                                </span></i></span>
                                              
                                             
                                        </li>
                                        <li onClick={this.removeGeneralSearch} >
                                        <span className="searchbar-open">
                                            <i><span class="span-search">Rent car
                                                </span></i></span>
                                              
                                        </li>
                                        <li onClick={() => {
                                                    this.removeGeneralSearch();
                                                    this.removeLastSearch();
                                                   

                                                } }>
                                        <span className="searchbar-open">
                                            <i><span class="span-search">Flights
                                                </span></i></span>
                                              
                                        </li>
                                        <li onClick={this.removeGeneralSearch} >
                                        <span className="searchbar-open3">
                                            <i><span class="span-search">Attractions
                                                </span></i></span>
                                              
                                        </li>
                                        {/* <li className="has-child-menu">
                                            <Link to={"#"}>Pages</Link>
                                            <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/gallary`} className="sub-item" onClick={this.scrollTop}>gallary page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/guide`} className="sub-item" onClick={this.scrollTop}>guide page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/destination`} className="sub-item" onClick={this.scrollTop}>destination page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/404`} className="sub-item" onClick={this.scrollTop}>404 Page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/faq`} className="sub-item" onClick={this.scrollTop}>FAQ page</NavLink>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li onClick={this.removeGeneralSearch} >
                                        <span className="searchbar-open">
                                            <i><span class="span-search">Tour Guide 
                                                </span></i></span>
                                              
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/contact`} onClick={this.scrollTop} >Contact Us</NavLink>
                                        </li>
                                    </ul>
                                    <div className="navbar-icons-2">
                                        <div className="searchbar-open">
                                            <i className="flaticon-magnifier" />
                                        </div>
                                        <div className="user-dropdown-icon">
                                            <i className="flaticon-user" />
                                            <div className="account-dropdown">
                                                <ul>
                                                    <li className="account-el">
                                                        <i className="bx bx-user-pin" />
                                                        <Link to={`registeration`} >Sign in</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bxs-user-account" />
                                                        <Link to={`#`} >My Account</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bx-extension" />
                                                        <Link to={`#`} >Settings</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bx-log-in-circle" />
                                                        <Link to={`#`} >Log out</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div class="cart">
                                              <h5> <i class="fa fa-shopping-cart"></i></h5>
                                            </div>
                                    </div>
                                    <div className="sidebar-contact">
                                        <ul>
                                            <li className="sidebar-single-contact"><i className="bx bxs-phone" />
                                                <Link to={`tel:+17632275032`} >+1 763-227-5032</Link>
                                            </li>
                                            <li className="sidebar-single-contact"><i className="bx bxs-envelope" />
                                                <Link to={`mailto:info@example.com`} >info@example.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
<div ref={this.container}>
                        <form>
                     
                        <div className="main-searchbar">
                                <div className="searchbar-close">       
                            </div>
                                <input id="input" type="text" placeholder="Search Hotel......" name="search" value={this.state.search}
                                    onChange={(e) => this.setState({ search: e.target.value })}
                                    autoComplete="off"
                                    onKeyPress={(ev) => { this._handleKeyDown(ev)}}/>
                            <div className="searchbar-icon" >
                                    <i className="bx bx-search"
                                         onClick={() => {
                                            this.handleButtonClick();
                                            this.fetchHotel();
                                        }}
                                        
                                          autoComplete="off"
                                          onKeyPress={(ev) => { this._handleKeyDown(ev)}}/>
                                    </div>{this.state.open && (
                            <div  class="dropdown-conten" >
                                  {placesHTML}
                                    </div>  
                                        )}
                                </div>
                             
                    </form>
                        <form>
                        <div className="main-searchbar2" >
                            <div className="searchbar-close2">    
                            </div>
                                    <input type="text" placeholder="Search Restaurant......" name="search"
                                    value={this.state.search}
                                    onChange={(e) => this.setState({ search: e.target.value })}
                                    autoComplete="off"
                                    onKeyPress={(ev) => { this._handleKeyDown(ev)}}/>
                            <div className="searchbar-icon">
                                    <i className="bx bx-search"
                                         onClick={() => {
                                            this.handleButtonClick();
                                            this.fetchRestaurant();           
                                          }}
                                                  />
                            </div>
                            {this.state.open && (
                            <div id="Dropdown" class="dropdown-conten">
                                  {placesHTML}
                                    </div>  
                                     )}
                                </div>
                                
                            </form>
                           
                        <form>
                      
                        <div className="main-searchbar3">
                            <div className="searchbar-close3">    
                            </div>
                                <input type="text" placeholder="Search Attraction......"
                                    name="search"
                                    value={this.state.search}
                                    onChange={(e) => this.setState({ search: e.target.value })}
                                    autoComplete="off"
                                    onKeyPress={(ev) => { this._handleKeyDown(ev)}}/>
                           
                            <div className="searchbar-icon">
                                    <i className="bx bx-search"
                                         onClick={() => {
                                            this.handleButtonClick();
                                            this.fetchAttraction();
                                          }}
                                                  />
                            </div>
                            {this.state.open && (
                            <div id="Dropdown" class="dropdown-conten">
                                  {placesHTML}
                                    </div>  
                                     )}
                                </div>
                                
                    </form>
 </div>
                </div>
            </header>
            {/* ===============  header area end =============== */}
            </>
        );
    }
}

export default Headers;
