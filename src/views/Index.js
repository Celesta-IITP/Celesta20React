/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Link} from 'react-router-dom';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Loader from "components/Loader/loader.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import Header from "views/IndexSections/Header.js";
import EventSlider from "views/IndexSections/EventSlider.js";
import StepWise from "views/IndexSections/StepWise.js";
import Stats from "../components/Stats/stats.js";
import '../components/Loader/script';

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
      <Loader/>
        <IndexNavbar />
        <div className="wrapper bg">
          <Header />
          <div className="main">
            <StepWise />
            <Stats />
            <EventSlider />
            <div className="pro" >
            <Link to="Pronites">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                  Visit our Most awaited PRONITES
                <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 </Link>
              </div>
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
