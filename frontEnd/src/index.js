import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Image LightBox
import SimpleReactLightbox from 'simple-react-lightbox'

//Layout default import from components.
import defaultLayout from "./components/layouts/main";
import secondLayout from "./components/layouts/main-two";

//Import wrapping layout
import Layout from "./components/app";

//Import all page from components
import aboutUs from "./components/pages/about-us/AboutUs";
import destinations from "./components/pages/destinations/Destinations";
import packages from "./components/pages/package/Packages";
import contact from "./components/pages/contact/Contact";
import faq from "./components/pages/faq/Faq";
import error from "./components/pages/404/404";
import guide from "./components/pages/guide/GuideComponent";
import gallary from "./components/pages/gallary/GalleryComponent";
import packageSidebar from "./components/pages/package/PackageSidebar";
import packageStandard from "./components/pages/package/PackageStanderd";
import packageDetails from "./components/pages/package/PackageDetails";
import blog from "./components/pages/blog/BlogComponent";
import blogSidebar from "./components/pages/blog/BlogSidebar";
import blogStandard from "./components/pages/blog/BlogStandard";
import blogDetails from "./components/pages/blog/BlogDetails";
import signIn from "./components/pages/registeration/SignIn";
import typeOfUser from "./components/pages/registeration/TypeOfUser";
import tourist from "./components/pages/registeration/Tourist";
import tourGuide from "./components/pages/registeration/TourGuide";
import admin from "./components/pages/registeration/Admin";
import SearchResults from "./components/pages/search/SearchResults";
import AboutCity from "./components/pages/aboutcity/AboutCity";
import FindForm from "./components/pages/home/FindForm";
import Plan from "./components/pages/home/Plan";

//Initializations All Css
import './index.css';
import './index.scss';

//Default Warniing Error Hide
console.log = console.warn = console.error = () => { };

/*
* Version : 0.1
* Event : Rendering all content to web.
* Actions: Define all routes and page.
* @return html
* */

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter basename={"/"}>
                <Switch>
                    <Route exact path='/' component={defaultLayout} />
                    <Route path={`${process.env.PUBLIC_URL}/home-page-2`} component={secondLayout} />
                    <Layout>
                        <Route path={`${process.env.PUBLIC_URL}/hotel/:city/:name`} component={packageDetails} />
                        <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs} />
                        <Route path={`${process.env.PUBLIC_URL}/destination`} component={destinations} />
                        <Route path={`${process.env.PUBLIC_URL}/package`} component={packages} />
                        <Route path={`${process.env.PUBLIC_URL}/package-sidebar`} component={packageSidebar} />
                        <Route path={`${process.env.PUBLIC_URL}/package-standard`} component={packageStandard} />
                        <Route path={`${process.env.PUBLIC_URL}/package-details`} component={packageDetails} />
                        <Route path={`${process.env.PUBLIC_URL}/faq`} component={faq} />
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error} />
                        <Route path={`${process.env.PUBLIC_URL}/guide`} component={guide} />
                        <Route path={`${process.env.PUBLIC_URL}/gallary`} component={gallary} />
                        <Route path={`${process.env.PUBLIC_URL}/blog`} component={blog} />
                        <Route path={`${process.env.PUBLIC_URL}/blog-sidebar`} component={blogSidebar} />
                        <Route path={`${process.env.PUBLIC_URL}/blog-standard`} component={blogStandard} />
                        <Route path={`${process.env.PUBLIC_URL}/blog-details`} component={blogDetails} />
                        <Route path={`${process.env.PUBLIC_URL}/contact`} component={contact} />
                        <Route path={`${process.env.PUBLIC_URL}/registeration`} component={signIn} />
                        <Route path={`${process.env.PUBLIC_URL}/typeOfUser`} component={typeOfUser} />
                        <Route path={`${process.env.PUBLIC_URL}/tourist`} component={tourist} />
                        <Route path={`${process.env.PUBLIC_URL}/tourGuide`} component={tourGuide} />
                        <Route path={`${process.env.PUBLIC_URL}/admin`} component={admin} />
                        <Route path={`${process.env.PUBLIC_URL}/search/:string`} component={SearchResults} />
                        <Route path={`${process.env.PUBLIC_URL}/AboutCity/:string`} component={AboutCity} />
                        <Route path={`${process.env.PUBLIC_URL}/FindForm`} component={FindForm} />
                        <Route path={`${process.env.PUBLIC_URL}/Plan`} component={Plan} />
                    </Layout>
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <Root />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
);

