
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Home from "./Home";
import SigninSearching from "./SigninSearching";
import SigninService from "./SigninService";
import Login from "./Login";
import UserDashboard from "./userDashboard/UserDashboard";
import SigninFork from "./SigninFork";
import LandingPage from "./LandingPage";
import ServiceProviderDashboard from "./ServiceProviderDashboard/ServiceProviderDashboard";
import EventCreate from "./Event/EventCreate";
import EventSearch from "./Event/EventSearch";
import SPDisplay from "./ServiceProvider/SPDisplay";
import SPDisplayEdit from "./ServiceProvider/SPDisplayEdit";
import Map from "./map/Map"




function App() {
 

  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/SigninSearching">
          <SigninSearching/>
        </Route>
        <Route path="/SigninService">
          <SigninService/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/UserDashboard">
          <UserDashboard/>
        </Route>
        <Route path="/SigninFork">
          <SigninFork/>
        </Route>
        <Route path="/ServiceProviderDashboard">
          <ServiceProviderDashboard/>
        </Route>
        <Route path="/EventCreate">
          <EventCreate/>
        </Route>
        <Route path="/EventSearch">
          <EventSearch/>
        </Route>
        <Route path="/ServiceProviderDetails">
          <SPDisplay/>
        </Route>
        <Route path="/ServiceProviderDetailsEdit">
          <SPDisplayEdit/>
        </Route>
        <Route path="/Map">
          <Map/>
        </Route>
      </Switch> 
    </Router>
    
  );
}

export default App;
