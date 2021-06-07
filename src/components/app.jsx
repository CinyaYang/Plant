import React, { Component } from "react";
import Header from "./header.jsx";
import Home from "./home.jsx";
import PlantDetail from "./plantDetail.jsx";
import AttractionDetail from "./attractionDetail.jsx";
import Contact from "./contact.jsx";
import PlantsMenu from "./plantsMenu.jsx";
import AttractionsMenu from "./attractionsMenu.jsx";
import NotFound from "./notFound.jsx";

import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateNewAttraction from "./createNewAttraction";
import CreateNewPlant from "./createNewPlant";

class App extends Component {
  // componentDidMount() {
  //   const a = getPlants();
  // }

  render() {
    return (
      <div>
        <ToastContainer />

        <Header />
        <div className="content">
          <Switch>
            <Route path="/plantDetail/:plantId" component={PlantDetail} />
            <Route
              path="/attractionDetail/:attactionId"
              component={AttractionDetail}
            />

            <Route
              path="/createNewAttraction"
              component={CreateNewAttraction}
            />
            <Route path="/createNewPlant" component={CreateNewPlant} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/plantsMenu"
              render={props => <PlantsMenu offset="0" limit="20" />}
              component={PlantsMenu}
            />
            <Route path="/attractionsMenu" component={AttractionsMenu} />
            <Route path="/notFound" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Redirect to="notFound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
