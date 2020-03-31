import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import ProfileModal from "./profile/ProfileModal";
import Header from "./Header";
import SideNav from "./SideNav";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header/>
        <div class="content">
          <SideNav/>
          <div className="ui content-main">
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/delete/:id" exact component={StreamDelete} />
              <Route path="/streams/:id" exact component={StreamShow} />
              <Route path="/profile/:id" exact component={ProfileModal} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
