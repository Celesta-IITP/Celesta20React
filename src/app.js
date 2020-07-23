import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ContactUsPage from "views/examples/ContactUsPage.js";
import Photos from "components/Gallery/gallery.js";
import Pronites from "components/pronites/pronites";
import SigninPage from "views/examples/SigninPage.js";
import Sponsors from "components/Sponsors/sponsors.js";
import Stats from "components/Stats/stats.js";
import MouseEffect from "components/MouseEffect/mouseEffect";
import NotFound from "components/NotFound/notFound.js";
import Events from "components/Events/Events.js";
import OnlineEvents from "./components/Explore/Online/online_explore";
import InformalEvents from "./components/Explore/Informal/info_explore";
import GamiacsEvents from "./components/Explore/Gamiacs/gamiacs_explore";
import ManagerialEvents from "./components/Explore/Managerial/man_explore";
import RoboticsEvents from "./components/Explore/Robotics/robo_explore";
import SuspEvents from "./components/Explore/SUSP/susp_explore";
import TechnicalEvents from "./components/Explore/Technical/tech_explore";
import CA from "components/CA/ca.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MouseEffect />
        <Switch>
          <Route
            path="/"
            exact="true"
            render={(props) => <Index {...props} />}
          />

          <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/events-page"
            render={(props) => <Events {...props} />}
          />
          <Route
            path="/register-page"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/signin-page"
            render={(props) => <SigninPage {...props} />}
          />
          <Route
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
          />
          <Route
            path="/contact-us-page"
            render={(props) => <ContactUsPage {...props} />}
          />
          <Route
            path="/events/online_events"
            exact
            render={(props) => <OnlineEvents {...props} />}
          />
          <Route
            path="/events/onsite_events"
            exact
            render={(props) => <InformalEvents {...props} />}
          />
          <Route
            path="/events/gamiacs_events"
            exact
            render={(props) => <GamiacsEvents {...props} />}
          />
          <Route
            path="/events/man_events"
            exact
            render={(props) => <ManagerialEvents {...props} />}
          />
          <Route
            path="/events/robo_events"
            exact
            render={(props) => <RoboticsEvents {...props} />}
          />
          <Route
            path="/events/susp_events"
            exact
            render={(props) => <SuspEvents {...props} />}
          />
          <Route
            path="/events/tech_events"
            exact
            render={(props) => <TechnicalEvents {...props} />}
          />
          <Route path="/gallery" render={(props) => <Photos {...props} />} />
          <Route path="/pronites" render={(props) => <Pronites {...props} />} />
          <Route path="/sponsors" render={(props) => <Sponsors {...props} />} />
          <Route path="/stats" render={(props) => <Stats {...props} />} />
          <Route path="/ca" render={(props) => <CA {...props} />} />
          <Route path="*" component={NotFound} />
          {/* <Redirect from="/" to="/components" /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
