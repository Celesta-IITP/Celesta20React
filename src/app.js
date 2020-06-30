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
import SigninPage from "views/examples/SigninPage.js";
import Sponsors from "components/Sponsors/sponsors.js";
import Stats from "components/Stats/stats.js";
import MouseEffect from "components/MouseEffect/mouseEffect";
import NotFound from "components/NotFound/notFound.js";
import CA from "components/CA/ca.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MouseEffect />
        <Switch>
          <Route path="/index" render={(props) => <Index {...props} />} />
          <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
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
          <Route path="/gallery" render={(props) => <Photos {...props} />} />
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
